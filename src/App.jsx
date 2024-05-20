import './style.css'
import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import { BrowserRouter, Routes, Route} from "react-router-dom"
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import Brief from './components/Checkout/Brief'
import CartContext from './context/CartContext'
import Checkout from './components/Checkout/Checkout'

function App() {

  return (
    <CartContext>
    <BrowserRouter>
      <NavBar/>

      <Routes>
        <Route path='/' element={<ItemListContainer title={"¡Welcome to Aroma Oasis!"}/>}/>
        <Route path='/category/:idCategory' element={<ItemListContainer title={"¡Welcome to Aroma Oasis!"}/>}/>
        <Route path='/item/:idProduct' element={<ItemDetailContainer/>}/>
        <Route path='/cart' element={<Brief/>}/>
        <Route path='/checkout' element={<Checkout/>}/>

        <Route path='*' element={<div><h1>RUTA NO ENCONTRADA</h1></div>}/>
      </Routes>

    </BrowserRouter>
    </CartContext>
  )
}

export default App


