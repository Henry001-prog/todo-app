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
                
                
                <ul className='nav' style={{paddingRight: 50}}>
                    <li className='nav-item'>
                        <Link className='nav-link navbar-brand' to='/todos' style={{paddingLeft: 0}}>Tarefas</Link>
                    </li>
                    <li className='nav-item' style={{paddingRight: 50}}>
                        <Link className='nav-link navbar-brand' to='/about' style={{paddingLeft: 0}}>Sobre</Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
}