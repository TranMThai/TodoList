import { Box, Button, FormControl, Grid, InputLabel, MenuItem, OutlinedInput, Select, SelectChangeEvent, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { v4 as uuidv4 } from "uuid";
import { PRIORITY_HIGH, PRIORITY_LOW, PRIORITY_MEDIUM } from '../constants/Priority';
import todoSlice from '../redux/reducers/todoSlice';
import { filtedTodoListSelector } from '../redux/selectors';
import Todo from '../types/Todo';
import TodoComponent from './Todo';

const TodoListComponent: React.FC = () => {
    const dispatch = useDispatch();
    const [todo, setTodo] = useState<Todo>({
        id: '',
        name: '',
        priority: PRIORITY_MEDIUM,
        status: true
    });

    const todoList = useSelector(filtedTodoListSelector);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setTodo({
            ...todo,
            name: e.target.value
        });
    };

    const handleSelect = (e: SelectChangeEvent<string>) => {
        setTodo({
            ...todo,
            priority: e.target.value
        });
    };

    const handleAdd = () => {
        dispatch(todoSlice.actions.add({
            ...todo,
            id: uuidv4()
        }));
        setTodo({
            ...todo,
            name: '',
            priority: PRIORITY_MEDIUM
        })
    };

    return (
        <Box p={2}>
            <Typography variant="h5" gutterBottom>Todo List</Typography>
            <Box mb={2}>
                {todoList.map(todo => (
                    <TodoComponent key={todo.id} todo={todo} />
                ))}
            </Box>

            <Grid container spacing={2} alignItems="center">
                <Grid item xs={12} sm={6} md={6}>
                    <FormControl margin="normal" fullWidth>
                        <TextField
                            label="Todo Name"
                            variant="outlined"
                            value={todo.name}
                            onChange={handleChange}
                        />
                    </FormControl>
                </Grid>

                <Grid item xs={12} sm={6} md={3}>
                    <FormControl margin="normal" fullWidth>
                        <InputLabel id="add_priority">Priority</InputLabel>
                        <Select
                            labelId="add_priority"
                            value={todo.priority}
                            input={<OutlinedInput label="Priority" />}
                            onChange={handleSelect}
                        >
                            <MenuItem value={PRIORITY_HIGH}>{PRIORITY_HIGH}</MenuItem>
                            <MenuItem value={PRIORITY_MEDIUM}>{PRIORITY_MEDIUM}</MenuItem>
                            <MenuItem value={PRIORITY_LOW}>{PRIORITY_LOW}</MenuItem>
                        </Select>
                    </FormControl>
                </Grid>

                <Grid item xs={12} sm={12} md={3}>
                    <FormControl margin="normal" fullWidth>
                        <Button
                            variant="contained"
                            color="primary"
                            sx={{ height: '56px' }}
                            onClick={handleAdd}
                        >
                            Add Todo
                        </Button>
                    </FormControl>
                </Grid>
            </Grid>
        </Box>
    );
};

export default TodoListComponent;
