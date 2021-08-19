import React from 'react';
import IconButton from '../template/iconButton';

export default function TodoList(props) {

    const renderRows = () => {
        const list = props.list || [];
        return (
            list.map(todo => (
                <tr key={todo._id}>
                    <td>{todo.description}</td>
                    <td>
                        <IconButton styles='danger' icon='trash-o'
                            onClick={() => props.handleRemove(todo)}></IconButton>
                    </td>
                </tr>
            ))
        );
    }

    return (
        <table className='table'>
            <thead>
                <tr>
                    <th>Descrição</th>
                    <th>Ações</th>
                </tr>
            </thead>
            <tbody>
                {renderRows()}
            </tbody>
        </table>
    );
}