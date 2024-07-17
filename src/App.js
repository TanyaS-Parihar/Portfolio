import About from "./About";
import "./App.css";
import Footer from "./Footer";
import LandingPage from "./LandingPage";
import LocomotiveScroll from "locomotive-scroll";
import Navbar from "./Navbar";
import Projects from "./Projects";
import Copyright from "./Copyright";

function App() {
  const locomotiveScroll = new LocomotiveScroll();
  return (
    <div className="w-full h-screen text-white">
      <Navbar />
      <LandingPage />

      <About />
      <Projects />
      <Footer />
      <Copyright />
    </div>
  );
}

export default App;
