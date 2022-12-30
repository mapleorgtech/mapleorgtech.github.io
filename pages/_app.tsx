import type { AppProps } from "next/app";
import "../styles/global.css";
import { Sen } from "@next/font/google";

const sen = Sen({ weight: "400", subsets: ["latin"] });

export default function MyApp({ Component, pageProps }: AppProps) {
	return(
        <main className={sen.className}>
            <Component {...pageProps} />;
        </main>
    ) 
}
