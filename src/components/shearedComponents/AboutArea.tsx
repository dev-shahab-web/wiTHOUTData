"use client";
import React from "react";

import { aboutServices, aboutWhyChooseUs } from "@/data/about-sections-data";

const AboutArea = () => {
  return (
    <div className="container">
      {/* Top: About Us, Mission, Vision */}
      <div className="row mb-5">
  <div className="col-12 mb-4">
    <h2 style={{ fontWeight: 700, fontSize: 28 }}>About Us</h2>
    <p style={{ fontSize: 17, color: "#222", marginBottom: 0, marginTop: 10 }}>
      At <strong>Holy Nepal Yatra</strong>, we are dedicated to showcasing the spiritual soul and natural wonders of Nepal through expertly crafted journeys that are genuine, memorable, and deeply enriching. With over a decade of experience in the travel industry, we have earned the trust of thousands of pilgrims and adventurers by consistently delivering seamless, affordable, and heartfelt experiences. 
      <br />
      Our services span a wide array of Nepal-centric tours including <strong>cultural explorations</strong>, <strong>scenic city getaways</strong>, <strong>holy pilgrimage circuits</strong> such as <strong>Pashupatinath Darshan</strong>, <strong>Muktinath Temple Yatra</strong>, and the sacred <strong>Kailash Mansarovar Yatra</strong>. For thrill seekers, we offer professionally guided <strong>trekking expeditions</strong> to Everest Base Camp, Annapurna Circuit, and more, along with <strong>helicopter tours</strong> for breathtaking aerial views of the Himalayas.
      <br />
      We are proud of our <strong>team of local experts</strong> and <strong>seasoned travel professionals</strong> who know Nepal intimately and work tirelessly to ensure every journey is stress-free, secure, and tailored to your unique interests. From domestic flight bookings to hotel arrangements and guided tours, we handle every detail with care—so you can focus on your spiritual quest or adventure with peace of mind.
      <br />
      Holy Nepal Yatra stands for <strong>trust, loyalty, and genuine service</strong>. We believe in building lasting relationships with our clients by offering transparent pricing, reliable support, and the kind of attention to detail that transforms a trip into a life-changing experience.
    </p>
  </div>

  <div className="col-12 mb-4">
    <h2 style={{ fontWeight: 700, fontSize: 24 }}>Our Mission</h2>
    <p style={{ fontSize: 17, color: "#222", marginBottom: 0 , marginTop: 10 }}>
      Our mission at Holy Nepal Yatra is to provide <strong>authentic, affordable, and spiritually fulfilling travel experiences within Nepal</strong>. We are committed to connecting travelers with Nepal’s sacred temples, serene landscapes, and vibrant cultural heritage by offering <strong>personalized, hassle-free, and safe journeys</strong>. Whether it’s a sacred yatra or an adrenaline-fueled trek, we aim to inspire, serve, and support every traveler with honesty, care, and integrity.
    </p>
  </div>

  <div className="col-12 mb-4">
    <h2 style={{ fontWeight: 700, fontSize: 24 }}>Our Vision</h2>
    <p style={{ fontSize: 17, color: "#222", marginBottom: 0 , marginTop: 10 }}>
      To become Nepal’s most <strong>trusted and preferred travel companion</strong>, known for delivering genuine, soul-touching, and transformative experiences to every corner of the country. We envision a world where every traveler feels a deeper connection to the sacred land of Nepal through our thoughtful service, cultural immersion, and unwavering commitment to quality and care.
    </p>
  </div>
</div>

      {/* Bottom: Services and Why Choose Us, side by side, each as a card with 2-column grid */}
      <div className="row gy-4 gx-4">
        {/* Our Services */}
        <div className="col-md-12">
          <div
            style={{
              background: "#fff",
              borderRadius: 16,
              boxShadow: "0 2px 16px rgba(0,0,0,0.04)",
              padding: 32,
            }}
          >
            <h3
              style={{
                fontWeight: 700,
                fontSize: 22,
                marginBottom: 24,
              }}
            >
              Our Services
            </h3>
            <div className="row">
              {aboutServices.map((item, idx) => (
                <div
                  className="col-12 col-sm-6"
                  key={item.title}
                  style={{
                    marginBottom:
                      idx === aboutServices.length - 2 ||
                      idx === aboutServices.length - 1
                        ? 0
                        : 32,
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      alignItems: "flex-start",
                      marginBottom: 32,
                    }}
                  >
                    <span style={{ marginRight: 16 }}>
                      <span
                        style={{
                          display: "inline-flex",
                          alignItems: "center",
                          justifyContent: "center",
                          width: 56,
                          height: 56,
                          borderRadius: "50%",
                          background: "#fff",
                          boxShadow: "0 2px 8px rgba(0,0,0,0.07)",
                        }}
                      >
                        <i
                          className={item.icon}
                          style={{ fontSize: 28, color: "#006ce4" }}
                        ></i>
                      </span>
                    </span>
                    <div>
                      <span style={{ fontWeight: 600 }}>{item.title}</span>
                      <p style={{ margin: 0, color: "#444" }}>{item.detail}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        {/* Why Choose Us */}
        <div className="col-md-12">
          <div
            style={{
              background: "#fff",
              borderRadius: 16,
              boxShadow: "0 2px 16px rgba(0,0,0,0.04)",
              padding: 32,
            }}
          >
            <h3
              style={{
                fontWeight: 700,
                fontSize: 22,
                marginBottom: 24,
              }}
            >
              Why Choose Us?
            </h3>
            <div className="row">
              {aboutWhyChooseUs.map((item, idx) => (
                <div
                  className="col-12 col-sm-6"
                  key={item.title}
                  style={{
                    marginBottom:
                      idx === aboutWhyChooseUs.length - 2 ||
                      idx === aboutWhyChooseUs.length - 1
                        ? 0
                        : 32,
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      alignItems: "flex-start",
                      marginBottom: 32,
                    }}
                  >
                    <span style={{ marginRight: 16 }}>
                      <span
                        style={{
                          display: "inline-flex",
                          alignItems: "center",
                          justifyContent: "center",
                          width: 56,
                          height: 56,
                          borderRadius: "50%",
                          background: "#fff",
                          boxShadow: "0 2px 8px rgba(0,0,0,0.07)",
                        }}
                      >
                        <i
                          className={item.icon}
                          style={{ fontSize: 28, color: "#006ce4" }}
                        ></i>
                      </span>
                    </span>
                    <div>
                      <span style={{ fontWeight: 600 }}>{item.title}</span>
                      <p style={{ margin: 0, color: "#444" }}>{item.detail}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutArea;
