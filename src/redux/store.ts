import { configureStore } from '@reduxjs/toolkit';
import filterSlice from './reducers/filterSlice';
import todoSlice from './reducers/todoSlice';

const store = configureStore({
    reducer: {
        filter: filterSlice.reducer,
        todo: todoSlice.reducer
    }
});

export default store;
