import React from 'react';
import { Link } from 'react-router-dom';
import './Scss/Navbar.css'


function Navbar() {
    return (
        <>
            <nav className="navbar navbar-expand-lg bg-dark navbar-light shadow sticky-top py-2">
                <Link to="/Home" className="navbar-brand d-flex align-items-center text-center py-0 px-4 px-lg-5">
                    <h1 className="m-0 text-primary">Restaurent</h1>
                </Link>
                <button type="button" className="navbar-toggler me-4" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                    <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse" id="navbarCollapse">
                    <div className="navbar-nav ms-auto p-4 p-lg-0">
                        <Link to="/Add" className="nav-item  Add-btn">Add</Link>
                        <Link to="/Show" className="nav-item  Add-btn">Show</Link>
                        <Link to="/Edit" className="nav-item Add-btn">Edit</Link>

                    </div>
                    {/* <Link to={""} className="btn btn-primary rounded-0 py-4 px-lg-5 d-none d-lg-block">Book A table<i className="fa fa-arrow-right ms-3" /></Link> */}
                    {/* <div className="nav-item dropdown pe-5">
                        <Link to="#" className=" btn btn-outline-primary py-3 px-4 rounded-3 nav-link dropdown-toggle " data-bs-toggle="dropdown">Start Here</Link>
                        <div className="dropdown-menu rounded-0 m-0">
                            <Link to="/login" className="dropdown-item">Login</Link>
                            <Link to="/SignUp" className="dropdown-item">SignUp</Link>
                        </div>
                    </div> */}
                </div>
            </nav>


        </>
    )
}

export default Navbar
