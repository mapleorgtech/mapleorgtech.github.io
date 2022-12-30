import Link from "next/link";
import styled from "styled-components";
import SignupForm from "../../components/login/signup-form";
import Image from "next/image";
import back from '../../public/assets/images/back_arrow.svg'

export default function Signup() {
	return (
		<Wrapper>
			<main>
				<Link href={"/"} style= {{ textDecoration: 'none' }}>   
                    <BackLogin>
                        <Image src={back} alt='back to login'/>
                        <LogInText>login</LogInText>
                    </BackLogin>
				</Link>
				<SignupForm />
			</main>
		</Wrapper>
	);
}

const BackLogin = styled.div`
    display: flex;
    align-items: center;
`

const LogInText = styled.p`
    display: inline;
    margin-left: 5px;
    font-weight: 800;
    text-align: center;
    text-transform: uppercase;
    color: black;
`;

// TODO: figure out how to reduce this boilerplate
const Wrapper = styled.div`
	width: 100%;
	height: 100%;
	justify-content: center;
	align-items: center;
	position: fixed;
	display: flex;
`;
