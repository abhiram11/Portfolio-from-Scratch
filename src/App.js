import "./App.css";
import Banner from "./components/Banner";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
import Header from "./components/Header";
import Projects from "./components/Projects";
import TextualContent from "./components/TextualContent";
import Blogs from "./components/Blogs";

function App() {
  return (
    <>
      <div className="app">
        <Header />
        <Banner />
        <TextualContent />
        <Experience />
        <Blogs />
        <Projects />
        <Contact />
      </div>
    </>
  );
}

export default App;
