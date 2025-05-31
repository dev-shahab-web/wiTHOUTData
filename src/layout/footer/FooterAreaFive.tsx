"use client";
import Image from "next/image";
import React from "react";
import supportImg from "../../../public/assets/images/shapes/support-img.png";
import supportImgTwo from "../../../public/assets/images/shapes/support-img-two.png";
import logoWhite from "../../../public/assets/images/logo/logo.png";
import paymentOptionWhiteImg from "../../../public/assets/images/icons/payment-option-white.png";
import { imageLoader } from "@/hooks/image-loader";
import Link from "next/link";
import useIsMobile from "@/hooks/useIsMobile";

const FooterAreaFive = () => {
   const isMobile = useIsMobile();
  return (
    <>
      <footer className="bd-footer-area theme-bg-secondary">
        <div className="footer-top section-space">
          <div className="container">
            <div className="row gy-24 align-items-center justify-content-between">
              <div className="col-xxl-5 col-xl-5 col-lg-6">
                <div className="footer-support-wrapper">
                  <div className="footer-support-thumb">
                    <Image
                      src={supportImg}
                      loader={imageLoader}
                      style={isMobile ? {width: "45px", height: "auto"} :{ width: "100", height: "auto" }}
                      alt="image"
                    />
                  </div>
                  <h6
  className={`footer-support-title white-text${isMobile ? " fs-14" : ""}`}
>
                    Need Support for tour & travels?
                  </h6>
                  <div className="footer-support-btn">
                    <Link
                      className="bd-icon-btn has-big hover-style " style={isMobile ? {fontSize: "16px", width:"30px", height: "30px"}: {}}
                      href="contact"
                      target="_blank"
                    >
                      <i className="fa-sharp fa-regular fa-arrow-right"></i>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-xxl-6 col-xl-6 col-lg-6">
                <div className="footer-support-wrapper right-side">
                  <div className="footer-support-thumb">
                    <Image
                      src={supportImgTwo}
                      loader={imageLoader}
                      style={isMobile ? {width: "50px", height: "auto"} :{ width: "100", height: "auto" }}
                      alt="image"
                    />
                  </div>
                  <h6
  className={`footer-support-title white-text${isMobile ? " fs-14" : ""}`}
>
                    Ready to Get Started With Vacations!
                  </h6>
                  <div className="footer-support-btn">
                    <Link
                      className="bd-icon-btn has-big hover-style"
                      style={isMobile ? {fontSize: "16px", width:"30px", height: "30px"}: {}}
                      href="destinations-details-right"
                      target="_blank"
                    >
                      <i className="fa-sharp fa-regular fa-arrow-right"></i>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bd-footer section-space">
          <div className="container">
            <div className="row gy-24">
              <div className="col-xxl-3 col-xl-3 col-lg-6 col-md-6">
                <div className="footer-widget footer-4-col-1">
                  <div className="footer-widget-logo mb-25">
                    <Link href="/">
                      {/* <Image
                        src={logoWhite}
                        loader={imageLoader}
                        style={{ width: "auto", height: "auto" }}
                        alt="logo not found"
                      /> */}
                       <h5 className="footer-widget-title white-text">Holy Nepal Yatra</h5>
                    </Link>
                  </div>
                  <div className="footer-widget-content">
                    <p>
                      Welcome to Holy Nepal Yatra, your gateway to unforgettable
                      adventures and immersive travel experiences. Explore with
                      us and let your journey begin!
                    </p>
                    <div className="theme-social is-white-color">
                    <Link
                      className="fab fa-instagram-f"
                      href="https://www.instagram.com/holynepalyatra/"
                      target="blank"
                    >
                      <i className="icon-instagram"></i>
                    </Link>
                    <Link href="https://www.facebook.com/profile.php?id=61572491938150/">
                      <i className="fab fa-facebook-f"></i>
                    </Link>
                      {/* <Link href="https://www.linkedin.com/">
                        <i className="icon-linkedin"></i>
                      </Link> */}
                      <Link href="https://www.youtube.com/">
                        <i className="icon-youtube"></i>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xxl-2 col-xl-2 col-lg-6 col-md-6">
                <div className="footer-widget footer-4-col-2">
                  <h5 className="footer-widget-title white-text">Company</h5>
                  <div className="footer-widget-links has-white">
                    <ul>
                      <li className="underline-two">
                        <Link href="/">Home</Link>
                      </li>
                      <li className="underline-two">
                        <Link href="/about">About Us</Link>
                      </li>
                      <li className="underline-two">
                        <Link href="/tour-listing-three">Packages</Link>
                      </li>
                      <li className="underline-two">
                        <Link href="/terms-conditions">Terms & Conditions</Link>
                      </li>
                      <li className="underline-two">
                        <Link href="/privacy-policy">Privacy Policy</Link>
                      </li>
                      <li className="underline-two">
                        <Link href="/contact">Contact Now</Link>
                      </li>
                      {/* <li className="underline-two">
                        <Link href="/team">Travel Guides</Link>
                      </li> */}
                      {/* <li className="underline-two">
                        <Link href="/tour-details">Traveler Review</Link>
                        <span className="bd-badge warning">New</span>
                      </li>
                      <li className="underline-two">
                        <Link href="/tour-listing-three">Packages</Link>
                      </li> */}
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-xxl-4 col-xl-4 col-lg-6 col-md-6">
                <div className="footer-widget footer-4-col-3">
                  <h5 className="footer-widget-title white-text">Our Office</h5>
                  <div className="footer-widget-content">
                    <p>
                      <Link href="/contact">Shop No. 1010, Gorakhnath Road, Gorakhpur, Uttar Pradesh, Pin Code - 273015</Link>
                    </p>
                    {/* <div className="footer-form mb-15">
                      <form action="#">
                        <div className="footer-subscribe">
                          <input type="email" placeholder="Email address" />
                          <button type="submit">
                            {" "}
                            <i className="fa-solid fa-paper-plane"></i>
                          </button>
                        </div>
                      </form>
                    </div> */}
                    {/* <div className="footer-form-check">
                      <label className="footer-form-check-label">
                        <input type="checkbox" />
                        <svg viewBox="0 0 64 64" height="2em" width="2em">
                          <path
                            d="M 0 16 V 56 A 8 8 90 0 0 8 64 H 56 A 8 8 90 0 0 64 56 V 8 A 8 8 90 0 0 56 0 H 8 A 8 8 90 0 0 0 8 V 16 L 32 48 L 64 16 V 8 A 8 8 90 0 0 56 0 H 8 A 8 8 90 0 0 0 8 V 56 A 8 8 90 0 0 8 64 H 56 A 8 8 90 0 0 64 56 V 16"
                            pathLength="575.0541381835938"
                            className="path"
                          ></path>
                        </svg>{" "}
                        I agree to all terms and policies
                      </label>
                    </div> */}
                  </div>
                </div>
              </div>
              <div className="col-xxl-3 col-xl-3 col-lg-6 col-md-6">
                <div className="footer-widget footer-4-col-4">
                  <h5 className="footer-widget-title white-text">Contact Us</h5>
                  <div className="footer-widget-list-wrapper">
                    <ul className="footer-widget-list-items">
                      <li className="footer-widget-list-single-item">
                        <span className="footer-widget-list-icon">
                          <i className="icon-call"></i>
                        </span>
                        <span className="footer-widget-list-text">
                          <span className="footer-widget-list-text-top">
                            Call Us
                          </span>
                          <div style={{ display: "flex", flexDirection: "column" }}>

                          <Link href="tel:+918429812424">+91 842 981 2424</Link>
                          <Link href="tel:+918429962424">+91 842 996 2424</Link>
                          </div>
                        </span>
                      </li>
                    
                      <li className="footer-widget-list-single-item">
                        <span className="footer-widget-list-icon">
                          <i className="icon-envelope"></i>
                        </span>
                        <span className="footer-widget-list-text">
                          <span className="footer-widget-list-text-top">
                            Email Us
                          </span>
                          <Link href="mailto:holynepalyatra@gmail.com">
                            holynepalyatra@gmail.com
                          </Link>
                        </span>
                      </li>
                      {/* <li className="footer-widget-list-single-item">
                        <span className="footer-widget-list-icon">
                          <i className="icon-location-fill"></i>
                        </span>
                        <span className="footer-widget-list-text">
                          <span className="footer-widget-list-text-top">
                            Our office
                          </span>
                          <Link href="/contact">Shop No. 1 Gorakhnath Road Opposite Gorakhnath Temple Gorakhpur 273015</Link>
                        </span>
                      </li> */}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-copyright-area border-two">
          <div className="container">
            <div className="row gy-24 align-items-center justify-content-between align-content-end">
              <div className="col-xl-4 col-lg-6 col-md-6 col-12">
                <div className="footer-copyright has-white">
                  <p>
                    Copyright @ 2025{" "}
                    <Link
                      href="/https://holynepalyatra.com"
                      target="_blank"
                    >
                      Holy Nepal Yatra
                    </Link>
                    . All Right Reserved
                  </p>
                </div>
              </div>
              <div className="col-xl-3 col-lg-5 col-md-6 col-12">
                <div className="footer-card">
                  <Image
                    src={paymentOptionWhiteImg}
                    loader={imageLoader}
                    style={{ width: "auto", height: "auto" }}
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default FooterAreaFive;
