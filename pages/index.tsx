import type { NextPage } from 'next';
import Head from 'next/head';
import styled from 'styled-components'; 
import Login from '../pages/Onboarding/login';
import dynamic from 'next/dynamic';
import Navbar from '../components/global/header'
import Link  from "next/link";

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
            <main>
                <Login/>
            </main>
        </Wrapper>
        <BgImage/>
    </>
  )
}

const Wrapper = styled.div`
    width: 100%; 
    height: 100%; 
    justify-content: center; 
    align-items: center; 
    position: fixed; 
    display: flex; 
`;

export default Home