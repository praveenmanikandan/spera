import "../styles/globals.css";
import localFont from "next/font/local";
import { ParallaxProvider } from "react-scroll-parallax";

const anton = localFont({
  src: [
    {
      path: "../../public/fonts/Anton-Regular.ttf",
      weight: "500",
      style: "normal",
    },
  ],
  variable: "--font-anton",
});

const poppins = localFont({
  src: [
    {
      path: "../../public/fonts/Poppins-Regular.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../public/fonts/Poppins-ExtraBold.ttf",
      weight: "700",
      style: "normal",
    }
  ],
  variable: "--font-poppins",
});

export default function App({ Component, pageProps }) {
  return (
    <main className={`${anton.variable} ${poppins.variable}`}>
      <ParallaxProvider>
        <Component {...pageProps} />
      </ParallaxProvider>
    </main>
  );
}
