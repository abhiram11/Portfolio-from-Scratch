import "./App.css";
import Banner from "./components/Banner";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
import Header from "./components/Header";
import Intro from "./components/Intro";
import Projects from "./components/Projects";
import TextualContent from "./components/TextualContent";

function App() {
  return (
    <>
      {/* <div className="background"></div> */}

      <div className="app">
        <Header />
        <Banner />
        <TextualContent />
        <Intro />
        <Experience />
        <Projects />
        <Contact />
      </div>
      <div className="mobile">
        <h1>Please open the app in Desktop Mode</h1>
      </div>
    </>
  );
}

export default App;
