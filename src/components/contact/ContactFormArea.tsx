"use client";
import ContactPageForm from "@/forms/ContactPageForm";
import Link from "next/link";
import React from "react";
const ContactFormArea = () => {
  return (
    <>
      <section className="bd-contact-form section-space-bottom">
        <div className="container">
          <div className="row gy-24 justify-content-between">
            <div className="col-xxl-5 col-xl-5 col-lg-6">
              <div className="section-title-wrapper">
                <span className="section-subtitle mb-10">Contact us</span>
                <h3 className="section-title mb-15">
                Get 100% Free Booking Assistance – Contact With Us!
                </h3>
                <p>
                Planning a spiritual journey across Nepal’s holy sites?
                Let our team assist you with free travel consultation and hassle-free bookings — from tour packages and hotels to transportation and temple visits.
                </p>
                <div className="section-divider mb-25"></div>
                <div className="contact-social">
                  <span className="contact-social-title d-block mb-30">
                    Follow Us here:
                  </span>
                  <div className="social-menu">
                    <ul>
                      <li>
                        <Link
                          className="facebook"
                          href="https://www.facebook.com/profile.php?id=61572491938150/"
                          target="blank"
                        >
                          <i className="icon-facebook"></i>
                        </Link>
                      </li>
                      {/* <li>
                        <Link
                          className="twitter"
                          href="https://twitter.com/"
                          target="blank"
                        >
                          <i className="icon-twitter-x"></i>
                        </Link>
                      </li> */}
                      <li>
                        <Link
                          className="instagram"
                          href="https://www.instagram.com/holynepalyatra/"
                          target="blank"
                        >
                          <i className="icon-instagram"></i>
                        </Link>
                      </li>
                      {/* <li>
                        <Link
                          className="linkedin"
                          href="https://www.linkedin.com"
                          target="blank"
                        >
                          <i className="icon-linkedin"></i>
                        </Link>
                      </li> */}
                      <li>
                        <Link className="youtube" href="https://youtube.com/@holynepalyatra?si=CWtUJbf19v1l17fm">
                          <i className="icon-youtube"></i>
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xxl-6 col-xl-6 col-lg-6">
              <div className="contact-form">
                <h5 className="mb-24">Drop Us a Line... </h5>
                <ContactPageForm />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactFormArea;
