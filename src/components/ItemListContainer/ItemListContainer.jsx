import "./ItemListContainer.css"
import { useEffect, useState } from "react"
import infoProducts from "../../InfoProducts/infoProducts"
import ItemList from "./ItemList"
import { useParams } from "react-router-dom"


function ItemListContainer({title}) {
  const [products, setProducts] = useState([])
  const {idCategory} = useParams()

  useEffect(() =>{
    infoProducts
    .then((res)=>{
      if(idCategory){
        const newProducts = res.filter((prod) => prod.category===idCategory)
        setProducts(newProducts)
      } else{
        setProducts(res)
      }
    })
    .catch(error =>console.log(error))
    .finally(() => console.log("finalizo la promesa"))
  },[idCategory])

  return (
    <div>
      <h1 className='title'>{title}</h1>
      <ItemList products={products}/>
    </div>
  )
}

export default ItemListContainer



