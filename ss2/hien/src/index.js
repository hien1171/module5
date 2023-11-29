import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// name
const name="hien";
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // React.createElement("h2",{style:{textAlign:"center"}},name)
    <h2 style={{textAlign: "center"}}>{name}</h2>
);
// fruit
 const fruits=['Apple','Banana','Apricot','Orange']
 root.render(
     <div>
      <h1>List of fruits</h1>
      <ul>
       {fruits.map(item=>(
           <li>{item}</li>
       ))
       }
      </ul>
     </div>
 )
//time hien tai
 // const  tick =() =>{
 //     root.render(
 //         <div>
 //             <h1>Hello</h1>
 //             <h2>It is {new Date().toLocaleTimeString()}.</h2>
 //         </div>
 //     )
 // }
 // setInterval(tick,1000);

//browser

 root.render(<h4>Browser's details: {navigator.userAgent}</h4>)

//danh sach sinh vien
const students = [
    {
        company: 'Alfreds Futterkiste',
        contact: 'Maria Anders',
        country: 'Germany'
    },
    {
        company: 'Centro comercial Moctezuma',
        contact: 'Francisco Chang',
        country: 'Mexico'
    },
    {
        company: 'Ernst Handel',
        contact: 'Roland Mendel',
        country: 'Austria'
    },
    {
        company: 'Island Trading',
        contact: 'Helen Bennett',
        country: 'UK'
    },
    {
        company: 'Laughing Bacchus Winecellars',
        contact: 'Yoshi Tannamuri',
        country: 'Canada'
    },
    {
        company: 'Magazzini Alimentari Riuniti',
        contact: 'Giovanni Rovelli',
        country: 'Italy'
    }
]

root.render(
    <div>
        <h1>Students</h1>
        <table>
            <thead>
            <tr>
                <td>Company</td>
                <td>Contact</td>
                <td>Country</td>
            </tr>
            </thead>
            <tbody>
            {students.map(student => (
                <tr>
                    <td>{student.company}</td>
                    <td>{student.contact}</td>
                    <td>{student.country}</td>
                </tr>
            ))}
            </tbody>
        </table>
    </div>
);






// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
