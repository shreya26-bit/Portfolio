import Image from "next/image";
import Navbar from "./Components/Navbar";
import HeroSection from "./Components/HeroSection";
// import AboutSection from "./Components/Aboutsection/Aboutsection";
import Project from "./Components/Project";
import ContactUs from "./Components/contactUs";
import Education from "./Components/Education";
import About from "./Components/About";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#121212]">
      <Navbar />
      <div className="container  mt-20 ">
        <HeroSection />
        <About/>
        <Project />
        <Education />
        {/* <ContactUs/> */}
      </div>
    </main>
  );
}
