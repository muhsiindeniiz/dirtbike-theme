import React from "react";
import Navbar from "../../components/Navbar";
import RoadMap from "../Home/layouts/RoadMap";
import Footer from "../../components/Footer";
import Sponsors from "../Home/layouts/Sponsors";
import { FiCalendar, FiClock, FiMapPin } from "react-icons/fi";
import { Link } from "react-router-dom";
import {
  FaLocationDot,
  FaLocationPin,
  FaMoneyBill,
  FaRegClock,
} from "react-icons/fa6";

const RacesPage = () => {
  const data = [
    {
      title: "OTHG Practice June 8th, OTHG Race June 9th 2024",
      url: "/reservation",
      location: "NY, USA",
      time: "9AM PCT",
      price: 45,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      title: "OTHG Practice July 27th, OTHG Race July 28th 2024",
      url: "/reservation",
      location: "NY, USA",
      time: "9AM PCT",
      price: 45,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      title: "OTHG Practice Nov 16th, OTHG Race Nov 17th 2024",
      url: "/reservation",
      location: "NY, USA",
      time: "9AM PCT",
      price: 45,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
  ];

  return (
    <div className="bg-[#F9F9FA]">
      <div className="bg-[#1f1f1f] pb-5">
        <Navbar />
      </div>

      <div className="w-full max-w-7xl mx-auto">
        <h3 className="font-bold text-5xl my-16 text-center">Races</h3>
        <div className="container">
          <div className="mb-10 md:mb-12 lg:mb-16 xl:mb-20">
            <h2 className="text-2.5xl font-bold tracking-tighter text-gray-900 before:text-accent before:content-['.'] dark: sm:text-3.5xl md:text-4xl lg:leading-none">
              Next Events
            </h2>
          </div>
          <div className="divide-y flex flex-col divide-gray-500/20">
            {data &&
              data.map((event) => {
                return (
                  <div className="grid grid-cols-12 gap-x-4 md:gap-x-6 lg:gap-x-7.5 py-11 first:pt-0 last:pb-0">
                    <div className="col-span-2 md:col-span-1 lg:col-span-1">
                      <time
                        className="flex flex-col text-center text-xs font-bold md:text-base  bg-[#1f1f1f] text-white"
                        dateTime="2022-08-06 21:30"
                      >
                        <span className="text-2xl lg:text-[32px] md:leading-none h-11 lg:h-[62px] flex items-center justify-center">
                          08
                        </span>
                        <span className=" leading-[28px] bg-[#1f1f1f] text-white">
                          Apr
                        </span>
                      </time>
                    </div>
                    <div className="col-span-10 md:col-span-6 lg:col-span-6">
                      <h4 className="text-xl lg:text-2xl font-bold text-gray-900 dark: mb-2 lg:mb-2.5 ">
                        <Link
                          to={event.url}
                          className="text-gray-900 dark: transition-colors hover:text-accent dark:hover:text-accent hover:text-teal-600"
                        >
                          {event.title}
                        </Link>
                      </h4>
                      <div className="lg:leading-[26px]">
                        {event.description}
                      </div>
                    </div>
                    <div className="col-span-full md:col-span-5 md:col-start-8 lg:col-start-8 lg:col-span-5">
                      <ul className="flex flex-wrap gap-y-5 pt-7 md:pt-3 lg:pt-3">
                        <li className="flex flex-1 flex-col items-center gap-y-3.5 text-center">
                          <div>
                            <h5 className="font-bold tracking-tight text-gray-900 dark: lg:text-lg lg:leading-tight">
                              {event.location}
                            </h5>
                            <span className="text-xs lg:text-sm"></span>
                          </div>
                          <div className="lg:pt-1">
                            <FaLocationDot />
                          </div>
                        </li>
                        <li className="flex flex-1 flex-col items-center gap-y-3.5 text-center">
                          <div>
                            <h5 className="font-bold tracking-tight text-gray-900 dark: lg:text-lg lg:leading-tight">
                              {event.time}
                            </h5>
                            <span className="text-xs lg:text-sm"></span>
                          </div>
                          <div className="lg:pt-1">
                            <svg className="h-5 w-5 fill-accent">
                              <FaRegClock />
                            </svg>
                          </div>
                        </li>
                        <li className="flex flex-1 flex-col items-center gap-y-3.5 text-center">
                          <div>
                            <h5 className="font-bold tracking-tight text-gray-900 dark: lg:text-lg lg:leading-tight">
                              ${event.price}
                            </h5>
                            <span className="text-xs lg:text-sm"></span>
                          </div>
                          <div className="lg:pt-1">
                            <svg className="h-5 w-5 fill-accent">
                              <FaMoneyBill />
                            </svg>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
      </div>

      <Sponsors />

      <RoadMap />
      <Footer />
    </div>
  );
};

export default RacesPage;
