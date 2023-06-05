import React from 'react';
import { NavLink } from "react-router-dom";
import './navBar.css';


const navBar = () => {
    return (
        <nav className='nav'>
            <span className='container'>
                <div className="burger-menu">
                    <input id="menu__toggle" type="checkbox" />
                    <label className="menu__btn" for="menu__toggle">
                        <span></span>
                    </label>
                    <ul className='ul menu__box'>
                        <li><NavLink to='/projects' className='menu__item'>Projects</NavLink></li>
                        <li><NavLink to='/info' className='menu__item'>Info</NavLink></li>
                        <li><NavLink to='/aboutme' className='menu__item'>About Me</NavLink></li>
                        <li><NavLink to='/experience' className='menu__item'>Experience</NavLink></li>
                    </ul>
                </div>
            </span>
        </nav>
    );
};

export default navBar;