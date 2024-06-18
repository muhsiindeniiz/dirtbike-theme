import React from "react";
import {
  AiFillMail,
  AiFillTwitterSquare,
  AiFillFacebook,
  AiFillInstagram,
} from "react-icons/ai";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import RoadMap from "../Home/layouts/RoadMap";

const ContactPage = () => {
  return (
    <div>
      <div className="bg-[#1f1f1f] pb-5">
        <Navbar />
      </div>
      <div className="mt-6">
        <div className="grid sm:grid-cols-2 items-start gap-14 p-8 mx-auto max-w-4xl bg-white font-sans">
          <div>
            <h1 className="text-gray-800 text-3xl font-extrabold">Contact</h1>
            <p className="text-sm text-gray-500 mt-4">
              Feel free to contact us about your experiences
            </p>

            <div className="mt-12">
              <h2 className="text-gray-800 text-base font-bold">Email</h2>
              <ul className="mt-4">
                <li className="flex items-center">
                  <div className="bg-[#e6e6e6cf] h-10 w-10 rounded-full flex items-center justify-center shrink-0">
                    <AiFillMail size={20} color="#007bff" />
                  </div>
                  <a
                    href="mailto:info@example.com"
                    className="text-[#007bff] text-sm ml-4"
                  >
                    <small className="block">Mail</small>
                    <strong>info@example.com</strong>
                  </a>
                </li>
              </ul>
            </div>

            <div className="mt-12">
              <h2 className="text-gray-800 text-base font-bold">Socials</h2>

              <ul className="flex mt-4 space-x-4">
                <li className="bg-[#e6e6e6cf] h-10 w-10 rounded-full flex items-center justify-center shrink-0">
                  <a href="https://twitter.com">
                    <AiFillTwitterSquare size={20} color="#007bff" />
                  </a>
                </li>
                <li className="bg-[#e6e6e6cf] h-10 w-10 rounded-full flex items-center justify-center shrink-0">
                  <a href="https://facebook.com">
                    <AiFillFacebook size={20} color="#007bff" />
                  </a>
                </li>
                <li className="bg-[#e6e6e6cf] h-10 w-10 rounded-full flex items-center justify-center shrink-0">
                  <a href="https://instagram.com">
                    <AiFillInstagram size={20} color="#007bff" />
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <form className="ml-auto space-y-4">
            <input
              type="text"
              placeholder="Name"
              className="w-full text-gray-800 rounded-md py-2.5 px-4 border text-sm outline-blue-500"
            />
            <input
              type="email"
              placeholder="Email"
              className="w-full text-gray-800 rounded-md py-2.5 px-4 border text-sm outline-blue-500"
            />
            <input
              type="text"
              placeholder="Subject"
              className="w-full text-gray-800 rounded-md py-2.5 px-4 border text-sm outline-blue-500"
            />
            <textarea
              placeholder="Message"
              rows={6}
              className="w-full text-gray-800 rounded-md px-4 border text-sm pt-2.5 outline-blue-500"
            ></textarea>
            <button
              type="button"
              className="text-white bg-blue-500 hover:bg-blue-600 rounded-md text-sm px-4 py-3 w-full mt-6"
            >
              Send
            </button>
          </form>
        </div>
      </div>
      <RoadMap />

      <Footer />
    </div>
  );
};

export default ContactPage;
