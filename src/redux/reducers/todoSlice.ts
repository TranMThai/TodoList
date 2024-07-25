import { createSlice } from "@reduxjs/toolkit";
import { PRIORITY_HIGH, PRIORITY_LOW, PRIORITY_MEDIUM } from "../../constants/Priority";

const todoSlice = createSlice({
    name: "filter",
    initialState: [
        {
            id: "1",
            name: 'Learn redux',
            priority: PRIORITY_HIGH,
            status: true
        },
        {
            id: "2",
            name: 'Learn Java',
            priority: PRIORITY_MEDIUM,
            status: true
        },
        {
            id: "3",
            name: 'Learn C',
            priority: PRIORITY_LOW,
            status: true
        }
    ],
    reducers: {
        add: (state, action) => {
            state.push(action.payload)
        },
        check: (state, action) => {
            state.map(todo => {
                if(todo.id === action.payload){
                    todo.status = !todo.status
                }
            })
        }
    }
})

export default todoSlice