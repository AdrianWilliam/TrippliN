import { createSlice } from "@reduxjs/toolkit";

export const click = createSlice({
    name: 'click',
    initialState: {
        value: false,
    },
    reducers: {
        open: (state) => {
            state.value = true
        },
        close: (state) => {
            state.value = false
        },
    },
})

export const { open, close } = click.actions

export default click.reducer