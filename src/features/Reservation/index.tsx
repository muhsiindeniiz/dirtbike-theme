import Navbar from "../../components/Navbar";
import Sponsors from "../Home/layouts/Sponsors";
import RoadMap from "../Home/layouts/RoadMap";
import Footer from "../../components/Footer";

const ReservationPagePage = () => {
  return (
    <div>
      <div className="bg-[#1f1f1f] pb-5">
        <Navbar />
      </div>

      <div className="w-full max-w-7xl mx-auto px-4"></div>

      <Sponsors />
      <RoadMap />
      <Footer />
    </div>
  );
};

export default ReservationPagePage;
