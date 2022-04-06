import React from "react";

class Counter extends React.Component {
    constructor() {
        console.log("initialisation")
        super();
        this.state = { 
            count : 0
                 }
    }
    componentDidMount(){console.log("componentDidMount")}
    componentDidUpdate(){console.log("componentDidUpdate")}
    componentWillUnmount(){console.log("componentWillUnmount")}
    render() { 
   console.log("rendering")
        return (  
<div>
<h1>THIS IS COUNTER </h1>
<button onClick={()=>this.setState({count: this.state.count+1})}>+</button>
<span>{this.state.count}</span>
    <button onClick={()=>this.setState({count: this.state.count>0 ? this.state.count-1 : this.state.count })}>-</button>
 
</div>
        );
    }
}
 
export default Counter ;
