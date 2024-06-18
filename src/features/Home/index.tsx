import React from "react";
import WelcomeSection from "./layouts/WelcomeSection";
import VisitCard from "./layouts/VisitCard";
import JoinToday from "./layouts/JoinToday";
import TrackGallery from "./layouts/TrackGallery";
import RoadMap from "./layouts/RoadMap";
import Footer from "../../components/Footer";
import Sponsors from "./layouts/Sponsors";

const HomePage = () => {
  return (
    <div>
      <WelcomeSection />
      <Sponsors />
      <VisitCard />
      <JoinToday />
      <TrackGallery />
      <RoadMap />
      <Footer />
    </div>
  );
};

export default HomePage;
