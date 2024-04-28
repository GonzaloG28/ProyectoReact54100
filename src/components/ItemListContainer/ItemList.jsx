import "./ItemListContainer.css"
import { Link } from "react-router-dom"

function ItemList({ products }) {
  return (
    <div className="container">
        <div className="row">

            {products.map(product => (

            <article key={product.id} className="card col-sm-3 article hvr-shadow">
             
              <img src={product.image} alt={product.name} className="card-img-top imgCard "/>
            <h4>{product.name}</h4>
            <p className="price">Price: ${product.price}</p>
            
            <div className="d-grid mx-auto bton">

            <Link to={`/item/${product.id}`}><button className="btn btn-dark" type="button">Detalles</button></Link>

              </div>
        </article>

      ))}
      </div>
    </div>
)}

export default ItemList


