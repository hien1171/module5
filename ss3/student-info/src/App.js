import logo from './logo.svg';
import './App.css';
import StudentInfoComponent from "./components/StudentInfoComponent";
import {useState} from "react";

function App() {
  const [nameClass,setNameClass]=useState("A02");
  return (
      <StudentInfoComponent></StudentInfoComponent>
  );
}

export default App;
