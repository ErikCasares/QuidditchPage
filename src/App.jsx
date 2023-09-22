import './App.css'
import { CartComponentContext } from './CartContex/CartContex'
import Router from './components/router/router'
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {

return (
    <CartComponentContext>
        <Router/>
    </CartComponentContext>
)
}

export default App