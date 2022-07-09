import React from "react";
import ProjectCard from "../ProjectCard";
import "./Blogs.css";
import { blogsData } from "./data";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import { LazyLoadComponent } from "react-lazy-load-image-component";

const Blogs = () => {
  const slideLeft = () => {
    var slider = document.getElementById("blogs__slider");
    slider.scrollLeft = slider.scrollLeft - 640;
  };

  const slideRight = () => {
    var slider = document.getElementById("blogs__slider");
    slider.scrollLeft = slider.scrollLeft + 640;
  };

  return (
    <LazyLoadComponent threshold={300} className="blogs">
      <h2>Blogs</h2>
      <div className="blogs__content__cards">
        <MdChevronLeft size={56} onClick={slideLeft} className="slider__icon" />
        <div className="cards__slider" id="blogs__slider">
          {blogsData.map((blog) => (
            <ProjectCard
              key={blog.title}
              image={blog?.url}
              title={blog.title}
              blogLink={blog.blog}
            />
          ))}
        </div>
        <MdChevronRight
          size={56}
          onClick={slideRight}
          className="slider__icon"
        />
      </div>
    </LazyLoadComponent>
  );
};

export default Blogs;
