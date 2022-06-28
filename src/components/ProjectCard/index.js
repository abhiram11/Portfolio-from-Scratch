import React from "react";
import "./ProjectCard.css";
import { FaGithub, FaYoutube } from "react-icons/fa";
import { TbScreenShare } from "react-icons/tb";
import { MdOutlineOutbox } from "react-icons/md";

const ProjectCard = ({
  title,
  subtitle,
  image,
  project,
  demo,
  github,
  youtube,
  blog,
  blogLink,
  thumbnail,
}) => {
  return (
    <div className="card">
      <div className="card__imgcontainer">
        <img
          src={project ? thumbnail : image}
          alt="dummy"
          className="card__image"
        />
      </div>
      <div className="card__text">
        <h3>{title}</h3>
        <p>
          {subtitle?.length > 48 ? `${subtitle.substring(0, 48)}...` : subtitle}
        </p>
        {/* {project && ( */}
        <div className="card__links">
          {demo && (
            <a href={demo} target="_blank" rel="noopener noreferrer">
              <div className="card__demo">
                <p>Demo</p>
                <TbScreenShare className="card__icon" />
              </div>
            </a>
          )}
          {github && (
            <a href={github} target="_blank" rel="noopener noreferrer">
              <div className="card__demo">
                <p>Code</p>
                <FaGithub className="card__icon" />
              </div>
            </a>
          )}
          {youtube && (
            <a href={youtube} target="_blank" rel="noopener noreferrer">
              <div className="card__demo">
                <p>Youtube</p>
                <FaYoutube className="card__icon" color="red" />
              </div>
            </a>
          )}
          {!project && (
            <a href={blogLink} target="_blank" rel="noopener noreferrer">
              <div className="card__demo">
                <p>View Blog</p>
                <MdOutlineOutbox className="card__icon" />
              </div>
            </a>
          )}
        </div>
        {/* )} */}
      </div>
    </div>
  );
};

export default ProjectCard;
