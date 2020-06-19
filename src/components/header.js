import React from "react";
import { NavLink } from "react-router-dom";

const Header = props => (
    <nav className="navbar navbar-expand-lg navbar navbar-dark bg-dark static-top">
        <div className="container">
            <a className="navbar-brand" href="#">
            </a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarResponsive">
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item">
                        <NavLink className = {"nav-link"} to = "/">Home</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className = {"nav-link"} to = "/blogs">Blogs</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className = {"nav-link"} to = "/forum">Forum</NavLink>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Contact Us</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
);


export default Header;