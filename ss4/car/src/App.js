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
// import React, { useState } from 'react';
//
// const carList = ['Car1', 'Car2', 'Car3'];
// const colorList = ['Red', 'Blue', 'Green'];
//
// const App = () => {
//   const [selectedCar, setSelectedCar] = useState({
//     car: carList[0],
//     color: colorList[0],
//   });
//
//   const handleCarChange = (event) => {
//     const selectedCarName = event.target.value;
//
//     setSelectedCar((previousState) => {
//       return {
//         ...previousState,
//         car: selectedCarName,
//       };
//     });
//   };
//
//
//   const handleColorChange = (event) => {
//     const selectedColorName = event.target.value;
//
//     setSelectedCar((previousState) => {
//       return {
//         ...previousState,
//         color: selectedColorName,
//       };
//     });
//   };
//
//   const renderElement = () => {
//     return (
//         <div>
//           <h1>Selected Car: {selectedCar.car}</h1>
//           <h2>Selected Color: {selectedCar.color}</h2>
//
//           <select value={selectedCar.car} onChange={handleCarChange}>
//             {carList.map((car) => (
//                 <option key={car} value={car}>
//                   {car}
//                 </option>
//             ))}
//           </select>
//
//           <select value={selectedCar.color} onChange={handleColorChange}>
//             {colorList.map((color) => (
//                 <option key={color} value={color}>
//                   {color}
//                 </option>
//             ))}
//           </select>
//         </div>
//     );
//   };
//
//
//   return renderElement();
// };
//
// export default App;

