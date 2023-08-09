import { useState } from 'react'
import './App.css'
import ItemListContainer from './Containers/ItemListContainer'
import Navbar from './Containers/NavBar'


function App() {


  return (
    <div className='App'>
      <header className='App-header'>
        <Navbar/>
        <ItemListContainer/>
      </header>
    </div>
  );

}





export default App
