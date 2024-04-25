import { Link } from "react-router-dom"

function ItemList({ products }) {
  return (
    <div className="container">
        <div className="row">
      {products.map(product => (
        <article key={product.id} className="card col-sm-4">
            <img src={product.image} alt={product.name} className="card-img-top" />
            <h2>{product.name}</h2>
            <p>{product.description}</p>
            <p>Price: ${product.price}</p>
            <Link to={`/detail/`}>Detalles</Link>
        </article>
      ))}
      </div>
    </div>
)}

export default ItemList


