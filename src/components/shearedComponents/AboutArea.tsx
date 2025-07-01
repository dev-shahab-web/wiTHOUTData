"use client";
import React from "react";
import aboutImgThree from "../../../public/assets/images/about/about-img-5.png";
import aboutImgFour from "../../../public/assets/images/about/about-img-6.png";
import aboutShape from "../../../public/assets/images/shapes/about-shape.png";
import { imageLoader } from "@/hooks/image-loader";
import Image from "next/image";

const AboutArea = () => {
  return (
    <section style={{ background: "#f8fafc", padding: "48px 0" }}>
      <div className="container">
        <div className="row align-items-start gy-5 gx-5">
          {/* Left Column: Images, Badge, Mission */}
          <div className="col-lg-6">
            <div style={{ position: "relative", gap: 24 }}>
              <div style={{ flex: 1 }}>
                <Image
                  src={aboutImgThree}
                  loader={imageLoader}
                  style={{
                    width: "100%",
                    borderRadius: 16,
                    boxShadow: "0 4px 24px rgba(0,0,0,0.07)",
                  }}
                  alt="about-1"
                />
              </div>
              <div style={{ flex: 1, marginTop: 48 }}>
                <Image
                  src={aboutImgFour}
                  loader={imageLoader}
                  style={{
                    width: "100%",
                    borderRadius: 16,
                    boxShadow: "0 4px 24px rgba(0,0,0,0.07)",
                  }}
                  alt="about-2"
                />
              </div>
              <div
                style={{
                  position: "absolute",
                  top: 16,
                  left: 16,
                  zIndex: 2,
                }}
              >
              
              </div>
              <div
                style={{
                  position: "absolute",
                  bottom: -32,
                  right: 24,
                  zIndex: 1,
                }}
              >
                <Image
                  src={aboutShape}
                  loader={imageLoader}
                  style={{ width: 80, height: 80, opacity: 0.7 }}
                  alt="shape"
                />
              </div>
            </div>
            {/* Certificate-like Badge */}
            <div
              style={{
               
                justifyContent: "center",
                marginTop: 40,
              }}
            >
              <div
                style={{
                  border: "2px dashed #006ce4",
                  borderRadius: 20,
                  background: "#fff",
                  padding: "24px 48px",
                  boxShadow: "0 4px 24px rgba(37, 69, 211, 0.1)",
                 display: "flex",
                gap: 24,
                  // flexDirection: "column",
                  alignItems: "center",
                  minWidth: 220,
                  minHeight: 100,
                }}
              >
                <span
                  style={{
                    fontSize: 48,
                    fontWeight: 700,
                    
                    lineHeight: 1,
                  }}
                >
                  25  
                </span>
                <span
                  style={{
                    fontSize: 20,
                    fontWeight: 500,
                    color: "#222",
                    // marginTop: 4,
                    textAlign: "center",
                  }}
                >
                    Years of  Experience
                </span>
              </div>
            </div>
            {/* Mission Box */}
            <div style={{ marginTop: 32 }}>
              <div
                style={{
                  border: "2px dashed #006ce4",
                  borderRadius: 16,
                  background: "#fff",
                  padding: "28px 24px",
                  boxShadow: "0 2px 16px rgba(37, 60, 211, 0.07)",
                  fontSize: 18,
                  fontWeight: 500,
                  color: "#222",
                }}
              >
                <h4
                  className="mb-3"
                  style={{ fontFamily: `'Dancing Script', 'Pacifico', 'Brush Script MT', cursive`, fontWeight: 700 }}
                >
                  Our Mission
                </h4>
                <span className="about-list-subtitle" style={{
                  fontFamily: `'Dancing Script', 'Pacifico', 'Brush Script MT', cursive`,
                  fontSize: 18,
                  fontStyle: 'italic',
                  // color: '#006ce4',
                  fontWeight: 500,
                  lineHeight: 1.7,
                  display: 'block',
                  marginTop: 8,
                }}>
                  At Holy Nepal Yatra, our mission is to create unforgettable
                  travel experiences that connect our clients with the rich
                  cultural heritage, stunning landscapes, and spiritual essence of
                  the Himalayas. We aim to provide high-quality, customized travel
                  solutions that cater to the unique needs and preferences of each
                  traveler.
                </span>
              </div>
            </div>
          </div>
          {/* Right Column: About, Services, Why Us */}
          <div className="col-lg-6">
            <div className="section-title-wrapper mb-4">
              <span
                className="section-subtitle mb-2"
                style={{
                  
                  fontWeight: 600,
                  letterSpacing: 1,
                }}
              >
                About Us
              </span>
              <h2
                className="section-title mb-3"
                style={{
                  fontWeight: 800,
                  fontSize: 32,
                  color: "#1a202c",
                }}
              >
                Discover Limitless Possibilities with HolyNepalYatra.
              </h2>
            </div>
            <div className="about-list mb-4">
              <h4
                className="section-title mb-2"
                style={{ color: "#222", fontWeight: 700 }}
              >
                Our Services
              </h4>
              <br />
              <ul
                style={{
                  padding: 0,
                  listStyle: "none",
                  margin: 0,
                }}
              >
                <li
                  // style={{
                  //  
                  //   
                  //   
                  // }}
                >
                  <span className="about-list-icon">
                    <i
                      className="icon-tour-package"
                      
                    ></i>
                  </span>
                  <div>
                    <span
                      className="about-list-title"
                      // style={{ fontWeight: 600 }}
                    >
                      Tour Holidays
                    </span>
                    {/* <br /> */}
                    <span
                      // className="about-list-subtitle"
                      
                    >
                      We offer a wide array of tour packages designed to showcase
                      the best of Nepal, Tibet, and Bhutan. From cultural tours and
                      city excursions to wildlife safaris and scenic adventures, we
                      ensure every journey is memorable.
                    </span>
                  </div>
                </li>
                <li
                  // style={{
                  //  
                  //   
                  //   
                  // }}
                >
                  <span className="about-list-icon">
                    <i
                      className="icon-flights"
                      style={{  fontSize: 28 }}
                    ></i>
                  </span>
                  <div>
                    <span
                      className="about-list-title mb-1"
                      style={{ fontWeight: 600 }}
                    >
                      Flight Ticket Booking
                    </span>
                    {/* <br /> */}
                    <span
                      className="about-list-subtitle"
                      
                    >
                      Our efficient flight ticket booking services cover both
                      domestic and international routes, ensuring you receive the
                      best options and competitive prices for your travel needs.
                    </span>
                  </div>
                </li>
                <li
                  // style={{
                  //  
                  //   
                  //   
                  // }}
                >
                  <span className="about-list-icon">
                    <i
                      className="icon-mountain"
                      style={{  fontSize: 28 }}
                    ></i>
                  </span>
                  <div>
                    <span
                      className="about-list-title mb-1"
                      style={{ fontWeight: 600 }}
                    >
                      Pilgrimage Tours
                    </span>
                    <span
                      className="about-list-subtitle"
                      
                    >
                      We organize spiritually enriching pilgrimage tours to sacred
                      sites, providing a serene and meaningful experience for
                      devotees and spiritual seekers.
                    </span>
                  </div>
                </li>
                <li
                  style={{
                   
                    
                    
                  }}
                >
                  <span className="about-list-icon">
                    <i
                      className="icon-trip"
                      style={{  fontSize: 28 }}
                    ></i>
                  </span>
                  <div>
                    <span
                      className="about-list-title mb-1"
                      style={{ fontWeight: 600 }}
                    >
                      Hiking and Trekking
                    </span>
                    <span
                      className="about-list-subtitle"
                      
                    >
                      Experience the thrill of adventure with our hiking and
                      trekking packages. We cover some of the most iconic trails,
                      including the Everest Base Camp and Annapurna Circuit,
                      catering to all levels of trekking enthusiasts.
                    </span>
                  </div>
                </li>
                <li
                  style={{
                   
                    
                    marginBottom: 0,
                  }}
                >
                  <span className="about-list-icon">
                    <i
                      className="icon-plane-up"
                      style={{  fontSize: 28 }}
                    ></i>
                  </span>
                  <div>
                    <span
                      className="about-list-title mb-1"
                      style={{ fontWeight: 600 }}
                    >
                      Helicopter Tours
                    </span>
                    <span
                      className="about-list-subtitle"
                      
                    >
                      See the Himalayas from a unique vantage point with our
                      exclusive helicopter tours. Enjoy breathtaking aerial views of
                      majestic mountains and pristine landscapes, creating memories
                      that last a lifetime.
                    </span>
                  </div>
                </li>
              </ul>
            </div>
            <div className="about-list mb-0">
              <h4
                className="section-title mb-2"
                style={{ color: "#222", fontWeight: 700 }}
              >
                Why Choose Us?
              </h4>
              <br />
              <ul
                style={{
                  padding: 0,
                  listStyle: "none",
                  margin: 0,
                }}
              >
                <li
                 
                >
                  <span className="about-list-icon">
                    <i
                      className="icon-profile"
                      style={{  fontSize: 28 }}
                    ></i>
                  </span>
                  <div>
                    <span
                      className="about-list-title mb-1"
                      style={{ fontWeight: 600 }}
                    >
                      Experienced Professionals
                    </span>
                    <span
                      className="about-list-subtitle"
                      
                    >
                      Our team of seasoned travel experts is dedicated to ensuring
                      your travel experience is seamless and enjoyable.
                    </span>
                  </div>
                </li>
                <li
                 
                >
                  <span className="about-list-icon">
                    <i
                      className="icon-tour-package"
                      style={{  fontSize: 28 }}
                    ></i>
                  </span>
                  <div>
                    <span
                      className="about-list-title mb-1"
                      style={{ fontWeight: 600 }}
                    >
                      Customized Travel Plans
                    </span>
                    <span
                      className="about-list-subtitle"
                      
                    >
                      We understand that every traveler is unique, and we take pride
                      in offering tailor-made travel packages that suit your
                      specific interests and requirements.
                    </span>
                  </div>
                </li>
                <li
                 
                >
                  <span className="about-list-icon">
                    <i
                      className="icon-life-jacket"
                      style={{  fontSize: 28 }}
                    ></i>
                  </span>
                  <div>
                    <span
                      className="about-list-title mb-1"
                      style={{ fontWeight: 600 }}
                    >
                      Commitment to Safety
                    </span>
                    <span
                      className="about-list-subtitle"
                      
                    >
                      Your safety is our priority. We adhere to the highest safety
                      standards to ensure a secure and comfortable journey.
                    </span>
                  </div>
                </li>
                <li
                
                >
                  <span className="about-list-icon">
                    <i
                      className="icon-world"
                      style={{  fontSize: 28 }}
                    ></i>
                  </span>
                  <div>
                    <span
                      className="about-list-title mb-1"
                      style={{ fontWeight: 600 }}
                    >
                      Local Expertise
                    </span>
                    <span
                      className="about-list-subtitle"
                      
                    >
                      With deep knowledge of the destinations we serve, we provide
                      insightful and immersive experiences that reveal the true
                      essence of the Himalayas.
                    </span>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutArea;
