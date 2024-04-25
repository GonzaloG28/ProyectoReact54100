import { useEffect, useState } from "react"
import ItemDetail from "./ItemDetail"
import infoProducts from "../../InfoProducts/infoProducts"
import { useParams } from "react-router-dom"

function ItemDetailContainer({ product }) {

  const [products, setProducts] = useState([])
  const {idProduct} = useParams()

  useEffect(() =>{
    infoProducts
    .then((res)=>{
      if(idProduct){
        const newProducts = res.filter((prod) => prod.id===idProduct)
        setProducts(newProducts)
      } else{
        setProducts(res)
      }
    })
    .catch(error =>console.error(error))
  },[idProduct])

  return (
    <div>
      <ItemDetail prod={products}/>
    </div>
  )
}

export default ItemDetailContainer
