import React from 'react';

export default function PageHeader({name, small}) {
    return (
        <header className='page-header'>
            <h2>
                {name}
                <small className='text-secondary' style={{marginLeft: 10, fontSize: 22}}>{small}</small>
            </h2>
        </header>
    );
}