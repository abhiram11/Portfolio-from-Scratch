import React, { useEffect } from "react";
import "./Projects.css";
import Video from "../../media/Projects3-4(no audio 2).m4v";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import { BsArrowRight } from "react-icons/bs";

import "./Projects.css";
import ProjectCard from "../ProjectCard";
import { projectData } from "./projectsData";
import { useState } from "react";
import { LazyLoadComponent } from "react-lazy-load-image-component";

function Projects() {
  const [hover, setHover] = useState(false);
  const handleMouseIn = () => {
    setHover(true);
  };

  const handleMouseOut = () => {
    setHover(false);
  };

  const { ref, inView } = useInView({
    threshold: 0.2,
  });
  const animation = useAnimation();

  useEffect(() => {
    // console.log(inView);
    if (inView) {
      animation.start({
        y: 0,
        opacity: 1,
        transition: {
          type: "spring",
          duration: 1,
          bounce: 0.3,
        },
      });
    } else {
      animation.start({
        y: 50,
        opacity: 0,
        transition: {
          type: "spring",
          duration: 1,
          bounce: 0.3,
        },
      });
    }
  }, [inView, animation]);

  const slideLeft = () => {
    var slider = document.getElementById("project__slider");
    slider.scrollLeft = slider.scrollLeft - 640;
  };

  const slideRight = () => {
    var slider = document.getElementById("project__slider");
    slider.scrollLeft = slider.scrollLeft + 640;
  };

  return (
    <LazyLoadComponent threshold={300}>
      <motion.div
        className="project__content"
        id="projects"
        ref={ref}
        animate={animation}
      >
        <div className="project__content__top">
          <h2>Projects</h2>
          <p>
            From fully-fledged Apps to Demos, I have developed a wide range of
            projects. Have a look!
          </p>
        </div>
        <div className="project__content__cards">
          <MdChevronLeft
            size={56}
            onClick={slideLeft}
            className="slider__icon"
          />
          <div className="cards__slider" id="project__slider">
            {projectData.map((project) => (
              <ProjectCard
                key={project.title}
                title={project.title}
                image={project.image}
                subtitle={project.subtitle}
                demo={project?.demo ? project?.demo : null}
                github={project?.github ? project?.github : null}
                youtube={project?.youtube ? project?.youtube : null}
                thumbnail={project?.thumbnail ? project?.thumbnail : null}
                project
              />
            ))}
          </div>
          <MdChevronRight
            size={56}
            onClick={slideRight}
            className="slider__icon"
          />
        </div>
      </motion.div>
      <div className="projects">
        <div className="projects__background">
          <video
            className="projects__backgroundVideo"
            autoPlay
            loop
            muted
            src={Video}
            type="video/mp4"
          />
        </div>
        <h3>
          You can also check out my{" "}
          <span className="projects__span">Projects</span> on my GitHub Profile!
        </h3>
        <div
          className="projects__button"
          onMouseOver={handleMouseIn}
          onMouseOut={handleMouseOut}
        >
          <a
            className="projects__link"
            href="https://github.com/abhiram11/Deployments-and-Certifications"
            target="_blank"
            rel="noreferrer"
          >
            <p>Let's Go</p>
            {hover ? (
              <BsArrowRight className="projects__linkIcon" />
            ) : (
              <MdChevronRight className="projects__linkIcon" />
            )}
          </a>
        </div>
      </div>
    </LazyLoadComponent>
  );
}

export default Projects;
