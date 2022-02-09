import "./App.css";
import Contact from "./components/Contact";
import Header from "./components/Header";
import Intro from "./components/Intro";
import Projects from "./components/Projects";
import TextualContent from "./components/TextualContent";

function App() {
  return (
    <div className="app">
      <Header />
      <Intro />
      <TextualContent />
      {/* <Projects /> */}
      {/* <Projects />
      <WorkEx />
      <Contact /> */}
      <Contact />
    </div>
  );
}

export default App;
