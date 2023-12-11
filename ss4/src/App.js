import logo from './logo.svg';
import './App.css';
import {StudentList} from "./components/students/StudentList";
import {useState} from "react";
import {DemoState} from "./components/DemoState";

function App() {
    const [nameClass, setNameClass] = useState("A0223I1");
    const changeName = (name) => {
        console.log(name)
        setNameClass(name);
        console.log(nameClass)
    }
    return (
        <>
            <DemoState></DemoState>
            <StudentList name={nameClass} changeName={changeName}></StudentList>
        </>
    );
}

export default App;
