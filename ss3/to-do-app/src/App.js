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
      if(this.state.item!==''&&this.state.item.trim==''){
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
              <thead>
              <h3>Todo list</h3>
              </thead>
              <tbody>
              {this.state.list.map((item, index) => (
                  <li key={index}>{item}</li>
              ))}
              </tbody>


          </ul>
        </div>
    );
  }


}

export default App;
