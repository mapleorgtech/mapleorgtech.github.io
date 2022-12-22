import type { NextPage } from 'next';
import Head from 'next/head';
import styled from 'styled-components'; 
import Loginform from '../components/login/login-form';
import dynamic from 'next/dynamic';
import Navbar from '../components/global/header'

const BgImage = dynamic(() => import('../components/global/main-bg'), {
    ssr: true
})

const Home: NextPage = () => {
  return (
    <>
        <Navbar/>
        <Wrapper>
            <Head>
                <title>Login Page</title>
                <meta name='viewport' content='width=device-width, initial-scale=1' />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main className='vh-100 d-flex justify-content-center align-items-center'>
                <Loginform/>
            </main>
        </Wrapper>
        <BgImage/>
    </>
  )
}

const Wrapper = styled.div`
    z-index: 1; 
    width: 100%; 
    height: 100%; 
    justify-content: center; 
    align-items: center; 
    position: fixed; 
    display: flex; 
`;

export default Home