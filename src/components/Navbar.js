import React from 'react';
import { NavLink } from 'react-router-dom';

function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <NavLink className="navbar-brand" to="/">Zachary Greenberg</NavLink>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav mr-auto float-right">
                    <li className="nav-item">
                        <NavLink to="/about" activeClassName="active">
                            <a className="nav-link">About</a>
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/contact" activeClassName="active">
                            <a className="nav-link">Contact</a>
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/portfolio" activeClassName="active">
                            <a className="nav-link">Portfolio</a>
                        </NavLink>
                    </li>

                </ul>
            </div>
        </nav>
    );
};

export default Navbar;