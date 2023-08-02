import React from 'react'
import '../Navbar/navbarmain.css'
const Navbar = () => {
  return (
    <div className="container-fluid">
    <nav className="navbar navbar-expand-sm navbar-light ">
      <div className="container-fluid">
        <div className=" container-fluid">
          <a className="mytinery" href="#">
            <img src="/imagenes/logo.png" alt="Logo" className="img-fluid" />
            My Tinerary
          </a>
         
        </div>
      </div>

      <ul className="  navbar-nav ">
        <li className="nav-item active">
          <a className="nav-link" href="#">
            Home
          </a>
        </li>
        <li className=" nav-item ">
          <a className="nav-link" href="#">
            Cities
          </a>
        </li>
        
        <li className=" nav-item  ">
          <a type="button" className="btn btn-primary" href="#">
          &#128100;  Login
          </a>
        </li>
    
      </ul>
    </nav>
  </div>
);
}



export default Navbar
