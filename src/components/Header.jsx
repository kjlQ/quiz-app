import React from 'react';
import {Link} from "react-router-dom";

const Header = () => {
    return (
        <header>
            <nav className="navMenu">
                <Link to={'/'}>Словник</Link>
                <Link to={'/add-new-word'}>Додати слово</Link>
                <Link to={'/audit'}>Перевірка</Link>
            </nav>
        </header>
    );
};

export default Header;