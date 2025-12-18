import React from "react";
import './Navbar.css'
import { Link } from "react-router-dom";

const Navbar:React.FC = () => {
    return(
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <Link className="navbar-brand" to="/">EduPlus</Link>

    <button
      className="navbar-toggler"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span className="navbar-toggler-icon"></span>
    </button>

    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/">
            <i className="fa-solid fa-house"></i> Home
          </Link>
        </li>

        <li className="nav-item">
          <Link className="nav-link" to="/link">
            <i className="fa-solid fa-book-open"></i> Cours
          </Link>
        </li>

        
        <li className="nav-item">
          <Link className="nav-link disabled" aria-disabled="true" to="#">
            <i className="fa-solid fa-chalkboard-user"></i> Enseignants
          </Link>
        </li>

        <li className="nav-item">
          <Link className="nav-link disabled" aria-disabled="true" to="#">
            <i className="fa-solid fa-envelope"></i> Contact
          </Link>
        </li>

         <li className="nav-item">
          <Link className="nav-link disabled" aria-disabled="true" to="#">
             Certification
          </Link>
        </li>

      </ul>

      <form className="d-flex" role="search">
        <input
          className="form-control me-2"
          type="search"
          placeholder="Search"
          aria-label="Search"
        />
        <button className="btn btn-outline-success" type="submit">
          Search
        </button>
      </form>
    </div>
  </div>
</nav>

    );
};

export default Navbar;