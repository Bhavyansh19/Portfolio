import About from "./components/About";
import Home from "./components/Home.jsx";
import NavBar from "./components/Navbar";
import Project from "./components/Project.jsx";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Preloader from "./components/PreLoader.jsx";

function App() {
  return (
      <main className="relative min-h-screen w-screen overflow-x-hidden">
            <Preloader />
            <NavBar />
            <Home />
            <About />
            <Project />
            <Contact />
            <Footer />
      </main>
  );
}

export default App;