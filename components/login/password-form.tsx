import Link from "next/link";
import styled from "styled-components";
import { Formik, Field, Form, FormikHelpers } from "formik";

interface Values {
	name: string;
	email: string;
	role: string;
}

export default function PasswordForm() {
	return (
		<PasswordBox>
			<Formik
				initialValues={{
					name: "",
					email: "",
					role: ""
				}}
				onSubmit={(
					values: Values,
					{ setSubmitting }: FormikHelpers<Values>
				) => {}}
			>
				<Form>
					<Input id='name' name='name' placeholder='Full Name' />
					<Input id='email' name='email' placeholder='Email' />
					<SelectRole>
						<option value='' label='Role' />
						<option value='Distributor' label='Distributor' />
						<option value='Sales & Marketing' label='Sales & Marketing' />
						<option value='Production' label='Production' />
					</SelectRole>
					<Link href={"/"} style={{ textDecoration: "none" }}>
						<Submit type='submit'>Request Password</Submit>
					</Link>
				</Form>
			</Formik>
		</PasswordBox>
	);
}

const SelectRole = styled.select`
	display: block;
	width: 100%;
	min-height: fit-content;
	font-family: "Roboto";
	font-style: normal;
	padding: 2px 10px;
	margin-bottom: 20px;
	font-size: 24px;
	line-height: 28px;
	border: 1px;
	box-shadow: inset 2px 2px 4px 1px rgba(0, 0, 0, 0.3);
`;

const PasswordBox = styled.div`
	flex-direction: column;
	justify-content: center;
	align-items: center;
	background: rgba(255, 156, 64, 0.75);
	border-radius: 15px;
	padding: 40px;
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
		border: 0px;
		box-shadow: none;
		border-color: white;
	}
`;

const Submit = styled.button`
	display: block;
	width: 70%;
	padding: 10px;
	justify-content: center;
	border-color: #62696d;
	align-items: center;
	font-weight: 800;
	font-size: 16px;
	margin: 0 auto;
	background: #62696d;
	box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
	border-radius: 11px;
	color: white;
`;
