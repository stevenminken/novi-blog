import React from 'react';
import {Link} from 'react-router-dom';

const NotFound = () => {
    return (
        <div>
            <h1>De pagina is niet gevonden</h1>
            <h2>Klik <Link to="/">hier</Link> om terug te keren naar de homepage</h2>
        </div>
    );
};

export default NotFound;