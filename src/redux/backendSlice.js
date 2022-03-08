import { createSlice } from '@reduxjs/toolkit'


const initialState = {
    value: {},
    active: 'signin',
    signUp:{},
}


const backendSlice = createSlice({
    name: 'backend',
    initialState,
    reducers: {
        sendData: (state, { payload }) => {
            state.value = payload
        },
        switchToSignup: (state, { payload }) => {
            state.active = 'signup'
        },
        switchToSignin: (state, { payload }) => {
            state.active = 'signin'
        },
        signUp:(state, {payload}) =>{
            state.signUp = payload
        }
    }
})

export const { switchToSignup, switchToSignin, signUp } = backendSlice.actions
export default backendSlice.reducer;