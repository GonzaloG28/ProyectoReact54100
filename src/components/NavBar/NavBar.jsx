import "./navBar.css";
import { Link } from 'react-router-dom'
import Logo from '../../assets/Logo.png'
import CartWidget from "./CartWidget";
import Hamburguer from "./Hamburguer";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";

function NavBar() {

  const {countCart} = useContext(CartContext)

  return (
    <div>
        <nav className="navbar navbar-expand-lg nav">
          <div className="container-fluid navBar">

            <Link className="navbar-brand Logo" to={`/`}><img src={Logo} alt="LOGO" /></Link>

            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
              <Hamburguer/>
            </button>

            <div className="collapse navbar-collapse navbarLinks" id="navbarNavAltMarkup">
              
                <ul className="navbar-nav boxLinks">

                  <Link className="nav-link link hvr-float" to={`/`}>HOME</Link>
                  <Link className="nav-link link hvr-float" to={`/category/men`}>MEN</Link>
                  <Link className="nav-link link hvr-float" to={`/category/women`}>WOMEN</Link>

                </ul>

                <div className ="cartWidget">
                  <Link to={`/cart`}> <CartWidget/> </Link>
                  <span className="badge">{countCart()}</span>
                </div>

              </div>
            </div>
        </nav>
    </div>
  )
}

export default NavBar
