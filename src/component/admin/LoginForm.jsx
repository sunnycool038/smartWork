import React from 'react'
import { BoldLink, BoxContainer, FormContainer, Input, MutedLink, SubmitButton } from './common'
import { Marginer } from '../Spacer/Spacer'
import { switchToSignup,signUp } from '../../redux/backendSlice'
import { useDispatch } from 'react-redux'
import { useState } from 'react'
import axios from 'axios'

const expandingTransition = {
    type: 'spring',
    duration: 2.3,
    stiffness: 30
}

export function LoginForm(props) {
    const [formData, setFormData] = useState({
        email: "",
        password: ""
    });
    const dispatch = useDispatch()
    const mySignup = (postData) => {
        const url = 'http://127.0.0.1:8000/api';
        const config = {
            headers: {
                'content-type': 'application/json'
            }
        }
        const body = JSON.stringify(postData)
        axios.post(`${url}/signup`, body, config).then((response) => {
            dispatch(signUp(response.data))
            console.log(response.data)
        }).catch((err) => {
            console.log('bad request')
        });
    }
    return <BoxContainer>
        <FormContainer onSubmit={(e) => { e.preventDefault(); mySignup(formData); setFormData({ email: '', password: ''}); }}>
            <Input value={formData.email} type='email' placeholder='email' onChange={(e)=>setFormData({...formData, email: e.target.value})} />
            <Input value={formData.password} type='password' placeholder='password' onChange={(e)=>setFormData({...formData, password: e.target.value})}/>
            <Marginer mt={3} />
            <SubmitButton >Sign in</SubmitButton>
        </FormContainer>
        <Marginer mt={5} />
        <MutedLink href=''>Forgot your password</MutedLink>
        <Marginer mt={5} />
        <Marginer mt={3} />
        <MutedLink href=''>Dont have an account <BoldLink href='#' onClick={() => dispatch(switchToSignup())}>Sign Up</BoldLink></MutedLink>
    </BoxContainer>
}