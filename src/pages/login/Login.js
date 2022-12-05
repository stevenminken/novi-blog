import React from 'react';
import {Link} from "react-router-dom";
import "./Login.css";
import Button from "../../components/Button";

const Login = ({isAuthenticated, toggleIsAuthenticated}) => {

        return (
            <Link to="/blogoverview">
                <Button isAuthenticated={isAuthenticated} toggleIsAuthenticated={toggleIsAuthenticated}/>
            </Link>
        );
    }
;

export default Login;