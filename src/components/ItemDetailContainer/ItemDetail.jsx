

function ItemDetail() {
  return (
    <div>
      <article key={product.id} className="card col-sm-4">
            <img src={product.image} alt={product.name} className="card-img-top" />
            <h2>{product.name}</h2>
            <p>{product.description}</p>
            <p>Price: ${product.price}</p>
            <Link to={``}>Detalles</Link>
        </article>
    </div>
  )
}

export default ItemDetail
