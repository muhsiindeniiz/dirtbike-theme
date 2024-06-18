import React from "react";
import Navbar from "../../components/Navbar";
import Sponsors from "../Home/layouts/Sponsors";
import RoadMap from "../Home/layouts/RoadMap";
import Footer from "../../components/Footer";

const ReservationPagePage = () => {
  const classOptions = [
    {
      id: "25ab",
      label: "+25 A/B (Exp/Int) - $40",
      description: "must be 25 years of age or older, Pro/Int skill level",
    },
    {
      id: "25cd",
      label: "+25 C/D (Nov/Beg) - $40",
      description: "must be 25 years of age or older Nov/Beg skill level",
    },
    {
      id: "50pw",
      label: "50 PW - $40",
      description: "this class is for beginners, unable to race age group",
    },
    {
      id: "50cc46",
      label: '50cc (4-6) (10" wheel) - $40',
      description:
        "must be 4-6 years old. max wheel size 10 inch. no beginners",
    },
    {
      id: "50cc78",
      label: '50cc (7-8) (12" wheel) - $40',
      description: "age 7-8 years of age. maximum wheel 12 inch. no beginners",
    },
  ];

  return (
    <div>
      <div className="bg-[#1f1f1f] pb-5">
        <Navbar />
      </div>

      <div className="max-w-7xl mt-10 mx-auto bg-white shadow-md rounded-lg overflow-hidden mb-4">
        <div className="px-6 py-4 text-center flex flex-col gap-1">
          <div className="font-bold text-xl mb-2">
            2024 Summer Sundayz Rnd 4 - Estreet Mx Park
          </div>
          <p className="text-red-500 text-base">
            <span className="font-bold">Event Date:</span> 6/30/2024
          </p>
          <p className="text-gray-700 text-base">
            <span className="font-bold">Online Reg Closes:</span> 6/28/2024,
            1:00:00 PM
          </p>
          <p className="bg-red-300 text-red-800  text-center py-2 text-base">
            <span className="font-bold">Refund Policy:</span> Contact Estreet Mx
            Park - Refunds Allowed only until 2 days after Race
          </p>
        </div>
      </div>

      <div className="w-full max-w-7xl mx-auto px-4">
        <label className="w-full p-2 text-white rounded-md my-10 bg-teal-500 grid grid-cols-4 gap-10 font-medium">
          Item/Class Selection
        </label>

        <div className="grid grid-cols-2 gap-y-10">
          {classOptions &&
            classOptions.map((c) => (
              <div className="flex flex-col gap-2" key={c.id}>
                <div className="flex gap-4 items-center">
                  <input
                    id="default-checkbox"
                    type="checkbox"
                    value=""
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  />
                  <label>{c.label}</label>
                </div>
                <p className="text-teal-600">{c.description}</p>
              </div>
            ))}
        </div>

        <div className="my-10 bg-teal-500 p-2 text-white rounded-md font-medium">
          Racer Info
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="mb-4">
            <label
              htmlFor="firstName"
              className="block text-sm font-medium text-teal-500"
            >
              First Name<span className="text-red-600">*</span>
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="firstName"
              type="text"
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="lastName"
              className="block text-sm font-medium text-teal-500"
            >
              Last Name<span className="text-red-600">*</span>
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="lastName"
              type="text"
              required
            />
          </div>
        </div>

        <div className="mb-4">
          <label
            htmlFor="address"
            className="block text-sm font-medium text-teal-500"
          >
            Address<span className="text-red-600">*</span>
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="address"
            type="text"
            required
          />
        </div>

        <div className="grid grid-cols-3 gap-4 mb-4">
          <div>
            <label
              htmlFor="city"
              className="block text-sm font-medium text-teal-500"
            >
              City<span className="text-red-600">*</span>
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="city"
              type="text"
              required
            />
          </div>
          <div>
            <label
              htmlFor="state"
              className="block text-sm font-medium text-teal-500"
            >
              State/Prov<span className="text-red-600">*</span>
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="state"
              type="text"
              required
            />
          </div>
          <div>
            <label
              htmlFor="zip"
              className="block text-sm font-medium text-teal-500"
            >
              Zip/Postal<span className="text-red-600">*</span>
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="zip"
              type="text"
              required
            />
          </div>
        </div>

        <div className="mb-4">
          <label
            htmlFor="country"
            className="block text-sm font-medium text-teal-500"
          >
            Country<span className="text-red-600">*</span>
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="country"
            type="text"
            required
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="birthdate"
            className="block text-sm font-medium text-teal-500"
          >
            Birthdate<span className="text-red-600">*</span>
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="birthdate"
            type="text"
            placeholder="mm/dd/yyyy"
            required
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="email"
            className="block text-sm font-medium text-teal-500"
          >
            E-Mail Address<span className="text-red-600">*</span>
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="email"
            type="email"
            required
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="mobile"
            className="block text-sm font-medium text-teal-500"
          >
            Mobile Phone Number<span className="text-red-600">*</span>
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="mobile"
            type="tel"
            pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
            placeholder="___-___-____"
            required
          />
          <p className="text-xs text-gray-600 mt-1">
            By providing your mobile number, you consent that you may receive
            important SMS messages about the event, your number will not be
            shared with 3rd parties for marketing purposes
          </p>
        </div>

        <div className="mb-4">
          <label
            htmlFor="transponder"
            className="block text-sm font-medium text-teal-500"
          >
            Transponder ID
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="transponder"
            type="text"
          />
          <p className="text-xs text-gray-600 mt-1">
            Optional - fill in only if you own a transponder
          </p>
        </div>

        <div className="mb-4">
          <label
            htmlFor="emergencyName"
            className="block text-sm font-medium text-teal-500"
          >
            Emergency Contact Name<span className="text-red-600">*</span>
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="emergencyName"
            type="text"
            required
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="emergencyPhone"
            className="block text-sm font-medium text-teal-500"
          >
            Emergency Contact Phone<span className="text-red-600">*</span>
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="emergencyPhone"
            type="tel"
            pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
            placeholder="___-___-____"
            required
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="sponsors"
            className="block text-sm font-medium text-teal-500"
          >
            Sponsors
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="sponsors"
            type="text"
          />
        </div>

        <div className="flex items-center justify-between">
          <button
            type="submit"
            className="bg-teal-500 hover:bg-teal-600 text-white font-medium py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Submit
          </button>
        </div>
      </div>

      <Sponsors />
      <RoadMap />
      <Footer />
    </div>
  );
};

export default ReservationPagePage;
