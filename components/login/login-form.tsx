import { Formik, Field, Form, FormikHelpers } from "formik";
import { isEmpty } from "../../lib/utils";
import styled from "styled-components";

interface Values {
	username: string;
	password: string;
}

export default function LoginForm() {
	return (
		<LoginBox>
			<Formik
				initialValues={{
					username: "",
					password: ""
				}}
				onSubmit={(
					values: Values,
					{ setSubmitting }: FormikHelpers<Values>
				) => {
					console.log("test 5");
					/* TODO: add empty object check util function*/
				}}
			>
				<Form>
					<Input id='username' name='username' placeholder='Username' />
					<Input id='password' name='password' placeholder='Password' />
					<Submit type='submit'>LOG IN</Submit>
				</Form>
			</Formik>
		</LoginBox>
	);
}

const LoginBox = styled.div`
	flex-direction: column;
	justify-content: center;
	align-items: center;
	background: rgba(255, 156, 64, 0.75);
	border-radius: 15px;
	padding: 40px;
	padding-bottom: 0px;
`;

const Input = styled(Field)`
	display: block;
	min-height: fit-content;
	font-family: "Roboto";
	font-style: normal;
	padding: 2px 10px;
	margin-bottom: 20px;
	font-size: 24px;
	line-height: 28px;
	border: 1px;
	box-shadow: inset 2px 2px 4px 1px rgba(0, 0, 0, 0.3);
	&:focus {
		border: none;
		box-shadow: none;
	}
`;

const Submit = styled.button`
	display: block;
	width: 70%;
	padding: 10px;
	justify-content: center;
    border-color: #62696d;
	transform: translateY(20%);
	align-items: center;
	font-weight: 800;
	font-size: 16px;
	margin: 0 auto;
	background: #62696d;
	box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
	border-radius: 11px;
	color: white;
`;
