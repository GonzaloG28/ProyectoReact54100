import "../style.css"
import { CiShoppingBasket } from "react-icons/ci";

function NavBar() {
  return (
    <div>
        <nav className="navBar">
            <div><a href="#"><img src="" alt="" />logo</a></div>
            <ul className="navLinks">
                <li><a href="#">Inicio</a></li>
                <li><a href="#">Productos</a></li>
                <li><a href="#">Contacto</a></li>
            </ul>
            <div className ="carrito">
        <a href="#"><CiShoppingBasket  size={50}/></a>
            <span className="badge">2</span>
        </div>

        </nav>
    </div>
  )
}

export default NavBar
