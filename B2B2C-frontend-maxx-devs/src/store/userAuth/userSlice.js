import { createSlice } from "@reduxjs/toolkit"
import { userLogin, userRegister } from "./userActions" 


//initialize userToken from local Storage
const userToken = localStorage.getItem('userToken') ?
localStorage.getItem('userToken') : null

const initialState = {
    loading:false,
    userInfo: null,
    userToken,
    error: null,
    success: false,
}

const userSlice = createSlice ({
    name: 'user',
    initialState,
    reducers: {
        logout: (state) => {
            localStorage.removeItem('userToken')
            state.loading = false
            state.userInfo = null
            state.userToken = null
            state.error = null
        },
    },
    extraReducers: {
        //login 
        [userLogin.pending]: (state) => {
            state.loading = true
            state.error = null
        },
        [userLogin.fulfilled]: (state, {payload}) => {
            state.loading = false
            state.userInfo = payload
            state.userToken = payload.userToken
        },
        [userLogin.rejected]: (state, {payload}) => {
            state.loading = false
            state.error = payload
        },

        //register
        [userRegister.pending]: (state) => {
            state.loading = true
            state.error = null
        },
        [userRegister.fulfilled]: (state, {payload}) => {
            state.loading = false
            state.success = true
        },
        [userRegister.rejected]: (state, { payload }) => {
            state.loading = false
            state.error = payload
        }
    }
})

export const { logout } = userSlice.actions

export default userSlice.reducer