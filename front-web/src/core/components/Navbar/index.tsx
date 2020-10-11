import React from 'react';
import './styles.scss';

const Navbar = () => (
    <nav className="row bg-primary main-nav">
        <div className="col-2">
            <a href="https://www.google.com" className="nav-logo-text">
                <h4>Ds Catalog</h4>
            </a>            
        </div>
        <div className="col-6 offset-2">
            <ul className="main-menu">
                <li>
                    <a href="https://www.google.com" className="active">
                        HOME
                    </a>  
                </li>
                <li>
                    <a href="https://www.google.com">
                        CATALOGO
                    </a>  
                </li>
                <li>
                    <a href="https://www.google.com">
                        ADMIN
                    </a>  
                </li>
            </ul>
        </div>
    </nav>
);

export default Navbar;