import React, { useEffect } from 'react';
import Grid from '../template/grid';
import IconButton from '../template/iconButton';

import { GridContainer, Input } from './styles';

import { useSelector, useDispatch } from 'react-redux';
import { changeDescription, search, add, clear } from '../../store/actions/todoActions';

export default function TodoForm(props) {

    const description = useSelector(state => state.todo.description);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(search());
    }, [dispatch]);

    const keyHandler = (e) => {
        if (e.key === 'Enter') {
            e.shiftKey ? dispatch(search()) : dispatch(add(description));
        } else if (e.key === 'Escape') {
            dispatch(clear());
        }
    }

    function capitalize(string){
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    return (
        <GridContainer role='form' className='todoForm'>
            <Grid cols='12 9 10' >
                <Input id='description' className='form-control' 
                    placeholder='Adicione uma tarefa'
                    onChange={event => dispatch(changeDescription(event))} 
                    onKeyUp={keyHandler}
                    value={capitalize(description)}
                />
            </Grid>

            <Grid cols='12 3 2'>
                <IconButton styles='primary' icon='plus'
                    onClick={() => dispatch(add(description))}></IconButton>
                <IconButton styles='info' style={{color: 'white'}} icon='search'
                    onClick={() => dispatch(search())}></IconButton>
                <IconButton styles='default' style={{backgroundColor: 'lightgray'}} icon='close'
                    onClick={() => dispatch(clear())}></IconButton>
            </Grid>
        </GridContainer>
    );
}