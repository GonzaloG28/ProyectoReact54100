import React from 'react'
import { useForm } from 'react-hook-form'

function CheckoutForm({ onSubmit }) {

    //usamos las funciones del hook useForm para manejar los formularios
    const { register, handleSubmit, watch, formState: { errors } } = useForm()

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
      <div className="mb-3">
        <label className="form-label">Name</label>
        <input type="text" className="form-control" required placeholder="Name" {...register("name")} />
      </div>
      <div className="mb-3">
        <label className="form-label">Last name</label>
        <input type="text" className="form-control" required placeholder="Last name" {...register("last name")} />
      </div>
      <div className="mb-3">
        <label className="form-label">Email</label>
        <input type="email" className="form-control" required placeholder="name@example.com" {...register("email", { required: true })} />
      </div>
      <div className="mb-3">
        <label className="form-label">Confirm Email</label>
        <input type="email" className="form-control" required placeholder="name@example.com" {...register("confirmEmail", { required: true, validate: (value) => value === watch("email") })} />
        {errors.confirmEmail?.type === "validate" && <p style={{ color: 'red' }}>Emails do not match.</p>}
      </div>
      <div className="mb-3">
        <label className="form-label">Phone</label>
        <input type="phone" className="form-control" required placeholder="9 0000 0000" {...register("phone")} />
      </div>
      <button className="btn btn-dark w-100" type="submit">BUY</button>
    </form>
    </div>
  )
}

export default CheckoutForm
