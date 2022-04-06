import React from "react";
import Counter from "./Components/Counter";
class App extends React.Component {
  constructor() {
    super();
    this.state={
      isShown : true
    }
  }
  isinitiz
 componentDidMount(){ console.log("componentDidMount")}

  render() { 
    return (
      <div>
        <button onClick={()=>this.setState({isShown: !this.state.isShown})}>
        {this.state.isShown? "Hide" : "Show"}
        </button>
        
        {this.state.isShown && <Counter/>}
      </div>
      );
  }
}
 
export default App ;
