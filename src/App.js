import "./App.css";
import Banner from "./components/Banner";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
import Header from "./components/Header";
// import Intro from "./components/Intro";
import Projects from "./components/Projects";
import TextualContent from "./components/TextualContent";
// import BlogsCarousel from "./components/BlogsCarousel";
import Blogs from "./components/Blogs";

function App() {
  return (
    <>
      {/* <div className="background"></div> */}

      <div className="app">
        {/* <ScrollContainer> */}
        <Header />
        {/* <ScrollPage page={0}> */}
        <Banner />
        {/* </ScrollPage> */}
        <TextualContent />
        {/* <ScrollPage page={2}>
            <Intro />
          </ScrollPage> */}
        <Experience />
        {/* <BlogsCarousel /> */}
        <Blogs />
        <Projects />
        <Contact />
        {/* </ScrollContainer> */}
      </div>
      {/* <ProjectsCarousel /> */}
      {/* <div className="mobile">
        <h1>Please open the app in Desktop Mode</h1>
      </div> */}
    </>
  );
}

export default App;
