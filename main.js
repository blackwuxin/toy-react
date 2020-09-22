import {createElement,Component,render} from './toy-react';

class MyComponent extends Component{
    constructor(){
        super();
        this.state = {
            a:1,
            b:1
        }
    }
    render(){
        return <div {...this.props}>
        <h1>MyComponent</h1>
            <button onClick={()=>{
                this.state.a++;
                this.rerender();
            }}>add</button>
            {this.state.a.toString()}
            {this.state.b.toString()}
        </div>
    }
}


render(<MyComponent id="a" class ="c">
    <div>123</div>
    <div></div>
</MyComponent>,document.body);