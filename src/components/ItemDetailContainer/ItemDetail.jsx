import "./ItemDetail.css"
import { Link } from "react-router-dom"
import ItemCount from "./ItemCount"
import AddItemButton from "./AddItemButton"
import { useState, useContext } from "react"
import { CartContext } from "../../context/CartContext"



function ItemDetail({ producto }) {

  const cartContext = useContext(CartContext)
  const {addCart} = cartContext

  const [count, setCount] = useState(1)

  const increase = () =>{
      setCount(count < producto.stock ? count + 1 : count)
  }

  const decrease = () => {
      setCount(count > 1 ? count - 1 : count)
  }


	return(
          <div className="card mb-3 prod">

                <Link className="close" to={`/`}><button type="button" className="btn-close bton" aria-label="Close"></button></Link>

                <article className="row g-0">

                  <div className="col-md-6">
                      <img src={producto.image} alt={producto.name} className="img-fluid rounded-start h-100 w-100" />
                  </div>

                  <div className="col-md-6 descProd">
                       <div className="card-body">
                         <h2>{producto.name}</h2>
                         <p>{producto.description}</p>
                         <p><strong>Price: </strong>${producto.price}</p>
                         
                        <ItemCount stock={producto.stock} count={count} decrease={decrease} increase={increase}/>
                        <AddItemButton product={producto} onAdd={() => {addCart(producto, count)}} />
                      </div>
                  </div>
            </article>
          </div>
	)
}


export default ItemDetail
