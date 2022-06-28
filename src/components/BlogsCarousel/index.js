import React, { useState, useEffect, useCallback, useRef } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import qdic from "../../media/Titan4.avif";
import Lazyqdic from "../../media/LazyTitan4.jpg";
import iimcip from "../../media/IIMCIP.avif";
import Lazyiimcip from "../../media/LazyIIMCIP.jpg";
import titan from "../../media/Titan.avif";
import Lazytitan from "../../media/LazyTitan.jpg";
import "./BlogsCarousel.css";
import { LazyLoadImage } from "react-lazy-load-image-component";

// const media = [
//   {
//     title: "Flash Notes #1 React",
//     url: "https://abhiramsatpute.hashnode.dev/_next/image?url=https%3A%2F%2Fcdn.hashnode.com%2Fres%2Fhashnode%2Fimage%2Funsplash%2FUYsBCu9RP3Y%2Fupload%2Fv1645957854157%2F6vEp7zCPx.jpeg%3Fw%3D1600%26h%3D840%26fit%3Dcrop%26crop%3Dentropy%26auto%3Dcompress%2Cformat%26format%3Dwebp&w=1920&q=75",
//   },
//   {
//     title: "Getting Familiar with Docker",
//     url: "https://abhiramsatpute.hashnode.dev/_next/image?url=https%3A%2F%2Fcdn.hashnode.com%2Fres%2Fhashnode%2Fimage%2Funsplash%2FjOqJbvo1P9g%2Fupload%2Fv1647192180801%2FCmy61vgPC.jpeg%3Fw%3D1600%26h%3D840%26fit%3Dcrop%26crop%3Dentropy%26auto%3Dcompress%2Cformat%26format%3Dwebp&w=1920&q=75",
//   },
//   {
//     title: "React Native for 2022",
//     url: "https://abhiramsatpute.hashnode.dev/_next/image?url=https%3A%2F%2Fcdn.hashnode.com%2Fres%2Fhashnode%2Fimage%2Funsplash%2F89xuP-XmyrA%2Fupload%2Fv1647249264345%2FpUr0Z3xf3.jpeg%3Fw%3D1600%26h%3D840%26fit%3Dcrop%26crop%3Dentropy%26auto%3Dcompress%2Cformat%26format%3Dwebp&w=1920&q=75",
//   },
//   {
//     title: "React Query",
//     url: "https://abhiramsatpute.hashnode.dev/_next/image?url=https%3A%2F%2Fcdn.hashnode.com%2Fres%2Fhashnode%2Fimage%2Fupload%2Fv1652031450131%2FFsTZM4uYg.png%3Fw%3D1600%26h%3D840%26fit%3Dcrop%26crop%3Dentropy%26auto%3Dcompress%2Cformat%26format%3Dwebp&w=1920&q=75",
//   },
//   {
//     title: "Cloud Computing and AWS #1",
//     url: "https://abhiramsatpute.hashnode.dev/_next/image?url=https%3A%2F%2Fcdn.hashnode.com%2Fres%2Fhashnode%2Fimage%2Funsplash%2F-lfF1nJs_qY%2Fupload%2Fv1652289197088%2FH1Dvp5RWd9.jpeg%3Fw%3D1600%26h%3D840%26fit%3Dcrop%26crop%3Dentropy%26auto%3Dcompress%2Cformat%26format%3Dwebp&w=1920&q=75",
//   },
//   {
//     title: "Cloud Computing and AWS #2",
//     url: "https://abhiramsatpute.hashnode.dev/_next/image?url=https%3A%2F%2Fcdn.hashnode.com%2Fres%2Fhashnode%2Fimage%2Funsplash%2Frymh7EZPqRs%2Fupload%2Fv1652305549031%2FEQLwsDygY.jpeg%3Fw%3D1600%26h%3D840%26fit%3Dcrop%26crop%3Dentropy%26auto%3Dcompress%2Cformat%26format%3Dwebp&w=1920&q=75",
//   },
// ];

const PrevButton = ({ enabled, onClick }) => (
  <button
    className="embla__button embla__button--prev"
    onClick={onClick}
    disabled={!enabled}
  >
    <svg className="embla__button__svg" viewBox="137.718 -1.001 366.563 644">
      <path d="M428.36 12.5c16.67-16.67 43.76-16.67 60.42 0 16.67 16.67 16.67 43.76 0 60.42L241.7 320c148.25 148.24 230.61 230.6 247.08 247.08 16.67 16.66 16.67 43.75 0 60.42-16.67 16.66-43.76 16.67-60.42 0-27.72-27.71-249.45-249.37-277.16-277.08a42.308 42.308 0 0 1-12.48-30.34c0-11.1 4.1-22.05 12.48-30.42C206.63 234.23 400.64 40.21 428.36 12.5z" />
    </svg>
  </button>
);

const NextButton = ({ enabled, onClick }) => (
  <button
    className="embla__button embla__button--next"
    onClick={onClick}
    disabled={!enabled}
  >
    <svg className="embla__button__svg" viewBox="0 0 238.003 238.003">
      <path d="M181.776 107.719L78.705 4.648c-6.198-6.198-16.273-6.198-22.47 0s-6.198 16.273 0 22.47l91.883 91.883-91.883 91.883c-6.198 6.198-6.198 16.273 0 22.47s16.273 6.198 22.47 0l103.071-103.039a15.741 15.741 0 0 0 4.64-11.283c0-4.13-1.526-8.199-4.64-11.313z" />
    </svg>
  </button>
);

const BlogsCarousel = ({ options = { loop: true } }) => {
  const autoplay = useRef(
    Autoplay(
      { delay: 8000, stopOnInteraction: true },
      (emblaRoot) => emblaRoot.parentElement
    )
  );

  const [emblaRef, emblaApi] = useEmblaCarousel(options, [autoplay.current]);
  const [prevBtnEnabled, setPrevBtnEnabled] = useState(false);
  const [nextBtnEnabled, setNextBtnEnabled] = useState(false);

  const scrollNext = useCallback(() => {
    if (!emblaApi) return;
    emblaApi.scrollNext();
    autoplay.current.reset();
  }, [emblaApi]);

  const scrollPrev = useCallback(() => {
    if (!emblaApi) return;
    emblaApi.scrollPrev();
    autoplay.current.reset();
  }, [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setPrevBtnEnabled(emblaApi.canScrollPrev());
    setNextBtnEnabled(emblaApi.canScrollNext());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
  }, [emblaApi, onSelect]);

  return (
    <div className="embla">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          {/* {media.map((data) => ( */}
          <div className="embla__slide">
            <div className="embla__slide__inner">
              <div className="experience__wrapper__a">
                {/* just change their flex start etc stuff.... */}
                <div className="experience__wrapper__lower">
                  <h4>Titan Technology Tune-in 2.0, Tamil Nadu</h4>
                  <p className="experience__wrapper__duration">
                    April 2019 - May 2019
                  </p>
                  <p>
                    Showed our product and technology to TITAN senior management
                    (Director, Managing Director, CEO, and other executives).
                  </p>
                </div>
                <LazyLoadImage
                  src={titan}
                  alt="TTI-2.0"
                  effect="blur"
                  className="experience__wrapper__image"
                  // style={{
                  //   height: "340px",
                  //   "object-fit": "contain",
                  // }}
                  placeholderSrc={Lazytitan}
                />
              </div>
            </div>
          </div>
          <div className="embla__slide">
            <div className="embla__slide__inner">
              <div className="experience__wrapper__b">
                <div className="experience__wrapper__lower">
                  <h4>Health Trail Programme, IIM Calcutta</h4>
                  <p className="experience__wrapper__duration">
                    Jan 2019 - April 2019
                  </p>

                  <p>
                    Learned about brand development, market research, GTM
                    strategies, balance sheets, legal agreements, etc. in this
                    incubation.
                  </p>
                </div>
                <LazyLoadImage
                  src={iimcip}
                  alt="IIMCIP"
                  effect="blur"
                  className="experience__wrapper__image"
                  placeholderSrc={Lazyiimcip}
                />
              </div>
            </div>
          </div>

          <div className="embla__slide">
            <div className="embla__slide__inner">
              <div className="experience__wrapper__a">
                <div className="experience__wrapper__lower">
                  <h4>Qualcomm Design in India Challenge, Bangalore</h4>
                  <p className="experience__wrapper__duration">
                    Sept 2018 - March 2019
                  </p>
                  <p>
                    We ranked in Top 15 Startups in India and represented the
                    company to Senior Management of Qualcomm and investors.
                  </p>
                </div>
                <LazyLoadImage
                  src={qdic}
                  alt="QDIC"
                  effect="blur"
                  className="experience__wrapper__image"
                  placeholderSrc={Lazyqdic}
                />
              </div>
            </div>
          </div>
          {/* ))} */}
        </div>
      </div>
      <PrevButton onClick={scrollPrev} enabled={prevBtnEnabled} />
      <NextButton onClick={scrollNext} enabled={nextBtnEnabled} />
    </div>
  );
};

export default BlogsCarousel;

/* <img
  className="embla__slide__img"
  src={data.url}
  alt="A cool cat."
/> */
