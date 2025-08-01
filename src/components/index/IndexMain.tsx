import React from "react";
import DemoPresentation from "./DemoPresentation";
import DemoBannerArea from "./DemoBannerArea";
import ShowCaseArea from "./ShowCaseArea";
import TopFeatureArea from "./TopFeatureArea";
import TopElement from "./TopElement";
import ReviewArea from "./ReviewArea";
import FaqAreaIndex from "./FaqAreaIndex";
import OffCanvasArea from "./OffCanvasArea";
import BannerTwo from "../home-two/BannerTwo";
import ChooseArea from "../home-two/ChooseArea";
import DestinationArea from "../home-two/DestinationArea";
import CounterAreaFive from "../home-five/CounterAreaFive";
import TestimonialAreaFour from "../home-four/TestimonialAreaFour";
import TestimonialAreaTwo from "../home-two/TestimonialAreaTwo";
import FooterAreaFive from "@/layout/footer/FooterAreaFive";
import TrendsArea from "../home-two/TrendsArea";
import TourAreaTwo from "../home-two/TourAreaTwo";
import ContactFormArea from "../contact/ContactFormArea";
import ContactMapArea from "../contact/ContactMapArea";
import BackgroundMusic from "../common/BackgroundMusic";

const IndexMain = () => {
  return (
    <>
      {/* Background Music Component */}
      <BackgroundMusic />

      {/* Main Content */}
      {/* <OffCanvasArea /> */}
      <BannerTwo />
      <ChooseArea />
      <TourAreaTwo />
      {/* <TrendsArea /> */}
      {/* <DestinationArea /> */}
      <CounterAreaFive />
      <TestimonialAreaTwo />
      <ContactFormArea />
      <ContactMapArea />
      <br />
      {/* <FooterAreaFive /> */}
      {/* <DemoBannerArea />
      <TopFeatureArea />
      <DemoPresentation />
      <ShowCaseArea />
      <TopElement />
      <ReviewArea />
      <FaqAreaIndex /> */}
    </>
  );
};

export default IndexMain;
