import "./navBar.css";
import { Link } from 'react-router-dom'
import Logo from '../../assets/Logo.png'
import CartWidget from "./CartWidget";

function NavBar() {
  return (
    <div>
        <nav className="navbar navbar-expand-lg nav">
          <div className="container-fluid navBar">

            <Link className="navbar-brand Logo" to={`/`}><img src={Logo} alt="LOGO" /></Link>

            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse navbarLinks" id="navbarNavAltMarkup">
              
                <ul className="navbar-nav boxLinks">

                  <Link className="nav-link link hvr-float" to={`/`}>HOME</Link>
                  <Link className="nav-link link hvr-float" to={`/category/men`}>MEN</Link>
                  <Link className="nav-link link hvr-float" to={`/category/women`}>WOMEN</Link>
                  <Link className="nav-link link hvr-float" to={`/`}>CONTACT</Link>

                </ul>

                <div className ="cartWidget">
                  <a href="#"> <CartWidget/> </a>
                  <span className="badge">0</span>
                </div>

              </div>
            </div>
        </nav>
    </div>
  )
}

export default NavBar
