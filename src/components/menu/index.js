import React from 'react';

import { Link } from 'react-router-dom';

export default function Menu() {
    return (
        <nav className='navbar navbar-dark bg-dark'>
            <div className='container'>
                <div className='navbar-header'>
                    <Link className='navbar-brand' to='/todos'>
                        <i className='fa fa-calendar-check-o'></i> TodoApp
                    </Link>
                </div>
                
                
                <ul className='nav'>
                    <li className='nav-item'>
                        <Link className='nav-link navbar-brand' to='/todos'>Tarefas</Link>
                    </li>
                    <li className='nav-item'>
                        <Link className='nav-link navbar-brand' to='/about'>Sobre</Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
}