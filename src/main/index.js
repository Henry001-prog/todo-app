import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';

import Todo from '../components/todo';
//import About from '../about';
//import Menu from '../menu';

export default function App() {
    return(
        <div className='container'>
            <Todo />
        </div>
    );
}