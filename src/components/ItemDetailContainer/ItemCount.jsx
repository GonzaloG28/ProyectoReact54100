import React from 'react'

function ItemCount({ stock, decrease, increase, count }) {

  return (
    <div>
        <p><strong>Stock: </strong>{stock}</p>
        <div className="row g-0 containerCount">
            <button onClick={decrease} className="btn btn-dark col-md-2" type="button">-</button>
            <h4 className="col-md-4 count">{count}</h4>
            <button onClick={increase} className="btn btn-dark col-md-2" type="button">+</button>
        </div>
    </div>
  )
}

export default ItemCount
