import React from 'react';
import {NavLink} from "react-router-dom";
import './Navigation.css';
import Button from "../Button";

const Navigation = ({isAuthenticated, toggleIsAuthenticated}) => {

    return (
        <nav>
            <div className="logo-text">
                <h3>Mijn Blog Space</h3>
                <div>{isAuthenticated ? <h6>u bent ingelogd</h6> :
                    <h6>U bent niet ingelogd</h6>}
                </div>
                <Button isAuthenticated={isAuthenticated} toggleIsAuthenticated={toggleIsAuthenticated} className={"nav-button"}/>
            </div>
            <ul>
                <li><NavLink to="/"
                             className={(navObject) => navObject.isActive === true ? 'active-link' : 'default-link'}>Home</NavLink>
                </li>
                <li><NavLink to="/login"
                             className={({isActive}) => isActive === true ? 'active-link' : 'default-link'}>Login</NavLink>
                </li>
                {isAuthenticated ? <li><NavLink to="/blogpage"
                                                className={({isActive}) => isActive === true ? 'active-link' : 'default-link'}>Blogpagina</NavLink>
                </li> : <li></li>}
                {isAuthenticated ? <li><NavLink to="/blogoverview"
                                                className={({isActive}) => isActive === true ? 'active-link' : 'default-link'}>Blog
                    Overzicht</NavLink></li> : <li/>}
            </ul>
        </nav>
    );
};

export default Navigation;