import React, { Suspense } from "react";
import "./Experience.css";
import qdic from "../../media/Titan4.jpg";
import Lazyqdic from "../../media/LazyTitan4.jpg";
import iimcip from "../../media/IIMCIP.jpg";
import Lazyiimcip from "../../media/LazyIIMCIP.jpg";
import titan from "../../media/Titan.jpg";
import Lazytitan from "../../media/LazyTitan.jpg";
// import prize from "../../media/img_bg_1.jpg";

//add media queries to remove photos or change sizes etc

function Experience() {
  return (
    <div className="experience" id="experience">
      <h2>Work Experience</h2>
      <div className="experience__wrapper__upper">
        <div className="experience__wrapper__upper__a">
          <h4>Data Scientist, hBits Online Platform Services</h4>
          <p className="experience__wrapper__duration">Sept 2019 - Jan 2020</p>
          <p>
            • Mapped the Real Estate (structured and unstructured) data of a
            whole state of India using scraping algorithms and OCR, analyzed
            them using SpaCy, NLTK, and coreNLP to extract the required
            insights.
            <br />
            <br />• Applied AWS Services (Amazon Textract, S3, and more) and NLP
            algorithms to convert other unstructured datasets in the form of
            images and PDF Documents into structured spreadsheets and tables to
            get better insights regarding pricing, amenities, location, and
            other factors essential for Real Estate pricing.
          </p>
        </div>
        <div className="border" />
        <div className="experience__wrapper__upper__a">
          <h4>Data Scientist, mBreath Technologies</h4>
          <p className="experience__wrapper__duration">Sept 2018 - July 2019</p>
          <p>
            • Researched and Developed three data science projects real-time
            audio analysis and classification, sleep apnea detection, and sleep
            stage classification.
            <br />
            <br />
            • Worked on assisting the CxOs at multiple fronts including Business
            Model Development, Customer Acquisition, Market Analysis, Product
            Feasibility Analysis and Customer Segmentation and Satisfaction
            analysis while working as Data Scientist.
            <br />
            <br />• Drafting these projects as research papers as the co-author
            while at IIT Kharagpur.
          </p>
        </div>
      </div>
      {/* <img src={prize} alt="prize" /> */}
      <h2>Competitions and Entrepreneurship Experiences</h2>
      <div>
        <div className="experience__wrapper__a">
          {/* just change their flex start etc stuff.... */}
          <div className="experience__wrapper__lower">
            <h4>Titan Technology Tune-in 2.0, Tamil Nadu</h4>
            <p className="experience__wrapper__duration">
              April 2019 - May 2019
            </p>
            <p>
              This forum enabled us to showcase our product and technology to
              TITAN senior management (Director, Managing Director, CEO, and
              other executives). The forum helped us to discuss and demonstrate
              our project and research work and talk about the product's
              application, growth, and use cases that are to be considered while
              entering the market. The event was full of advanced researchers
              and projects led mainly by PhD scholars and professors
              representing elite institutes across India (IIT Kharagpur, Kanpur,
              Guwahati, IIIT Jabalpur, etc.).
            </p>
          </div>
          <div className="experience__wrapper__image">
            <Suspense
              fallback={
                <img
                  src={Lazytitan}
                  alt="Banner Lazy"
                  style={{
                    "object-fit": "contain",
                    width: "100%",
                  }}
                />
              }
            >
              <img src={titan} alt="TTI-2.0" />
            </Suspense>
          </div>
        </div>
        <div className="experience__wrapper__b">
          <div className="experience__wrapper__lower">
            <h4>Health Trail Programme, IIM Calcutta</h4>
            <p className="experience__wrapper__duration">
              Jan 2019 - April 2019
            </p>

            <p>
              Health Trail was a three month non-residential accelerator
              programme for healthcare startups hosted by IIM Calcutta and
              Villgro. Got to learn about brand development, market research,
              GTM strategies, balance sheet handling, agreements, and all round
              business knowledge required to grow a startup while networking
              with entrepreneurs all around the country.
            </p>
          </div>
          <div className="experience__wrapper__image">
            <Suspense
              fallback={
                <img
                  src={Lazyiimcip}
                  alt="iimcip Lazy"
                  style={{
                    "object-fit": "contain",
                    width: "100%",
                  }}
                />
              }
            >
              <img src={iimcip} alt="IIM Calcutta Innovation Park" />
            </Suspense>
          </div>
        </div>
        <div className="experience__wrapper__a">
          {/* just change their flex start etc stuff.... */}
          <div className="experience__wrapper__lower">
            <h4>Qualcomm Design in India Challenge, Bangalore</h4>
            <p className="experience__wrapper__duration">
              Sept 2019 - March 2019
            </p>
            <p>
              This was one of the toughest startup programme to get selected.
              Our startup, mBreath, got ranked in Top 15 Nationwide Startups in
              India and we represented the company at The Ritz Carlton,
              Bangalore. After the selection in the final round, I learned a bit
              of Android Kernel programming, sensors interfacing with Qualcomm's
              Snapdragon processors, Java Native Interface (C and Java coding
              together), while researching and developing the AI models
              simultaneously. I could not take during the super busy two-day
              event, so here's one from Titan event.
            </p>
          </div>
          <div className="experience__wrapper__image">
            <Suspense
              fallback={
                <img
                  src={Lazyqdic}
                  alt="QDIC Lazy"
                  style={{
                    "object-fit": "contain",
                    width: "100%",
                  }}
                />
              }
            >
              <img src={qdic} alt="QDIC" />
            </Suspense>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Experience;
