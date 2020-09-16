const { render,Component,createElement } = require("./toy-react");

class MyComponent extends Component{
    constructor(){
        super();
        this.state ={
            a:1,
            b:1
        }
    }
    render(){
        return <div>
            <h1>MyComponent</h1>
            <button onclick={()=>{
                this.state.a++;
                this.rerender();
            }}>add</button>
            {this.state.a.toString()}
            {this.state.b.toString()}
        </div>
    }
}

render(<MyComponent class='a' id='b'>
    <div>123</div>
    <div></div>
  </MyComponent>,document.body);