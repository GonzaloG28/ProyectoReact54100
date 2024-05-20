
import ItemDetail from "./ItemDetail"
import { useParams } from "react-router-dom"
import { doc,getDoc,getFirestore } from 'firebase/firestore'
import { useEffect, useState } from "react"


function ItemDetailContainer() {

  const [data, setData] = useState([])
  const {idProduct} = useParams()

  useEffect(() =>{

    const db=getFirestore()

    const prodRef = doc(db, "items", idProduct)

    getDoc(prodRef)
    .then(res =>  setData({ id: res.id, ...res.data()}))
  
  }, [idProduct])

  return (
    <div>
      <ItemDetail producto={data}/>
    </div>
  )
}

export default ItemDetailContainer
