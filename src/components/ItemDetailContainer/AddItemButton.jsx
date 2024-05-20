

function AddItemButton({ onAdd }) {

  return (
    <div>
       <button type="button" className="btn btn-dark btnCart" onClick={onAdd}>Add Cart</button>
    </div>
  )
}

export default AddItemButton
