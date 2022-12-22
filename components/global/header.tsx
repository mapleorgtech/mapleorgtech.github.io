import Link from 'next/link';
import Image from "next/image";
import styled from 'styled-components'; 
import logo from '../../public/assets/images/logo.png'

const NavBar = () => {
    return(
        <>
            <Header>
                <Link href={"/"} legacyBehavior>
                    <a>
                        <Container>                        
                            <Logo
                                width={1000}
                                height={1000}
                                src={logo}
                                alt='Logo'
                            />
                        </Container>
                    </a>
                </Link>
                <Title>Dashboard</Title>
            </Header>
        </>
    )
}

const Logo = styled(Image)`
    width: auto; 
    height: auto;
    left: 0px; 
    top: 0px;
    float: left; 
    position: absolute; 
    z-index: 1; 
`

const Container = styled.div`
    left: 0; 
    position: relative; 
    width: auto; 
    height: 10vh; 
`

const Title = styled.p`
    font-family: 'Sen';
    font-style: normal;
    align-self: center; 
    font-weight: 900;
    font-size: 32px;
    margin-right: 20px;
    line-height: 38px;
`

const Header = styled.div`
    display: flex; 
    flex-direction: row; 
    justify-content: space-between; 
    box-sizing: border-box;
    position: absolute;
    width: 99%;
    right: 0px; 
    height: 8vh;
    align-items: center;
    border-top-left-radius: 80px 80px;
    border-bottom-left-radius: 80px 80px;
    margin-top: 20px; 
    background: rgba(255, 255, 255, 0.9);
    border: 1px solid #333F3A;
    box-shadow: 2px 4px 4px rgba(0, 0, 0, 0.25);
`

export default NavBar; 