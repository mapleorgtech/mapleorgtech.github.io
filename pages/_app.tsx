import type { AppProps } from "next/app";
import "../styles/global.css";
import { Sen } from "@next/font/google";
import Navbar from "../components/global/header";
import dynamic from "next/dynamic";

const BgImage = dynamic(() => import("../components/global/main-bg"), {
	ssr: true
});

const sen = Sen({ weight: "400", subsets: ["latin"] });

export default function MyApp({ Component, pageProps }: AppProps) {
	return (
		<main className={sen.className}>
			<Navbar />
			<Component {...pageProps} />;
			<BgImage />
		</main>
	);
}
