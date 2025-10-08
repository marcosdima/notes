import { createSlice } from '@reduxjs/toolkit';

const errorSlice = createSlice({
    name: 'error',
    initialState: [],
    reducers: {
        addError: (state, action) => {
            const { payload } = action;
            if (state.includes(payload)) return state;
            return state.concat([action.payload]);
        },
        popError: (state) => {
            const [_, ...rest] = state;
            return rest;
        },
    },
});

export const { addError, popError } = errorSlice.actions;
export default errorSlice.reducer;