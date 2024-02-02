import About from "../components/about";
import Caption from "../components/caption";
import Contact from "../components/contact";
import Metrics from "../components/metrics";
import Navbar from "../components/navbar";
import { useRef } from "react";

export default function Home() {
  const scrollToRef = useRef(null);

  const handleScroll = () => {
    scrollToRef.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <Navbar />
      <About handleScroll={handleScroll} />
      <Metrics />
      <Contact scrollToRef={scrollToRef} />
    </>
  );
}
