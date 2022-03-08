import React from 'react'
import { BoldLink, BoxContainer, FormContainer, Input, MutedLink, SubmitButton } from './common'
import { Marginer } from '../Spacer/Spacer'
import { switchToSignin } from '../../redux/backendSlice'
import { useDispatch } from 'react-redux'


export function SignupForm(props) {
    const dispatch = useDispatch()
    return <BoxContainer>
        <FormContainer>
            <Input type='text' placeholder='FullName' />
            <Input type='email' placeholder='email' />
            <Input type='password' placeholder='password' />
            <Input type='password' placeholder='Confirm Password' />
        </FormContainer>
        <Marginer mt={5} />
        <MutedLink href=''>Forgot your password</MutedLink>
        <Marginer mt={3} />
        <SubmitButton>Signup</SubmitButton>
        <Marginer mt={3} />
        <MutedLink href=''>Already has an account? <BoldLink href='#' onClick = {()=>dispatch(switchToSignin())}>Sign in</BoldLink></MutedLink>
    </BoxContainer>
}