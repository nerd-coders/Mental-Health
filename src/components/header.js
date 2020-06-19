import React from "react";
import { NavLink } from "react-router-dom";

const Header = props => (
    <nav class="navbar navbar-expand-lg navbar-dark bg-light static-top">
        <div class="container">
            <a class="navbar-brand" href="#">
            </a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarResponsive">
                <ul class="navbar-nav ml-auto">
                    <li class="nav-item">
                        <NavLink className = {"nav-link"} to = "/">Home</NavLink>
                    </li>
                    <li class="nav-item">
                        <NavLink className = {"nav-link"} to = "/blogs">Blogs</NavLink>
                    </li>
                    <li class="nav-item">
                        <NavLink className = {"nav-link"} to = "/forum">Forum</NavLink>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Contact Us</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
);


export default Header;