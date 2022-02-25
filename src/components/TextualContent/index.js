import React, { Suspense } from "react";
import LazyPhoto from "../../media/LazyName.JPG";
import Photo from "../../media/myname2.gif";
import "./TextualContent.css";

function TextualContent() {
  return (
    <div className="textual__content" id="about">
      <div className="textual__content__top">
        <div>
          <h2>Who Am I?</h2>
          <br />
          <p>
            I am Abhiram, an experienced Data Scientist in Real Estate and
            Healthcare Industries, and now also a budding Full-Stack Developer!
          </p>
          <br />
          <p>
            I have worked as a Data Scientist at two startups each comprising of
            elite individuals, hBits (team of around 12, with grads from
            Harvard, Stanford, Duke, IIT Madras and Bombay, IIM Ahmedabad and
            Indore, NIT Nagpur, and other entrepreneurs), and mBreath
            Technologies (team of 4 with myself being the first full-time hire,
            two IIT Kharagpur PhD Scholars and an IIT Kharagpur Professor, along
            with interns from IIT Kharagpur, NIT Raipur, and VIT).
          </p>

          {/* <p>
        With my experience in data science, fast and dynamic start-up culture,
        team management and mentorship, assistance in business development,
        customer profiling, communication and networking, I believe I have the
        knowledge, drive, and technical skills needed to be the perfect addition
        to any technical team.
      </p> */}
        </div>
        <div>
          {/* Right */}
          <Suspense
            fallback={
              <img
                src={LazyPhoto}
                alt="Gif Lazy"
                style={{
                  "object-fit": "contain",
                  width: "320px",
                }}
              />
            }
          >
            <img
              src={Photo}
              alt="Graphic Signature"
              style={{
                "object-fit": "contain",
                width: "320px",
              }}
            />
          </Suspense>
        </div>
      </div>
      <p>
        <br />
        As part of my work, I have also been to IIT Kharagpur and IIM Calcutta,
        not as a student, but as an entrepreneur. I have worked directly with
        PhD Scholars and Professors of IIT Kharagpur right after my Bachelors!
      </p>
      <br />
      <p>
        I have learned Full Stack through a practical project-based approach
        where I have updated my consistent progress on platforms such as Github,
        Youtube, and Twitter.
      </p>
    </div>
  );
}

export default TextualContent;
