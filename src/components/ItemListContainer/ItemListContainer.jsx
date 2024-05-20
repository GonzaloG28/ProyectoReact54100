import { useEffect, useState } from "react"
import ItemList from "./ItemList"
import { useParams } from "react-router-dom"
import { collection,getDocs,getFirestore, query, where } from 'firebase/firestore'

function ItemListContainer({title}) {
  const [products, setProducts] = useState([])
  const {idCategory} = useParams()

  useEffect(() =>{
    //traer firestore
    const db = getFirestore()
    //utilizar collection para traer el firestore y el nombre de la coleccion
    const prodRef = collection(db, 'items')
    if (idCategory){
      const q = query(prodRef, where('category', '==', idCategory))

      //creamos una promesa para que nos traiga el documento
      getDocs(q)
      .then(res => {setProducts(res.docs.map(docu =>  ({id: docu.id, ...docu.data()})))})
    } else {
      getDocs(prodRef)
      .then(res => {setProducts(res.docs.map(docu => ({id: docu.id, ...docu.data()})))})
    }
    
    },[idCategory])

  return (
    <div>
      <h1 className='title'>{title}</h1>
      <ItemList products={products}/>
    </div>
  )
}

export default ItemListContainer



