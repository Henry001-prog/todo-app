import React from 'react';

import PageHeader from '../pageHeader';
import TodoForm from '../todoForm';
import TodoList from '../todoList';

export default function Todo() {
    return (
        <div>
            <br/>
            <PageHeader name='Tarefas' small='Cadastro' />
            <TodoForm />
            <TodoList />
        </div>
    );
}