const { render,Component,createElement } = require("./toy-react");

class MyComponent extends Component{
    render(){
        return <div>
            <h1>MyComponent</h1>
            {this.children}
        </div>
    }
}

render(<MyComponent class='a' id='b'>
    <div>123</div>
    <div></div>
  </MyComponent>,document.body);