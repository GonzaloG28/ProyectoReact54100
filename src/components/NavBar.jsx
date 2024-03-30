import React from "react";
import "../css/style.css";
import "../css/navBar.css";
import { CiShoppingBasket } from "react-icons/ci";

function NavBar() {
  return (
    <div>
        <nav className="navbar navbar-expand-lg nav">
          <div className="container-fluid navBar">

            <a className="navbar-brand" href="#"><img src="" alt="LOGO" /></a>

            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse navbarLinks" id="navbarNavAltMarkup">
              <div className="navbar-nav boxLinks">
                
                <a className="nav-link link" href="#">HOME</a>
                <a className="nav-link link" href="#">MEN</a>
                <a className="nav-link link" href="#">WOMEN</a>
                <a className="nav-link link" href="#">CONTACT</a>

                <div className ="cartWidget">
                  <a href="#"> <CiShoppingBasket  size={50}/> </a>
                  <span className="badge">2</span>
                </div>

              </div>
            </div>
          </div>
        </nav>
    </div>
  )
}

export default NavBar
