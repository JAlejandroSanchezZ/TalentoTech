import React, {useState} from 'react';

export default function Contador(){
   const [contador,setContador] = useState(0);

   const aumentar = () =>{
    setContador(contador+1)

   };

   const disminuir = () =>{

   };

   return(
    <div>
        
        <p> {contador} </p>
        <button onClick={aumentar}> + </button>
        <button onClick={disminuir}> - </button>
    </div> 
   )
}