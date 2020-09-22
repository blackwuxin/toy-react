const RENDER_TO_DOM = Symbol('render to dom');
export class Component {
    constructor() {
        this.props = Object.create(null);
        this.children = [];
        this._root = null;
        this._range = null;
    }
    setAttribute(name, value) {
        this.props[name] = value;
    }
    appendChild(component) {
        this.children.push(component);
    }
    get vdom() {
        return this.render().vdom;
    }
    [RENDER_TO_DOM](range) {
        this._range = range;
        this.render()[RENDER_TO_DOM](range);
    }
    rerender() {
        let OldRange = this._range;
        let range = document.createRange();
        range.setStart(OldRange.startContainer, OldRange.StartOffSet);
        range.setEnd(OldRange.startContainer, OldRange.StartOffSet);
        this[RENDER_TO_DOM](range);

        OldRange.setStart(range.endContainer, range.endOffset);
        OldRange.deleteContents();
        // this._range.deleteContents();
        // this[RENDER_TO_DOM](this._range);
    }
    setState(newState) {
        if (this.state == null || typeof this.state !== 'object') {
            this.state = newState;
            this.rerender();
            return;
        }
        let merge = (oldState, newState) => {
            for (let p in newState) {
                if (oldState[p] === null || typeof oldState[p] !== 'object') {
                    oldState[p] = newState[p];
                } else {
                    merge(oldState[p], newState[p]);
                }
            }
        }
        merge(this.state, newState);
        this.rerender();
    }
}
class ElementWrapper extends Component {
    constructor(type) {
        super();
        this.type = type;
        // this.root = document.createElement(type);
    }
    // setAttribute(name, value) {
    //     if (name.match(/^on([\s\S]+)$/)) {
    //         this.root.addEventListener(RegExp.$1.replace(/^[\s\S]/, c => c.toLowerCase()), value);
    //     } else {
    //         if (name === 'className') {
    //             this.root.setAttribute('class', value);
    //         } else {
    //             this.root.setAttribute(name, value);
    //         }
    //     }
    // }
    // appendChild(component) {
    //     // this.root.appendChild(component.root);
    //     let range = document.createRange();
    //     range.setStart(this.root, this.root.childNodes.length);
    //     range.setEnd(this.root, this.root.childNodes.length);
    //     range.deleteContents();
    //     component[RENDER_TO_DOM](range);
    // }
    [RENDER_TO_DOM](range) {
        range.deleteContents();
        let root = document.createElement(this.type);
        for (let name in this.props) {
            let value = this.props[name];
            if (name.match(/^on([\s\S]+)$/)) {
                root.addEventListener(RegExp.$1.replace(/^[\s\S]/, c => c.toLowerCase()), value);
            } else {
                if (name === 'className') {
                    root.setAttribute('class', value);
                } else {
                    root.setAttribute(name, value);
                }
            }
        }
        for (let child of this.children) {
            let range = document.createRange();
            range.setStart(root, root.childNodes.length);
            range.setEnd(root, root.childNodes.length);
            range.deleteContents();
            child[RENDER_TO_DOM](range);
        }
        range.insertNode(root);

    }
    get vdom() {
        return this;
        // return {
        //     type: this.type,
        //     props: this.props,
        //     children: this.children.map(child => child.vdom)
        // }
    }
}

class TextWrapper extends Component {
    constructor(content) {
        super();
        this.type = '#text';
        this.content = content;
        this.root = document.createTextNode(content);
    }
    [RENDER_TO_DOM](range) {
        range.deleteContents();
        range.insertNode(this.root);
    }
    get vdom() {
        return this;
        // return {
        //     type: '#text',
        //     content: this.content
        // }
    }
}



export function createElement(type, attributes, ...children) {
    let e;
    if (typeof type === 'string') {
        e = new ElementWrapper(type);
    } else {
        e = new type;
    }
    for (let p in attributes) {
        e.setAttribute(p, attributes[p]);
    }
    let insertChildren = (children) => {
        for (let child of children) {
            if (typeof child === 'string') {
                child = new TextWrapper(child);
            }
            if (typeof child === 'object' && child instanceof Array) {
                insertChildren(child);
            } else {
                e.appendChild(child);
            }

        }
    }
    insertChildren(children)
    return e;
}

export function render(component, parentElement) {
    let range = document.createRange();
    range.setStart(parentElement, 0);
    range.setEnd(parentElement, parentElement.childNodes.length);
    range.deleteContents();
    component[RENDER_TO_DOM](range);
}