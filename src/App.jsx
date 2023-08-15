import { useState } from 'react'
import './App.css'
import ItemListContainer from './Containers/ItemListContainer'
import Navbar from './Containers/NavBar'

function App() {
const productos = "Listas aun no disponibles";

return (
<div className='App'>
	<header className='App-header'>
		<Navbar />
		<ItemListContainer productos={productos} />
	</header>
</div>
);
}

export default App