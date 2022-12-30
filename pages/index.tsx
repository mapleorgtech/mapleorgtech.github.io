import type { NextPage } from "next";
import Head from "next/head";
import styled from "styled-components";
import Login from "./onboarding/login";
import Link from "next/link";

const Home: NextPage = () => {
	return (
		<>
				<Head>
					<title>Login Page</title>
					<meta name='viewport' content='width=device-width, initial-scale=1' />
					<link rel='icon' href='/favicon.ico' />
				</Head>
				<main>
					<Login />
				</main>
		</>
	);
};

export default Home;
