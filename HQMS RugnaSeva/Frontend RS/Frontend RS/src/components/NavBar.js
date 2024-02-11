import React, { Component } from "react";
import { Link, NavLink } from "react-router-dom";

export class NavBar extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
          
        <div className="logo_hos">
        <Link to="/"> <img
        src="https://images.unsplash.com/photo-1697372592660-d95516699311?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2900&q=80"
              alt=""
              href="/"
            /> </Link> </div>
          
          <div className="container-fluid">
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        
        <div className="collapse navbar-collapse justify-content-end" id="navbarNavDropdown" >
      
      <ul className="navbar-nav ">
      <li className="nav-item ms-3">
          <Link
            className="fs-5 nav-link active"
            aria-current="page"
            to="/"
          > <button className="NavBar-buttons">
            Home
          </button></Link>
        </li> 

        <li className="nav-item ms-3">
          <Link
            className="fs-5 nav-link active"
            aria-current="page"
            to="/newReg"
          > <button className="NavBar-buttons">
            Register</button>
          </Link>
        </li> 
        <li className="nav-item ms-3">
          <Link
            className="fs-5  nav-link active"
            aria-current="page"
            to="/login"
          > <button className="NavBar-buttons">
            Login </button>
          </Link>
        </li>
        <li className="nav-item ms-3">
          <Link
            className="fs-5  nav-link active"
            aria-current="page"
            to="/contactUs"
          > <button className="NavBar-buttons">
            Contact Us </button>
          </Link>
        </li>
      </ul>
    </div>
  </div>
</nav>

</div> );

} }




export default NavBar;
