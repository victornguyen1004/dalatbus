import "@/styles/globals.css";
import { Montserrat } from "next/font/google";
const montserrat = Montserrat({ subsets: ["latin"] });

export default function App({ Component, pageProps }) {
  return (
    <div className={`${montserrat.className} text-text-primary`}>
      <Component {...pageProps} />
    </div>
  );
}
