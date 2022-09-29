import { faTerminal } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
// import logo from '../../images/Logo.svg'
import './Header.css'

const Header = () => {
    return (
        <nav className='header'>
            <div className="navbar bg-base-100">
                <FontAwesomeIcon icon={faTerminal}></FontAwesomeIcon>
                <p className="ml-2 text-violet-500 text-2xl font-bold">Programming Club</p>
            </div>
        </nav>
    );
};

export default Header;