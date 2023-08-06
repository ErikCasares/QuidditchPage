import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ItemListContainer from './Containers/ItemListContainer'
import CheckListContainer from './Containers/CheckListContainer'
import CartWidget from './components/CartWidget/CarWidget'


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <CartWidget/>
        <CheckListContainer/>
      </header>
    </div>
  );

}





export default App
