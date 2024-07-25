import { createSlice } from "@reduxjs/toolkit";
import { STATUS_ALL } from "../../constants/StatusFilter";

const filterSlice = createSlice({
    name: "filter",
    initialState: {
        search: '',
        status: STATUS_ALL,
        priority: []
    },
    reducers: {
        editFilter: (state, action) => {
            state = action.payload
            return state
        }
    }
})

export default filterSlice