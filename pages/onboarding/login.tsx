import styled from "styled-components";
import LoginForm from "../../components/login/login-form";
import { useRouter } from "next/router";
import Link from "next/link";

function handleSignUp() {}

export default function Login() {
	const router = useRouter();
	return (
		<Wrapper>
			<main>
				<LoginForm />
				<Link
					href={"/onboarding/password"}
					style={{ textDecoration: "none" }}
					as={"/reset-password"}
				>
					<ForgotPass>Forgot Password?</ForgotPass>
				</Link>
				<Link
					href={"/onboarding/signup"}
					style={{ textDecoration: "none" }}
					as='/signup'
					shallow
				>
					<SignUp onClick={handleSignUp}>SIGN UP</SignUp>
				</Link>
			</main>
		</Wrapper>
	);
}

const Wrapper = styled.div`
	width: 100%;
	height: 100%;
	justify-content: center;
	align-items: center;
	position: fixed;
	display: flex;
`;

const SignUp = styled.button`
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;
	padding: 12px 24px;
	gap: 10px;
	background: #ff9c40;
	box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
	border-color: #ff9c40;
	border-radius: 8px;
	font-weight: 800;
	color: #ffffff;
	font-size: 16px;
	margin: 0 auto;
	margin-top: 20px;
	line-height: 19px;
	text-transform: uppercase;
`;

const ForgotPass = styled.p`
	color: black;
	font-style: normal;
	font-weight: 500;
	font-size: 16px;
	line-height: 19px;
	text-align: center;
`;
