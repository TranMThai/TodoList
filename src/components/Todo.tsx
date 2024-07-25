import { Box, Checkbox, Chip, FormControlLabel } from '@mui/material';
import React from 'react';
import { PRIORITY_HIGH, PRIORITY_MEDIUM } from '../constants/Priority';
import Todo from '../types/Todo';
import { useDispatch } from 'react-redux';
import todoSlice from '../redux/reducers/todoSlice';

interface IProps {
    todo: Todo;
}

const mappingPriorityColor = (priority: string) => {
    if(priority === PRIORITY_HIGH) return 'error'
    if(priority === PRIORITY_MEDIUM) return 'primary'
    return 'secondary'
};

const TodoComponent: React.FC<IProps> = ({ todo }) => {
    const dispatch = useDispatch()
    const { id, name, status, priority } = todo;

    const handleCheck = () => {
        dispatch(todoSlice.actions.check(id))
    }

    return (
        <Box
            p={2}
            mb={2}
            border={1}
            borderRadius={2}
            borderColor="grey.400"
            display="flex"
            flexDirection="row"
            alignItems="center"
            justifyContent="space-between"
        >
            <FormControlLabel
                control={<Checkbox checked={!status} onClick={handleCheck}/>}
                label={name}
            />
            <Chip
                label={priority}
                color={mappingPriorityColor(priority)}
                variant="outlined"
            />
        </Box>
    );
};

export default TodoComponent;
