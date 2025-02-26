import React from "react";
import "../stylesheet/navbar.css";


const Navbar = () => {
    return (
        <header>
        <nav className="Navbar">  
            <div>
                <button className="meny-button">Menu</button>
            </div>

            <div className="logo">
                <h1 className="logo-text">KALEIDO</h1> 
            </div>

            <div className="search">
                <input type="text" placeholder="Sök..." className="search-input" />
                <button className="search-button">Search</button>
            </div>

            <ul className="nav-list">
                <button className="save-button">Save</button>
            </ul>

        </nav>
        </header>
    );
};

export default Navbar;