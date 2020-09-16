const RENDER_TO_DOM = Symbol('render to dom');
export class Component{
    constructor(){
        this.props = Object.create(null);
        this.children = [];
        this._root = null;
        this._range = null;
    }
    setAttribut(name,value){
        this.props[name] = value;
    }
    appendChild(component){
        this.children.push(component);
    }

    [RENDER_TO_DOM](range){
        this._range = range;
        this.render()[RENDER_TO_DOM](range)
    }

    rerender(){
        let oldRange = this._range;
        let range = document.createRange();
        range.setStart(oldRange.startContainer,oldRange.StartOffSet);
        range.setEnd(oldRange.startContainer,oldRange.StartOffSet);
        this[RENDER_TO_DOM](range);

        oldRange.setStart(range.endContainer,range.endOffset);
        oldRange.deleteContents();
    }
}
class ElementWrapper{
    constructor(type){
        this.root = document.createElement(type);
    }
    setAttribut(name,value){
        if(name.match(/^on([\s\S]+)$/)){
            this.root.addEventListener(RegExp.$1.replace(/^[\s\S]/,c=>c.toLowerCase()),value);
        }else{
            if(name === 'className'){
                this.root.setAttribut('class',value);
            }else{
                this.root.setAttribut(name,value);
            }
        }
    }
    appendChild(component){
        this.root.appendChild(component.root);
    }
    [RENDER_TO_DOM](range){
        range.deleteContents();
        range.insertNode(this.root);
    }
}
class TextWrapper{
    constructor(content){
        this.root = document.createTextNode(content)
    }
    [RENDER_TO_DOM](range){
        range.deleteContents();
        range.insertNode(this.root);
    }
}

export function createElement(type,attributes,...children){
    let e;
    if(typeof type === 'string'){
        e = new ElementWrapper(type);
    }else{
        e = new type;
    }

    for(let p in attributes){
        e.setAttribut(p,attributes[p]);
    }

    let insertChildren = (children) =>{
        for(let child of children){
            if(typeof child === 'string'){
                child = new TextWrapper(child);
            }
            if(child === null)
                continue;
            if(typeof child === 'object' && child instanceof Array){
                insertChildren(child);
            }else{
                e.appendChild(child);
            }
        }
    }
    insertChildren(children)
    return e;
}

export function render(component,parentElement){
    let range = document.createRange();
    range.setStart(parentElement,0);
    range.setEnd(parentElement,parentElement.childNodes.length);
    range.deleteContents();
    component[RENDER_TO_DOM](range);
}