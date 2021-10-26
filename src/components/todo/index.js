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

    const refresh = useCallback(async (description = '') => {
        try {
            const search = description ? `&description__regex=/${description}/` : '';
            const response = await api.get(`/todos?sort=-createdAt${search}`);
            setDescription(description);
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
            refresh(description);
        } catch (error) {
            alert("Não foi possível deletar o item!");
            return;
        }
    }

    async function handleMarkAsDone(todo) {
        await api.put(`/todos/${todo._id}`, { ...todo, done: true });
        refresh(description);
    }

    async function handleMarkAsPending(todo) {
        await api.put(`/todos/${todo._id}`, { ...todo, done: false });
        refresh(description);
    }

    function handleSearch() {
        refresh(description);
    }
    
    function handleClear() {
        refresh();
    }

    function capitalize(string){
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    return (
        <div>
            <br/>
            <PageHeader name='Tarefas' small='Cadastro' />
            <TodoForm 
                description={capitalize(description)}
                handleChange={handleChange}
                handleAdd={handleAdd} 
                handleSearch={handleSearch}
                handleClear={handleClear}
            />
            <TodoList 
                list={list} 
                handleMarkAsDone={handleMarkAsDone}
                handleMarkAsPending={handleMarkAsPending}
                handleRemove={handleRemove}
            />
        </div>
    );
}