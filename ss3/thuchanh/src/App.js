import logo from './logo.svg';
import './App.css';
import Welcome from "./components/Welcome";
import React, {Component} from "react";
import AddComponent from "./components/AddComponent";
import AddComponents from "./components/AddComponents";

// function App() {
//   // return (
//   //   <div className="App">
//   //     <Welcome name="Admin" />
//   //   </div>
//   // );
//
//     // return(
//     //    <AddComponents firstNumber={1} secondNumber={2}/>
//     // );
//
//     return(
//         <AddComponent firstNumber={1} secondNumber={4}/>
//
//     );
// }

class App extends Component{
    constructor(props) {
        super(props);
        this.state={
            number:0
        }
    }
    increase=() =>{
        this.setState({number: this.state.number+1});
    };
    decrease=() =>{
        this.setState({number: this.state.number-1});
    };

    render() {
        return (
            <div style={{textAlign:"center",padding:30}}>
                <button onClick={this.decrease}>Decrease</button>
                <span>{this.state.number}</span>
                <button onClick={this.increase}>Increase</button>

            </div>
        );
    }
}

export default App;
