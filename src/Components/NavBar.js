import React from 'react'
import avatar from '../img/avatar.png';
import {NavLink} from 'react-router-dom';

function Navbar() {
    return (
        <div className="NavBar">
            <nav className="nav">
                <div className="profile">
                    <img src="data:image/jpeg;base64,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" alt=""/>
                 </div>

                <ul className="nav-items">
                    <li className="nav-item">
                        <NavLink to="/" exact activeClassName="active">
                            Home
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/projects" exact activeClassName="active">
   Projests
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/internships" exact activeClassName="active">
                            Internships
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/blogs" exact activeClassName="active">
                            Tech -Blog
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/contact" exact activeClassName="active">
                            Contact
                        </NavLink>
                    </li>
                </ul>

                <footer className="footer">
                    <p>
                        @2021 Goashta Technologies
                    </p>
            </footer>
            </nav>
            
        </div>
    )
}

export default Navbar;
