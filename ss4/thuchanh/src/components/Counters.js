import {useState} from "react";

export function Counter() {
   const [count,setCount] =useState(0);
   const handleClick=()=>{
       const newValue=count+1;
       setCount(newValue);
   };
   return(
       <div>
           Value{count}
           <div>
               <button onClick={handleClick}>Increase</button>
           </div>
       </div>
   );
}