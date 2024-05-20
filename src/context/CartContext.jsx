import { createContext, useEffect, useState } from "react";

export const CartContext = createContext();


function CartProvider({ children }) {

    const initCart = JSON.parse(localStorage.getItem("cart")) || []

    const [ cart, setCart ] = useState(initCart)

    const addCart = (producto, count) =>{
        const addItem = {...producto, count}
        const newCart = [...cart]
        const existItem = newCart.find((prod) => prod.id === addItem.id)
        
        if(existItem){
          existItem.count += count
        }else{
          newCart.push(addItem)
        }
        setCart(newCart)
      }

      
      useEffect(() =>{
        localStorage.setItem("cart", JSON.stringify(cart))
      }, [cart])

      const countCart = () =>{
        // reduce nuestra array a un simple numero
        return cart.reduce((acc, prod) => acc + prod.count, 0)
      }

      const totalPrice = () =>{
        return cart.reduce((acc, prod) => acc + prod.price * prod.count, 0)
      }

      const totalItems = () =>{
        return cart.reduce((acc, prod) => acc + prod.count,0)
      }

    const removeItemList = (id) =>{
        const newCart = cart.filter(i => i.id !== id)
        setCart(newCart)
    }

    const deleteCart = () => {
        setCart([])
    }

  return (
      <CartContext.Provider value={{ cart, setCart, addCart, countCart, totalPrice, totalItems, removeItemList, deleteCart }}>
            { children }
        </CartContext.Provider>
  )
}

export default CartProvider
