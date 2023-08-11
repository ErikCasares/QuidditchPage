import { useState } from 'react'
import './App.css'
import ItemListContainer from './Containers/ItemListContainer'
import Navbar from './Containers/NavBar'
import Item from './components/item'



function App() {
  const productos = [
    { id: 1, nombre: 'Escoba Ascua Fugaz ', precio: 600 },
    { id: 2, nombre: "Escoba Recortador Lunar", precio: 600},
    { id: 3, nombre: "Escoba Tejetejos", precio: 600},
    { id: 4, nombre: "Escoba Hebra del Viento", precio: 600},
    { id: 5, nombre: "Escoba de la Casa de Hogwarts", precio: 600},
    { id: 6, nombre: "Escoba Guadaña Celeste", precio: 5000},
    { id: 7, nombre: "Escoba Flecha de Plata", precio: 5000},
    { id: 8, nombre: "Escoba Familiar Antigua", precio: 2500},
    { id: 9, nombre: "Escoba Aeromante", precio: 3000}
  ];

  return (
    <div className='App'>
      <header className='App-header'>
        <Navbar/>
        <ItemListContainer productos ={productos}/>
      </header>
    </div>
  );

}





export default App
