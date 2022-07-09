import React from "react";
import { Suspense } from "react";
import "./App.css";
import Banner from "./components/Banner";
// import Contact from "./components/Contact";
// import Experience from "./components/Experience";
// import Header from "./components/Header";
// import Projects from "./components/Projects";
// import TextualContent from "./components/TextualContent";
// import Blogs from "./components/Blogs";
const Header = React.lazy(() => import("./components/Header"));
const TextualContent = React.lazy(() => import("./components/TextualContent"));
const Experience = React.lazy(() => import("./components/Experience"));
const Blogs = React.lazy(() => import("./components/Blogs"));
const Projects = React.lazy(() => import("./components/Projects"));
const Contact = React.lazy(() => import("./components/Contact"));

function App() {
  return (
    <>
      <div className="app">
        <Suspense fallback={<div>Loading...</div>}>
          <Header />
        </Suspense>
        <Banner />
        <Suspense fallback={<div>Loading...</div>}>
          <TextualContent />
        </Suspense>
        <Suspense fallback={<div>Loading...</div>}>
          <Experience />
        </Suspense>
        <Suspense fallback={<div>Loading...</div>}>
          <Blogs />
        </Suspense>
        <Suspense fallback={<div>Loading...</div>}>
          <Projects />
        </Suspense>

        <Suspense fallback={<div>Loading...</div>}>
          <Contact />
        </Suspense>
      </div>
    </>
  );
}

export default App;
