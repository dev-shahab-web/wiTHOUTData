"use client";
import { imageLoader } from "@/hooks/image-loader";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import tourImgOne from "../../../public/assets/images/tour/Top Trending Packages 01.png";
import tourImgTwo from "../../../public/assets/images/tour/Top Trending Packages 02.png";
import tourImgThree from "../../../public/assets/images/tour/Top Trending Packages 03.png";
import { clientReviewData } from "@/data/client-review-data";
import TourDetailsPostForm from "./TourDetailsPostFrom/TourDetailsPostForm";
import { tourDetailsContent } from "@/data/tour-data";

const TourDetailTabArea = ({ data }: any) => {
  // Find the tour details content by id (fallback to first if not found)
  const details = tourDetailsContent.find((t) => t.id === data?.id) || tourDetailsContent[0];
  return (
    <>
      <div className="tour-details-nav-tabs mb-35">
        <nav>
          <div className="nav nav-tabs" id="nav-tab" role="tablist">
            <button
              className="nav-link active"
              id="nav-overview-tab"
              data-bs-toggle="tab"
              data-bs-target="#nav-overview"
              type="button"
              role="tab"
              aria-controls="nav-overview"
              aria-selected="true"
            >
              Overview
            </button>
            <button
              className="nav-link"
              id="nav-gallery-tab"
              data-bs-toggle="tab"
              data-bs-target="#nav-gallery"
              type="button"
              role="tab"
              aria-controls="nav-gallery"
              aria-selected="false"
              tabIndex={-1}
            >
              Gallery
            </button>
          </div>
        </nav>
        <div className="tab-content mt-25" id="nav-tabContent">
          <div
            className="tab-pane fade active show"
            id="nav-overview"
            role="tabpanel"
            aria-labelledby="nav-overview-tab"
            tabIndex={0}
          >
            {/* Overview Section */}
            {details.overview.map((text, idx) => (
              <p className={idx === 0 ? "mb-15" : "mb-20"} key={idx}>{text}</p>
            ))}
            {/* Include/Exclude Section */}
            <div className="tour-details-list-wrap mb-35">
              <h4 className="mb-20">Include/ Exclude</h4>
              <div className="tour-details-list-box">
                <div className="tour-details-list-include">
                  <ul>
                    {details.include.map((item, idx) => (
                      <li key={idx}>
                        <span className="list-icon success">
                          <i className="fa-solid fa-check"></i>
                        </span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="tour-details-list-exclude">
                  <ul>
                    {details.exclude.map((item, idx) => (
                      <li key={idx}>
                        <span className="list-icon danger">
                          <i className="fa-regular fa-xmark"></i>
                        </span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
            {/* Tour Plan Section */}
            <div className="tour-details-faq mb-35">
              <h4 className="mb-20">Tour Plan</h4>
              <div className="accordion-wrapper faq-style-3">
                <div className="accordion" id="accordionExampleThree">
                  {details.plan.map((item, idx) => {
                    const headingId = `heading${idx}`;
                    const collapseId = `collapse${idx}`;
                    return (
                      <div className="accordion-item" key={idx}>
                        <h6 className="accordion-header" id={headingId}>
                          <button
                            className={`accordion-button${idx === 0 ? "" : " collapsed"}`}
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target={`#${collapseId}`}
                            aria-expanded={idx === 0 ? "true" : "false"}
                            aria-controls={collapseId}
                          >
                            <span>{item.day}:</span> {item.title}
                          </button>
                        </h6>
                        <div
                          id={collapseId}
                          className={`accordion-collapse collapse${idx === 0 ? " show" : ""}`}
                          aria-labelledby={headingId}
                          data-bs-parent="#accordionExampleThree"
                        >
                          <div className="accordion-body">
                            {item.description}
                            {item.highlights && item.highlights.length > 0 && (
                              <div className="accordion-body-list">
                                <ul>
                                  {item.highlights.map((hl, hidx) => (
                                    <li key={hidx}>{hl}</li>
                                  ))}
                                </ul>
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
          <div
            className="tab-pane fade"
            id="nav-gallery"
            role="tabpanel"
            aria-labelledby="nav-gallery-tab"
            tabIndex={0}
          >
            <div className="tour-details-gallery mb-35">
              <h4 className="mb-20">Tour Galley</h4>
              <div className="row gy-24">
                {/* <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6">
                  <div className="tour-details-gallery-thumb image-hover-effect-two position-relative">
                    <Image
                      src={tourImgThree}
                      loader={imageLoader}
                      style={{ width: "100%", height: "auto" }}
                      alt="image"
                    />
                  </div>
                </div> */}
                <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6">
                  <div className="row gy-24">
                    <div className="col-xxl-12">
                      <div className="tour-details-gallery-thumb image-hover-effect-two position-relative">
                        <Image
                          src={data?.img}
                          loader={imageLoader}
                          style={{ width: "100%", height: "auto" }}
                          alt="image"
                        />
                      </div>
                    </div>
                    <div className="col-xxl-12">
                      <div className="tour-details-gallery-thumb image-hover-effect-two position-relative">
                        <Image
                          src={tourImgOne}
                          loader={imageLoader}
                          style={{ width: "100%", height: "auto" }}
                          alt="image"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6">
                  <div className="row gy-24">
                    <div className="col-xxl-12">
                      <div className="tour-details-gallery-thumb image-hover-effect-two position-relative">
                        <Image
                          src={tourImgTwo}
                          loader={imageLoader}
                          style={{ width: "100%", height: "auto" }}
                          alt="image"
                        />
                      </div>
                    </div>
                    <div className="col-xxl-12">
                      <div className="tour-details-gallery-thumb image-hover-effect-two position-relative">
                        <Image
                          src={tourImgThree}
                          loader={imageLoader}
                          style={{ width: "100%", height: "auto" }}
                          alt="image"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="tour-details-location mb-35">
              <h4 className="mb-20">Tour Location</h4>
              <div className="tour-details-location-map">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3537.363049152582!2d83.9855933150616!3d28.20958398260659!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399595d6e5b6e3e1%3A0x7e1b1b1b1b1b1b1b!2sPokhara%2C%20Nepal!5e0!3m2!1sen!2snp!4v1707640089632!5m2!1sen!2snp"
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </div>
          <div
            className="tab-pane fade"
            id="nav-feedback"
            role="tabpanel"
            aria-labelledby="nav-feedback-tab"
            tabIndex={0}
          >
            <div className="tour-details-rating-wrapper mb-35">
              <div className="row gy-24 align-items-center">
                <div className="col-xl-2 col-lg-3 col-md-4 col-sm-4">
                  <div className="rating-box">
                    <div className="inner">
                      <div className="rating-number">5.0</div>
                      <div className="rating">
                        <Link href="#">
                          <i className="fa fa-star"></i>
                        </Link>
                        <Link href="#">
                          <i className="fa fa-star"></i>
                        </Link>
                        <Link href="#">
                          <i className="fa fa-star"></i>
                        </Link>
                        <Link href="#">
                          <i className="fa fa-star"></i>
                        </Link>
                        <Link href="#">
                          <i className="fa fa-star"></i>
                        </Link>
                      </div>
                      <span className="sub-title">(234 Review)</span>
                    </div>
                  </div>
                </div>
                <div className="col-lg-10 col-md-8 col-sm-7">
                  <div className="review-wrapper">
                    <div className="single-progress-bar">
                      <div className="rating-text">5</div>

                      <div className="progress">
                        <div
                          className="progress-bar bg-1"
                          role="progressbar"
                          style={{ width: "82%" }}
                          aria-valuenow={63}
                          aria-valuemin={0}
                          aria-valuemax={100}
                        ></div>
                      </div>
                      <span className="value-text">82%</span>
                      <span className="number">212</span>
                    </div>
                    <div className="single-progress-bar">
                      <div className="rating-text">4</div>
                      <div className="progress">
                        <div
                          className="progress-bar bg-2"
                          role="progressbar"
                          style={{ width: "8%" }}
                          aria-valuenow={29}
                          aria-valuemin={0}
                          aria-valuemax={100}
                        ></div>
                      </div>
                      <span className="value-text">8%</span>
                      <span className="number">09</span>
                    </div>
                    <div className="single-progress-bar">
                      <div className="rating-text">3</div>
                      <div className="progress">
                        <div
                          className="progress-bar bg-3"
                          role="progressbar"
                          style={{ width: "3%" }}
                          aria-valuenow={6}
                          aria-valuemin={0}
                          aria-valuemax={100}
                        ></div>
                      </div>
                      <span className="value-text">3%</span>
                      <span className="number">02</span>
                    </div>
                    <div className="single-progress-bar">
                      <div className="rating-text">2</div>
                      <div className="progress">
                        <div
                          className="progress-bar bg-4"
                          role="progressbar"
                          style={{ width: "2%" }}
                          aria-valuenow={1}
                          aria-valuemin={0}
                          aria-valuemax={100}
                        ></div>
                      </div>
                      <span className="value-text">2%</span>
                      <span className="number">01</span>
                    </div>
                    <div className="single-progress-bar">
                      <div className="rating-text">1</div>
                      <div className="progress">
                        <div
                          className="progress-bar bg-5"
                          role="progressbar"
                          style={{ width: "7%" }}
                          aria-valuenow={1}
                          aria-valuemin={0}
                          aria-valuemax={100}
                        ></div>
                      </div>
                      <span className="value-text">7%</span>
                      <span className="number">10</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="tour-details-rating-wrapper">
              <div className="rewiew-content">
                {clientReviewData &&
                  clientReviewData.map((item) => (
                    <div key={item.id} className="tour-review-wrapper">
                      <div className="media">
                        <div className="thumbnail">
                          <Link href="#">
                            <Image
                              src={item.img}
                              loader={imageLoader}
                              style={{ width: "100%", height: "auto" }}
                              alt="Author Images"
                            />
                          </Link>
                        </div>
                        <div className="media-body">
                          <div className="author-info">
                            <h5 className="title">
                              <Link
                                className="hover-flip-item-wrapper"
                                href="#"
                              >
                                {item.name}
                              </Link>
                              <Link href="#">
                                <i className="fa-solid fa-thumbs-up"></i>
                              </Link>
                            </h5>
                            <ul className="bd-meta">
                              <li className="has-seperator">
                                On: <span>{item.date}</span>
                              </li>
                              <li>
                                <div className="rating">
                                  <Link href="#">
                                    <i className="fa fa-star"></i>
                                  </Link>
                                  <Link href="#">
                                    <i className="fa fa-star"></i>
                                  </Link>
                                  <Link href="#">
                                    <i className="fa fa-star"></i>
                                  </Link>
                                  <Link href="#">
                                    <i className="fa fa-star"></i>
                                  </Link>
                                  <Link href="#">
                                    <i className="fa fa-star"></i>
                                  </Link>
                                </div>
                              </li>
                            </ul>
                          </div>
                          <div className="content">
                            <p className="description">{item.description}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
            {/*tour details post form */}
            <TourDetailsPostForm />
          </div>
        </div>
      </div>
    </>
  );
};

export default TourDetailTabArea;
