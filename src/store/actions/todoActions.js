import api from '../../services/api';

export const changeDescription = event => ({
    type: 'DESCRIPTION_CHANGED',
    payload: event.target.value
});

export const TODO_SEARCHED = 'TODO_SEARCHED';
const setTodo = todo => ({
    type: TODO_SEARCHED,
    payload: todo,
});

export const search = () => {
    return dispatch => {
        async function loadData() {
            try {
                const todo = await api.get('/todos?sort=-createdAt');
                //const films = response.data;
                console.log('redux:', todo);
                const action = setTodo(todo);
                dispatch(action)
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