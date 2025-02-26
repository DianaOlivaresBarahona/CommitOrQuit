import React from "react";
import "../stylesheet/navbar.css";
import SearchField from "./searchfield";
import { useEffect } from "react";

const Navbar = () => {
    useEffect(() => {
        if (window.lucide) {
            window.lucide.createIcons();
        }
    }, []);

    return (
        <header>
            <nav className="Navbar">  
                <button className="menu-button">
                    <i data-lucide="menu"></i>
                </button>

                <div className="logo">
                    <h1 className="logo-text">KALEIDO</h1> 
                </div>
                
                    <SearchField />

                    <button className="save-button">
                        <i data-lucide="heart"></i>
                    </button>
            </nav>
        </header>
    );
};

export default Navbar;