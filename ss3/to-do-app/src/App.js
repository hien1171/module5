import logo from './logo.svg';
import './App.css';
import {Component} from "react";

class App extends Component{
    constructor(props) {
      super(props);
      this.state={
        list:[],
        item :''
      }
    }
    handleChange=(event) =>{
       this.setState({item:event.target.value})
    }
    handleAddItem=()=>{
      if(this.state.trim!==''){
        this.setState((prevState)=>({
          list:[...prevState.list,prevState.item],
          item:'',
        }))
      }
    }
  render() {
    return (
        <div>
          <input
              type="text"
              value={this.state.item}
              onChange={this.handleChange}
          />
          <button onClick={this.handleAddItem}>Add</button>

          <ul>
            {this.state.list.map((item, index) => (
                <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
    );
  }


}

export default App;
