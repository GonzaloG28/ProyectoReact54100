import "./ItemDetail.css"
import { Link } from "react-router-dom"
import ItemCount from "./ItemCount"
function ItemDetail({ producto }) {


	return(
          <div className="card mb-3 prod">

                <Link className="close" to={`/`}><button type="button" className="btn-close bton" aria-label="Close"></button></Link>

                <article className="row g-0">

                  <div className="col-md-6">
                      <img src={producto.image} alt={producto.name} className="img-fluid rounded-start h-100 w-100" />
                  </div>

                  <div className="col-md-6 descProd">
                       <div className="card-body">
                         <h2>{producto.name}</h2>
                         <p>{producto.description}</p>
                         <p>Price: ${producto.price}</p>
                        <ItemCount stock={producto.stock} initial={1}/>
                      </div>
                  </div>
            </article>
          </div>
	)
}


export default ItemDetail
