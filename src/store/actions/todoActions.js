import api from '../../services/api';

export const DESCRIPTION_CHANGED = 'DESCRIPTION_CHANGED';
export const changeDescription = event => ({
    type: DESCRIPTION_CHANGED,
    payload: event.target.value
});

export const TODO_SEARCHED = 'TODO_SEARCHED';
const todoSearched = todo => ({
    type: TODO_SEARCHED,
    payload: todo.data,
});

export const search = () => {
    return (dispatch, getState) => {
        async function loadData() {
            try {
                const description = getState().todo.description;
                const search = description ? `&description__regex=/${description}/` : '';
                const todo = await api.get(`/todos?sort=-createdAt${search}`);
                //const films = response.data;
                console.log('redux:', todo);
                const action = todoSearched(todo);
                dispatch(action);
            } catch (error) {
                alert("Não foi possível carregar os dados!");
                return;
            }
        }
        loadData();
    }
}

export const TODO_ADDED = 'TODO_ADDED';
const todoAdded = addTodo => ({
    type: TODO_ADDED,
    payload: addTodo
});

export const add = (description) => {
    return dispatch => {
        async function handleAdd() {
            try {
                const addTodo = await api.post('/todos', {description});
                const action = todoAdded(addTodo);
                dispatch(action);
                dispatch(search());
            } catch (error) {
                alert("Não foi possível adicionar o to do!");
                return;
            }
        }
        handleAdd();
    }
}

export const TODO_MARKED_AS_DONE = 'TODO_MARKED_AS_DONE';
const todoMarkedAsDone = todoMarked => ({
    type: TODO_MARKED_AS_DONE,
    payload: todoMarked.data
});

export const markAsDone = (todo) => {
    return dispatch => {
        async function handleMark() {
            try {
                const todoMarked = await api.put(`/todos/${todo._id}`, { ...todo, done: true });
                const action = todoMarkedAsDone(todoMarked);
                dispatch(action);
                dispatch(search());
            } catch (error) {
                alert("Não foi possível marcar o to do!");
                return;
            }
        }
        handleMark();
    }
}

export const TODO_MARKED_AS_PENDING = 'TODO_MARKED_AS_PENDING';
const todoMarkedAsPending = todoPending => ({
    type: TODO_MARKED_AS_PENDING,
});

export const markAsPending = todo => {
    return dispatch => {
        async function handleMarkAsPending() {
            try {
                const todoPending = await api.put(`/todos/${todo._id}`, { ...todo, done: false });
                const action = todoMarkedAsPending(todoPending);
                dispatch(action);
                dispatch(search());
            } catch (error) {
                alert("Não foi possível marcar o to do como pendente!");
                return;
            }
        }
        handleMarkAsPending();
    }
}

export const TODO_REMOVE = 'TODO_REMOVE';
const todoRemove = todoRemoved => ({
    type: TODO_REMOVE,
});

export const remove = todo => {
    return dispatch => {
        async function handleRemove() {
            try {
                const todoRemoved = await api.delete(`/todos/${todo._id}`);
                const action = todoRemove(todoRemoved);
                dispatch(action);
                dispatch(search());
            } catch (error) {
                alert("Não foi possível deletar o item!");
                return;
            }
        }
        handleRemove();
    }
}

export const TODO_CLEAR = 'TODO_CLEAR';
const todoClear = () => {
   return {
    type: TODO_CLEAR,
   }
};

export const clear = () => {
    return dispatch => {
        dispatch(todoClear());
        dispatch(search());
    }
    
};

/*export const TODO_CLEAR = 'TODO_CLEAR';
export const clear = () => ({
    type: TODO_CLEAR,
});

export const todoClear = description => {
    return dispatch => {
        function handleClear() {
            dispatch(clear(description));
        }
        handleClear();
    }
}*/