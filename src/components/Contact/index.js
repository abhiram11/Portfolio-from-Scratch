import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "./Contact.css";

function Contact() {
  return (
    <div className="contact__wrapper" id="contact">
      <div className="contact__header">
        <h4>Connect with me at : abhiramsatpute@gmail.com </h4>
      </div>
      <div className="contact">
        {/* Github, Youtube, LinkedIn, Twitter, Hackerrank */}
        <a
          href="https://twitter.com/abhiram_satpute"
          target="_blank"
          rel="noreferrer"
        >
          {/* <img
              src="https://img.shields.io/badge/twitter-%231DA1F2.svg?&style=for-the-badge&logo=twitter&logoColor=white"
              alt="Twitter"
            /> */}
          <LazyLoadImage
            src="https://img.shields.io/badge/twitter-%231DA1F2.svg?&style=for-the-badge&logo=twitter&logoColor=white"
            alt="Twitter"
            effect="blur"
            className="contact__image"
          />
        </a>
        &nbsp;&nbsp;
        <a
          href="https://www.linkedin.com/in/abhiram-satpute/"
          target="_blank"
          rel="noreferrer"
        >
          {/* <img
              src="https://img.shields.io/badge/linkedin-%230077B5.svg?&style=for-the-badge&logo=linkedin&logoColor=white"
              alt="LinkedIn"
            /> */}
          <LazyLoadImage
            src="https://img.shields.io/badge/linkedin-%230077B5.svg?&style=for-the-badge&logo=linkedin&logoColor=white"
            alt="LinkedIn"
            effect="blur"
            className="contact__image"
          />
        </a>
        &nbsp;&nbsp;
        <a
          href="https://stackoverflow.com/users/8185479/abhiram-satput%c3%a9"
          target="_blank"
          rel="noreferrer"
        >
          {/* <img
              src="https://stackoverflow.com/users/flair/8185479.png?theme=dark"
              width="208"
              height="58"
              alt="profile for Abhiram Satput&#233; at Stack Overflow, Q&amp;A for professional and enthusiast programmers"
              title="More than 80K+ Profiles Reached as well!"
            /> */}

          <LazyLoadImage
            src="https://stackoverflow.com/users/flair/8185479.png?theme=dark"
            alt="More than 84K+ Profiles Reached as well!"
            effect="blur"
            className="contact__image__stackoverflow"
          />
        </a>
        &nbsp;&nbsp;
        <a
          href="https://www.youtube.com/watch?v=PdPoZLLXtUY&list=PLID9TgPnYWiKwYgwLbX-jH0Zuabar_3ZD&index=9"
          target="_blank"
          rel="noreferrer"
        >
          {/* <img
              src="https://img.shields.io/badge/youtube-%23FF0000.svg?&style=for-the-badge&logo=youtube&logoColor=white"
              alt="Youtube"
            /> */}
          <LazyLoadImage
            src="https://img.shields.io/badge/youtube-%23FF0000.svg?&style=for-the-badge&logo=youtube&logoColor=white"
            alt="Youtube"
            effect="blur"
            className="contact__image"
            // style={{height: }}
          />
        </a>
        &nbsp;&nbsp;
        <a href="https://github.com/abhiram11" target="_blank" rel="noreferrer">
          {/* <img
              src="https://img.shields.io/badge/Github-grey.svg?&style=for-the-badge&logo=github&logoColor=white"
              alt="GitHub"
            /> */}
          <LazyLoadImage
            src="https://img.shields.io/badge/Github-grey.svg?&style=for-the-badge&logo=github&logoColor=white"
            alt="GitHub"
            effect="blur"
            className="contact__image"
          />
        </a>
        &nbsp;&nbsp;
      </div>
    </div>
  );
}

export default Contact;
