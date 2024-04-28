import './style.css'
import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import { BrowserRouter, Routes, Route} from "react-router-dom"
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'


function App() {

  return (
    <BrowserRouter>
      <NavBar/>

      <Routes>
        <Route path='/' element={<ItemListContainer title={"¡Welcome to Aroma Oasis!"}/>}/>
        <Route path='/category/:idCategory' element={<ItemListContainer title={"¡Welcome to Aroma Oasis!"}/>}/>
        <Route path='/item/:idProduct' element={<ItemDetailContainer/>}/>
        

        <Route path='*' element={<div><h1>RUTA NO ENCONTRADA</h1></div>}/>
      </Routes>

    </BrowserRouter>
  )
}

export default App


