import React from "react";
import { Link } from "react-router-dom";
import "./Nav.css";
const Nav = () => (
        
    <nav className="navbar navbar-expand-md">
            <h1> <Link to="/" className="header">  NIKLAS <br></br> GUSTAFSON</Link></h1> 
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar7">
                <span className="navbar-toggler-icon"> <i class="fas fa-bars"></i></span>
            </button>
            <div className="navbar-collapse collapse justify-content-stretch" id="navbar7">
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item">
                        <a> <Link to="/" className={window.location.pathname === "/" ? "nav-link active" : "nav-link"}> Home </Link> </a>
                    </li>
                    <li className="nav-item">
                        <a> <Link to="/info" className={window.location.pathname === "/info" ? "nav-link active" : "nav-link"}> Info </Link> </a>
                    </li>
                    <li className="nav-item">
                        <a><Link to="/JustGuts" className={window.location.pathname === "/JustGuts" ? "nav-link active" : "nav-link"}> Just Guts </Link> </a>
                    </li>
                    <li className="nav-item">
                        <a><Link to="/blog" className={window.location.pathname === "/blog" ? "nav-link active" : "nav-link"}> Blog </Link> </a>
                    </li>
                </ul>
            </div>
    </nav>
);

export default Nav; 


