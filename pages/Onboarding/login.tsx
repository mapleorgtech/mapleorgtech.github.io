import styled from 'styled-components'
import LoginForm from '../../components/login/login-form'
import Link from 'next/link'

function handleSignUp() {

}

export default function Login() {
    return(
        <>
            <LoginForm/>
            <Link href={'/'} style={{ textDecoration: 'none' }}><ForgotPass>Forgot Password?</ForgotPass></Link>
            <SignUp onClick={handleSignUp}>SIGN UP</SignUp>
        </>
    )
}

const SignUp = styled.button`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 12px 24px;
    gap: 10px;
    background: #FF9C40;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-color: #FF9C40;
    border-radius: 8px;
    font-weight: 800;
    color: #FFFFFF;
    font-size: 16px;
    margin: 0 auto;
    margin-top: 20px;
    line-height: 19px;
    text-transform: uppercase;
`

const ForgotPass = styled.p`
    color: black;
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 19px;
    text-align: center;
`