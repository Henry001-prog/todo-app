import React, { useState, useEffect, useCallback } from 'react';
import api from '../../services/api';

import PageHeader from '../pageHeader';
import TodoForm from '../todoForm';
import TodoList from '../todoList';

export default function Todo() {
    /*const [state, setState] = useState({
        description: '',
        list: []
    });*/
    //console.log(state);
    const [description, setDescription] = useState('');
    //console.log(description)
    const [list, setList] = useState([]);
    //console.log(list)

    async function handleAdd() {
        //const desc = description;
        await api.post('/todos', {description: description});
        //setState({...state, description: response});
        //clean();
        refresh();
    }

    function handleChange(e) {
        setDescription(e.target.value);
    }

    /*const clean = useCallback(async() => {
        const response = await api.get(`/todos?sort=-createdAt`);
        setList(response.data);
        setDescription('');
    }, []);*/

    const refresh = useCallback(async() => {
        try {
            const response = await api.get(`/todos?sort=-createdAt`);
            setDescription('');
            setList(response.data);
        } catch (error) {
            alert("Não foi possível carregar os dados!");
            return;
        }
    }, []);

    useEffect(() => {
        refresh();
        //clean();
    },[refresh]);

    /*useEffect(() => {
        let unmounted = false;
        if (!unmounted) {
            async function test() {
                await refresh()
            }
            test();
        }
        return () => { unmounted = true };
    },[refresh]);*/

    async function handleRemove(todo) {
        try {
            await api.delete(`/todos/${todo._id}`)
            //clean();
            refresh();
        } catch (error) {
            alert("Não foi possível deletar o item!");
            return;
        }
    }

    return (
        <div>
            <br/>
            <PageHeader name='Tarefas' small='Cadastro' />
            <TodoForm 
                description={description}
                handleAdd={handleAdd} 
                handleChange={handleChange}
            />
            <TodoList 
                list={list} 
                handleRemove={handleRemove} 
            />
        </div>
    );
}