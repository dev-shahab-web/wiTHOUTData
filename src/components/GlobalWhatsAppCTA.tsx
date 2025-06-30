'use client';

import React, { useEffect, useState } from "react";

const whatsappNumber = "918429962424";
const whatsappMessage = "Hello Holy Nepal Yatra! I want to book a tour with you. Please let me know the available options.";
const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

const isMobile = () => {
  if (typeof window === "undefined") return false;
  return window.innerWidth <= 768;
};

// const WhatsAppIcon = () => (
//   <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
//     <circle cx="16" cy="16" r="16" fill="#25D366"/>
//     <path d="M23.472 19.339c-.355-.177-2.096-1.034-2.42-1.153-.324-.118-.56-.177-.797.178-.237.355-.914 1.153-1.12 1.39-.207.237-.412.266-.767.089-.355-.178-1.5-.553-2.86-1.763-1.057-.944-1.77-2.108-1.98-2.463-.207-.355-.022-.546.155-.723.159-.158.355-.412.533-.62.178-.207.237-.355.355-.59.118-.237.06-.443-.03-.62-.089-.178-.797-1.92-1.09-2.63-.287-.69-.58-.595-.797-.606-.207-.009-.443-.011-.68-.011-.237 0-.62.089-.944.443-.324.355-1.23 1.202-1.23 2.927 0 1.724 1.26 3.389 1.435 3.624.177.237 2.48 3.79 6.01 5.163.841.289 1.496.462 2.007.591.843.214 1.61.184 2.217.112.676-.08 2.096-.857 2.393-1.687.296-.83.296-1.541.207-1.687-.089-.148-.324-.237-.68-.414z" fill="#fff"/>
//   </svg>
// );

const pulseStyle: React.CSSProperties = {
  position: "absolute",
  top: "50%",
  left: "50%",
  width: 70,
  height: 70,
  transform: "translate(-50%, -50%)",
  borderRadius: "50%",
  background: "rgba(37, 211, 102, 0.25)",
  zIndex: 0,
  animation: "whatsapp-pulse 1.5s infinite cubic-bezier(.66,0,0,1)",
};

const styleTag = (
  <style>{`
    @keyframes whatsapp-pulse {
      0% {
        transform: translate(-50%, -50%) scale(1);
        opacity: 0.7;
      }
      70% {
        transform: translate(-50%, -50%) scale(1.4);
        opacity: 0.15;
      }
      100% {
        transform: translate(-50%, -50%) scale(1.7);
        opacity: 0;
      }
    }
  `}</style>
);

const GlobalWhatsAppCTA = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const checkMobile = () => setShow(isMobile());
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  if (!show) return null;

  return (
    <>
      {styleTag}
      <a
        href={whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        style={{
          position: "fixed",
          right: 24,
          bottom: 24,
          zIndex: 9999,
          background: "#25D366",
          color: "#fff",
          borderRadius: "50%",
          width: 60,
          height: 60,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          boxShadow: "0 4px 16px rgba(0,0,0,0.15)",
          fontSize: 32,
          textDecoration: "none",
          transition: "box-shadow 0.2s"
        }}
        aria-label="Chat on WhatsApp"
        title="Chat on WhatsApp"
      >
        <span style={{ position: "relative", display: "inline-block" }}>
          <span style={pulseStyle}></span>
          <i className="fab fa-whatsapp"></i>
        </span>
      </a>
    </>
  );
};

export default GlobalWhatsAppCTA;
