import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import { collection, addDoc, getFirestore } from 'firebase/firestore'
import { CartContext } from '../../context/CartContext'
import CheckoutForm from './CheckoutForm'
import './cart.css'

const Checkout = () => {

  // para generar la orden  
  const [orderId, setOrderId] = useState('')

  // traemos las funciones de cartContext
  const { cart, totalPrice, deleteCart, totalItems } = useContext(CartContext)

  //traemos la base de datos
  const db = getFirestore()

  // funcion para generar orden
  const buy = (data) => {
    if (cart.length === 0) {
      alert('El carrito está vacío')
      return
    }

    const order = {
      cliente: data,
      products: cart,
      estado: 'Generada',
      totalItems: totalItems(),
      totalPrice: totalPrice(),
      date: new Date().toLocaleString()
    }
    console.log(order)

    const orderRef = collection(db, 'orders')

    addDoc(orderRef, order)
      .then((doc) => {
        setOrderId(doc.id)
        deleteCart()
      })
  }

   // condicion en caso de que no hayan productos en el carrito
  if (orderId) {
    return (
      <div className="cartEmpty">
        <h1>Thank you for your purchase!</h1>
        <p>Your order number is: <strong>{orderId}</strong></p>
      </div>
    )
  } else if (cart.length === 0) {
    return (
      <div className="cartEmpty">
        <h1>Your cart is empty!</h1>
        <Link to={'/'}><button className="btn btn btn-dark" type="button">BACK HOME</button></Link>
      </div>
    )
  }

  return (
    <div className="boxForm">
      <h1>Finalizar compra</h1>
      <CheckoutForm onSubmit={buy} />
    </div>
  )
}

export default Checkout;