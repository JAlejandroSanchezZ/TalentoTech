import React, {useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Perfil from './componentes/Perfil';
import Contador from './componentes/Contador';

function App() {
  //Declarar un nuevo estado de contador
  const [contador, setContador]= useState(0);
  
  return (
    <div className="App">
     <div class ='contenedor-principal'>
      <h1>Mis desarrolladores favoritos son</h1>
      <Perfil 
        nombre='Brais Moure'
        pais='España'
        imagen='brais'
        cargo='Ingeniero de Software'
        empresa='MoureDev'
        perfil='Es un Youtuber español, es el fundador de la empresa de desarrollo de software MoureDev'
        linkedin='https://www.likedin.com/in/braismoure/'
        youtube='https://www.youtube.com/@mouredev'
        twitter='https://www.x.com/MoureDev'
      />
<Perfil 
        nombre='Carlos Azaustre'
        pais='España'
        imagen='carlos'
        cargo='Ingeniero de Software'
        empresa='Learn JavaScript with Carlos Azaustre'
        perfil='Es un Youtuber español, es el fundador de la empresa de desarrollo de software 
        Learn JavaScript with Carlos Azaustre'
        linkedin='https://www.likedin.com/in/braismoure/'
        youtube='https://www.youtube.com/@mouredev'
        twitter='https://www.x.com/MoureDev'
      />
<Perfil 
        nombre='Nicolas Schürmman'
        pais='Chile'
        imagen='nicolas'
        cargo='Ingeniero de Software'
        empresa='HolaMundo.io'
        perfil='Es un Youtuber chileno, es el fundador de la empresa de desarrollo de software HolaMundo.io'
        linkedin='https://www.likedin.com/in/braismoure/'
        youtube='https://www.youtube.com/@mouredev'
        twitter='https://www.x.com/MoureDev'
      />
      {/* Agregamos un contador y un boton para incrementarlo*/}
      <p>Has hecho clic {contador} veces </p>
      <button onClick={()=> setContador(contador+1)}>
        Haz clic aquí
      </button>


     </div>
    </div>
  );
}

export default App;