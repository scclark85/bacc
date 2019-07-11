import React, { Component } from 'react';
import { Link } from "react-router-dom";
import Modal from "../Modal";
import "./style.css"

class Nav extends Component {
    render() {
        return (
            <div className="container">

                <nav className="navbar nav-tabs navbar-expand-lg">

                    <Link to="/" className="navbar-brand">
                        <img
                            className="nav_logo"
                            src="/images/BACC_logo.png"
                            alt="nav_logo"
                        />
                    </Link>
                    <div className="justify-content">
                        <div className="collpase navbar-collapse">
                            <ul className="navbar-nav mr-auto">
                                <li className="navbar-item">
                                    <Link to="/about" className="nav-link">What We Do</Link>
                                </li>

                                <li className="navbar-item">
                                    <Link to="/projects" className="nav-link">Check Out Our Projects</Link>
                                </li>

                                <li className="navbar-item">
                                    <Link to="/partners" className="nav-link">Partners</Link>
                                </li>

                                <li className="navbar-button">
                                    <Modal />
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        )
    }
}

export default Nav


