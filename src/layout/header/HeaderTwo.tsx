import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import logoBlack from "../../../public/assets/images/logo/logo-black.svg";
import HeaderLogo from "../../../public/assets/images/logo/logo.png";
import { imageLoader } from "@/hooks/image-loader";
import useGlobalContext from "@/hooks/use-context";
import MenuTwo from "./components/MenuTwo";

const HeaderTwo = () => {
  const { toggleSideMenu, scrollDirection } = useGlobalContext();
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768); // Check if screen width is <= 768px
    };

    // Add event listener for resize
    window.addEventListener("resize", handleResize);
    handleResize(); // Run initially

    // Cleanup event listener on component unmount
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return (
    <>
      <header>
        <div
          id="header-sticky"
          className={`header-area header-style-four ${
            scrollDirection === "down" ? "bd-sticky" : ""
          }`}
        >
          <div className="container">
            <div className="mega-menu-wrapper p-relative">
              <div className="header-main">
                <div className="header-left">
                  <div className="header-logo">
                    <Link href="/">
                      <Image
                        src={HeaderLogo}
                        loader={imageLoader}
                        style={{ width: "100%", height: "60px", scale: isMobile ? 1.5 : 2.1, marginLeft: isMobile ? '24px': '0px' }}
                        alt="logo not found"
                      />
                    </Link>
                  </div>
                  {/* <div className="header-search mb-0">
                    <form action="#">
                      <input type="text" placeholder="Search Destinations" />
                      <button type="submit">
                        <i className="fa-solid fa-magnifying-glass"></i>
                      </button>
                    </form>
                  </div> */}
                </div>
                <div className="header-right">
                  <div className="header-action d-flex align-items-center">
                    <div className="mean-menu-wrapper d-none d-xl-block">
                      <div className="main-menu">
                        <nav
                          className="main-menu main-menu-three header-two"
                          id="mobile-menu"
                        >
                          <MenuTwo />
                        </nav>
                      </div>
                    </div>
                    <div
                      onClick={toggleSideMenu}
                      className="header-hamburger ml-20"
                    >
                      <div className="sidebar-toggle">
                        <Link className="bar-icon style-two" href="#">
                          <span></span>
                          <span></span>
                          <span></span>
                        </Link>
                      </div>
                    </div>

                    <div className="header-hamburger ml-20 d-none">
                      <button
                        type="button"
                        className="hamburger-btn offcanvas-open-btn"
                      >
                        <span>01</span>
                        <span>01</span>
                        <span>01</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default HeaderTwo;
