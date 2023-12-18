import logo from './logo.svg';
import './App.css';
import {useState} from "react";

const carList=["Wave","Dream","Sh","Jupiter"];
const  colorList=["Red","Blue","Green","Yellow"];

function App() {
    const [selectedCar,setSelectedCar]=useState({
        car:carList[0],
        color:colorList[0]
    });
    const handleCarChange=(event)=>{
        const selectedCarName=event.target.value;
        setSelectedCar((previousState)=>{
            return {
                ...previousState,
                car: selectedCarName,
            };
        });

    };
    const handleColorChange=(event)=>{
        const  selectedColorName=event.target.value;
        setSelectedCar((prevState )=>{
            return{
                ...prevState,
                color: selectedColorName,
            };
        });
    };
    
  return (
    <div className="App">

    </div>
  );
}

export default App;


