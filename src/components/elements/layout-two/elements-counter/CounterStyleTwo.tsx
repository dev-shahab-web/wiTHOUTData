import CountUpContent from "@/elements/counter/CountUpContent";
import React from "react";

const CounterStyleTwo = () => {
  return (
    <>
      <section className="bd-counter-area section-space flash-white fix">
        <div className="container">
          <div
            className="row align-items-center justify-content-center wow bdFadeInUp"
            data-wow-delay=".3s"
          >
            <div className="col-lg-12">
              <div className="section-title-wrapper section-title-space text-center">
                <div className="elements-section__wrapper elements-line">
                  <div className="separator__line line-left"></div>
                  <div className="elements-title__wrapper">
                    <h2 className="section__title elements__title">
                      Counter Style 2
                    </h2>
                  </div>
                  <div className="separator__line line-right"></div>
                </div>
                <p className="muted-text"></p>
              </div>
            </div>
          </div>
          <div className="counter-wrapper counter-style-two">
            <div className="counter-item">
              <div className="counter-content">
                <h2>
                  <span
                    data-purecounter-duration="1"
                    data-purecounter-end="900"
                    className="purecounter"
                  >
                    <CountUpContent number={900} text="+" />
                  </span>
                </h2>
                <p>Total Destination</p>
              </div>
            </div>
            <div className="counter-item">
              <div className="counter-content">
                <h2>
                  <span
                    data-purecounter-duration="1"
                    data-purecounter-end="5"
                    className="purecounter"
                  >
                    <CountUpContent number={5} text="K" />
                  </span>
                </h2>
                <p>Campaigns Closed</p>
              </div>
            </div>
            <div className="counter-item">
              <div className="counter-content">
                <h2>
                  <span
                    data-purecounter-duration="1"
                    data-purecounter-end="350"
                    className="purecounter"
                  >
                    <CountUpContent number={350} text="+" />
                  </span>
                </h2>
                <p>Our Volunteer</p>
              </div>
            </div>
            <div className="counter-item">
              <div className="counter-content">
                <h2>
                  <span
                    data-purecounter-duration="1"
                    data-purecounter-end="355"
                    className="purecounter"
                  >
                    <CountUpContent number={355} text="K+" />
                  </span>
                </h2>
                <p>Happy Traveler</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CounterStyleTwo;
