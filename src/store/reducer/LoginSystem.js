import { createSlice } from "@reduxjs/toolkit";

export const loginSystem = createSlice({
    name: 'login',
    initialState: {
        isLogged: localStorage.getItem('logged'),
    },
    reducers: {
        verifyLogin: (state) => {
            state.isLogged = localStorage.getItem('logged')
        }
    }
})

export const { verifyLogin } = loginSystem.actions

export default loginSystem.reducer