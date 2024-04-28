import React from 'react'
import { useState } from 'react'

function ItemCount({ stock, initial }) {
    const [count, setCount] = useState(initial)

    const increase = () =>{
        setCount(count < stock ? count + 1 : count)
    }

    const decrease = () => {
        setCount(count > 1 ? count - 1 : count)
    }

  return (
    <div>
        <p>Stock: {stock}</p>
        <div className="row g-0 containerCount">
            <button onClick={decrease} className="btn btn-dark col-md-2" type="button">-</button>
            <h4 className="col-md-4 count">{count}</h4>
            <button onClick={increase} className="btn btn-dark col-md-2" type="button">+</button>
        </div>
    </div>
  )
}

export default ItemCount
