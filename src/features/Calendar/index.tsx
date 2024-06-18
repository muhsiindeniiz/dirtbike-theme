import React from "react";
import Calendar from "../../components/Calendar";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

const CalendarPage = () => {
  return (
    <div>
      <div className="bg-[#1f1f1f] pb-5">
        <Navbar />
      </div>
      <div className="mx-auto w-full max-w-7xl mb-20">
      <h3 className="font-bold text-5xl my-16 text-center">Calendar</h3>
        <Calendar />
      </div>
      <Footer />
    </div>
  );
};

export default CalendarPage;
