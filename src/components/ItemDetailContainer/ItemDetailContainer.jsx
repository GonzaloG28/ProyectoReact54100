
import ItemDetail from "./ItemDetail"
import { useParams } from "react-router-dom";
import { products } from "../../InfoProducts/infoProducts";


function ItemDetailContainer() {
  const {idProduct} = useParams()
	const prod = products.find(prod => prod.id === parseInt(idProduct))

  return (
    <div>
      <ItemDetail producto={prod}/>
    </div>
  );
}

export default ItemDetailContainer
