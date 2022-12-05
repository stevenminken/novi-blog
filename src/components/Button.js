import React from 'react';

const Button = ({isAuthenticated, toggleIsAuthenticated, className}) => {
    let buttonText = "Inloggen";

    (isAuthenticated ?
            buttonText = "Uitloggen"
            :
            buttonText = "Inloggen"
    )

    return (
        <>
            <button id="login-button" className={className} onClick={(click) => {
                if (isAuthenticated) {
                    toggleIsAuthenticated(false);
                } else {
                    toggleIsAuthenticated(true);
                }
            }}
            >{buttonText}
            </button>
        </>)
}

export default Button;