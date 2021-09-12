import "./App.css";
import Contact from "./components/Contact";
import Header from "./components/Header";
import Intro from "./components/Intro";

function App() {
  return (
    <div className="app">
      <Header />
      <Intro />
      {/* <Projects />
      <WorkEx />
      <Contact /> */}
      <Contact />
    </div>
  );
}

export default App;
