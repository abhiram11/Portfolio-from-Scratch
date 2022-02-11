import React from "react";
import "./Contact.css";

function Contact() {
  return (
    <div className="contact__wrapper" id="contact">
      <div className="contact__header">
        <h4>Connect with me at : abhiramsatpute@gmail.com </h4>
      </div>
      <div className="contact">
        <div className="contact__left">
          {/* Github, Youtube, LinkedIn, Twitter, Hackerrank */}
          <a
            href="https://twitter.com/abhiram_satpute"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src="https://img.shields.io/badge/twitter-%231DA1F2.svg?&style=for-the-badge&logo=twitter&logoColor=white"
              alt="Twitter"
            />
          </a>
          &nbsp;&nbsp;
          <a
            href="https://www.linkedin.com/in/abhiram-satpute/"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src="https://img.shields.io/badge/linkedin-%230077B5.svg?&style=for-the-badge&logo=linkedin&logoColor=white"
              alt="LinkedIn"
            />
          </a>
          &nbsp;&nbsp;
          <a
            href="https://stackoverflow.com/users/8185479/abhiram-satput%c3%a9"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src="https://stackoverflow.com/users/flair/8185479.png?theme=dark"
              width="208"
              height="58"
              alt="profile for Abhiram Satput&#233; at Stack Overflow, Q&amp;A for professional and enthusiast programmers"
              title="More than 64K+ Profiles Reached as well!"
            />
          </a>
          &nbsp;&nbsp;
          <a
            href="https://www.youtube.com/channel/UCfk8qjnhHsVTuygD9fwlx7g"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src="https://img.shields.io/badge/youtube-%23FF0000.svg?&style=for-the-badge&logo=youtube&logoColor=white"
              alt="Youtube"
            />
          </a>
          &nbsp;&nbsp;
          <a
            href="https://github.com/abhiram11"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src="https://img.shields.io/badge/Github-grey.svg?&style=for-the-badge&logo=github&logoColor=white"
              alt="GitHub"
            />
          </a>
          &nbsp;&nbsp;
        </div>
        {/* <div className="contact__right">Or write to me at: email</div> */}
      </div>
    </div>
  );
}

export default Contact;
