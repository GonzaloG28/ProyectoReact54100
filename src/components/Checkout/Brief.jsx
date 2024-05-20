import "./cart.css"
import React, { useContext } from 'react'
import { CartContext } from '../../context/CartContext'
import { Link } from "react-router-dom"

function Brief() {

  const cartContext = useContext(CartContext)
    const { cart, deleteCart, totalItems, totalPrice, removeItemList } = cartContext


  return (
    <div className='boxCart'>
        <div className="cart container">
        <div className="boxProd row">
            {
        cart.length === 0 ? (
            <h2 className="cartEmpty">Your cart is empty!</h2>
          ) : (
            cart.map((prod) =>(
                <div className="prod col-4" key={prod.id}>
                <h5>{prod.name}</h5>
                <img src={prod.image} className="card-img-top" alt="Product"/>

                <div className="card-body cardBody">
                    <p>Items: {prod.count}</p>
                    <p>Total Price: ${(prod.price * prod.count).toLocaleString()}</p>
                    <button className="btn btn-dark" type="button" onClick={() => removeItemList(prod.id)}>Delet</button>
                 </div>

            </div>
          ))
          )}
            </div>
                <div className="details">
                <h1> Your Cart</h1>
                <div>
                <p><strong>Total Price:</strong> ${(totalPrice()).toLocaleString()}</p>
                <p><strong>Total items:</strong> {totalItems()}</p>
                 </div>
                <button className="btn btn-light btnDelete" type="button" onClick={deleteCart}>Empty</button>
                <Link to={'/checkout'}><button className="btn btn btn-dark" type="button">PAY</button></Link>
          </div>
        </div>
    </div>

  )
}

export default Brief
