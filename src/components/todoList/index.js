import React from 'react';
import IconButton from '../template/iconButton';

import { markAsDone, markAsPending, remove } from '../../store/actions/todoActions';
import { useSelector, useDispatch } from 'react-redux';

export default function TodoList(props) {

    const list = useSelector(state => state.todo.list);
    const dispatch = useDispatch();

    const renderRows = () => {
        //const list = props.list || [];
        return (
            list.map(todo => (
                <tr key={todo._id}>
                    <td className={todo.done ? 'markedAsDone' : ''}>{todo.description}</td>
                    <td>
                        <IconButton styles='success' icon='check' hide={todo.done}
                            onClick={() => dispatch(markAsDone(todo))}></IconButton>
                        <IconButton styles='warning' icon='undo' hide={!todo.done}
                            onClick={() => dispatch(markAsPending(todo))}></IconButton>
                        <IconButton styles='danger' icon='trash-o' hide={!todo.done}
                            onClick={() => dispatch(remove(todo))}></IconButton>
                    </td>
                </tr>
            ))
        );
    }

    return (
        <table className='table' style={{marginTop: 30}}>
            <thead>
                <tr>
                    <th style={{marginTop: 20}}>Descrição</th>
                    <th className='tableActions'>Ações</th>
                </tr>
            </thead>
            <tbody>
                {renderRows()}
            </tbody>
        </table>
    );
}