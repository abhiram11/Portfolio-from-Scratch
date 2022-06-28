import React, { useEffect, useRef, useState } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import YouTubeIcon from "@mui/icons-material/YouTube";
import TwitterIcon from "@mui/icons-material/Twitter";
import "./Contact.css";
import { useForm } from "react-hook-form";
import emailjs from "@emailjs/browser"; //variables: from_name, email, phone, message
import toast, { Toaster } from "react-hot-toast";
import ReCAPTCHA from "react-google-recaptcha";
import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";

function Contact() {
  const form = useRef();
  const [captchaToken, setCaptchaToken] = useState(null);
  const [verified, setVerified] = useState(false);

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

  // useEffect(() => {
  //   setTimeout(function () {
  //     window.location.reload();
  //   }, 1000);
  // }, [ReCAPTCHA]);

  const {
    // register,
    handleSubmit,
    reset,
    // formState: { errors },
  } = useForm();

  useEffect(() => {
    captchaToken ? setVerified(true) : setVerified(false);
  }, [captchaToken]);

  const handleOnChange = (value) => {
    // console.log("Verified value:", value);
    setCaptchaToken(value);
    setVerified(true);
  };

  const sendEmail = () => {
    // e.preventDefault();
    // console.log("Done!");
    // toast.loading("Sending the email...📨");
    const emailJSFunction = emailjs
      .sendForm(
        process.env.REACT_APP_SERVICE_ID,
        process.env.REACT_APP_TEMPLATE_ID,
        form.current,
        process.env.REACT_APP_PUBLIC_KEY
      )
      .then(
        (result) => {
          // console.log("Success! ", result.text);
          // toast.success("Email sent successfully!📧😊");
        },
        (error) => {
          // console.log("Error!", error.text);
          // toast.error("Error sending the email!📧😢");
        }
      );
    toast.promise(emailJSFunction, {
      loading: "Sending the email...📨",
      success: "Email sent successfully!📧😊",
      error: "Error sending the email!📧😢",
    });
    setVerified(false);
    reset();
    // e.target.reset();
  };

  return (
    <div className="contact__wrapper" id="contact">
      <Toaster position="bottom-center" />
      <motion.div className="contact__header" ref={ref} animate={animation}>
        <h2>Contact Me</h2>
        <h4>
          It doesn't have to end here,
          <span style={{ color: "#41c867" }}> let's connect!</span>
        </h4>
      </motion.div>
      <form ref={form} id="contact-form" onSubmit={handleSubmit(sendEmail)}>
        <motion.div
          className="contact__form__body"
          ref={ref}
          animate={animation}
        >
          <div className="contact__left">
            <input
              type="text"
              name="from_name"
              placeholder="Your Name"
              className="contact__left__input"
              required
              maxLength={32}
              minLength={4}
              // {...register("from_name", {
              //   required: { value: true, message: "Please enter your name" },
              //   maxLength: {
              //     value: 30,
              //     message: "Please use 30 characters or less",
              //   },
              //   minLength: {
              //     value: 4,
              //     message: "Please use 4 characters or more",
              //   },
              // })}
            />
            {/* {errors.from_name && (
              <span className="errorMessage">{errors.from_name.message}</span>
            )} */}
            <input
              type="email"
              name="email"
              className="contact__left__input"
              placeholder="Your Email"
              required
            />
            {/* {errors.email && (
              <span className="errorMessage">
                Please enter a valid email address
              </span>
            )} */}
            <input
              type="text"
              name="phone"
              // {...register("phone", {
              //   required: false,
              //   pattern: /^[a-zA-Z0-9\-().\s]{10,15}$/,
              // })}
              className="contact__left__input"
              maxLength={15}
              minLength={10}
              placeholder="Contact No. (Optional)"
            />
            {/* {errors.phone && (
              <span className="errorMessage">{errors.phone.message}</span>
            )} */}
          </div>
          <div className="contact__right">
            <textarea
              rows={4}
              name="message"
              required
              className="contact__right__input"
              // {...register("message", {
              //   required: true,
              // })}
              placeholder="Message"
              style={{ resize: "none" }}
            />
            {/* {errors.message && (
              <span className="errorMessage">Please enter a message</span>
            )} */}
          </div>
        </motion.div>
        <div className="contact__captcha">
          <ReCAPTCHA
            sitekey={process.env.REACT_APP_RECAPTCHA_KEY}
            // sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI"
            onChange={handleOnChange}
          />
        </div>
        <button
          type="submit"
          className="contact__submit__button"
          disabled={!verified}
        >
          Let's Collaborate
        </button>
      </form>
      <div className="contact">
        <a href="https://github.com/abhiram11" target="_blank" rel="noreferrer">
          <GitHubIcon sx={{ fontSize: 36 }} />
        </a>
        <a
          href="https://www.linkedin.com/in/abhiram-satpute/"
          target="_blank"
          rel="noreferrer"
        >
          <LinkedInIcon sx={{ fontSize: 36 }} />
        </a>
        <a
          href="https://stackoverflow.com/users/8185479/abhiram-satput%c3%a9"
          target="_blank"
          rel="noreferrer"
        >
          <LazyLoadImage
            src="https://stackoverflow.com/users/flair/8185479.png?theme=dark"
            alt="Stack Overflow"
            effect="blur"
            className="contact__image__stackoverflow"
            title="More than 84K+ Profiles Reached as well!"
          />
        </a>
        <a
          href="https://www.youtube.com/watch?v=PdPoZLLXtUY&list=PLID9TgPnYWiKwYgwLbX-jH0Zuabar_3ZD&index=9"
          target="_blank"
          rel="noreferrer"
        >
          <YouTubeIcon sx={{ fontSize: 36 }} />
        </a>
        <a
          href="https://twitter.com/abhiram_satpute"
          target="_blank"
          rel="noreferrer"
        >
          <TwitterIcon sx={{ fontSize: 36 }} />
        </a>
      </div>
      {/* <div className="blogs">
        <h4>
          Blogs: abhiramsatpute.hashnode.dev{" "}
          <a
            href="https://abhiramsatpute.hashnode.dev/"
            target="_blank"
            rel="noreferrer"
          >
            <LaunchIcon sx={{ marginBottom: "-6px", color: "whitesmoke" }} />
          </a>
        </h4>
      </div> */}
    </div>
  );
}

export default Contact;
