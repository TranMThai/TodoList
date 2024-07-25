import {
    Box,
    Chip,
    FormControl,
    FormControlLabel,
    FormGroup,
    InputLabel,
    MenuItem,
    OutlinedInput,
    Radio,
    RadioGroup,
    Select,
    SelectChangeEvent,
    TextField
} from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { PRIORITY_HIGH, PRIORITY_LOW, PRIORITY_MEDIUM } from '../constants/Priority';
import { STATUS_ALL, STATUS_COMPLETED, STATUS_TODO } from '../constants/StatusFilter';
import filterSlice from '../redux/reducers/filterSlice';
import Filter from '../types/Filter';

const FilterComponent: React.FC = () => {
    const dispatch = useDispatch();
    const [filter, setFilter] = useState<Filter>({
        search: '',
        status: STATUS_ALL,
        priority: []
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFilter({
            ...filter,
            [name]: value
        });
    };

    const handleSelect = (e: SelectChangeEvent<string[]>) => {
        setFilter({
            ...filter,
            priority: e.target.value as string[]
        });
    };

    useEffect(() => {
        dispatch(filterSlice.actions.editFilter(filter));
    }, [filter]);

    return (
        <Box p={2}>
            <FormGroup>
                <FormControl margin="normal" fullWidth variant="outlined">
                    <TextField
                        label="Search"
                        variant="outlined"
                        size="small"
                        type="search"
                        name="search"
                        onChange={handleChange}
                    />
                </FormControl>

                <FormControl fullWidth margin="normal">
                    <RadioGroup
                        name="status"
                        value={filter.status}
                        onChange={handleChange}
                        row
                    >
                        <FormControlLabel value={STATUS_ALL} control={<Radio />} label="All" />
                        <FormControlLabel value={STATUS_COMPLETED} control={<Radio />} label="Completed" />
                        <FormControlLabel value={STATUS_TODO} control={<Radio />} label="To Do" />
                    </RadioGroup>
                </FormControl>

                <FormControl fullWidth margin="normal">
                    <InputLabel id="filter-priority">Priority</InputLabel>
                    <Select
                        labelId="filter-priority"
                        multiple
                        value={filter.priority}
                        input={<OutlinedInput label="Priority" />}
                        onChange={handleSelect}
                    >
                        <MenuItem value={PRIORITY_HIGH}><Chip label={PRIORITY_HIGH} /></MenuItem>
                        <MenuItem value={PRIORITY_MEDIUM}><Chip label={PRIORITY_MEDIUM} /></MenuItem>
                        <MenuItem value={PRIORITY_LOW}><Chip label={PRIORITY_LOW} /></MenuItem>
                    </Select>
                </FormControl>
            </FormGroup>
        </Box>
    );
};

export default FilterComponent;
