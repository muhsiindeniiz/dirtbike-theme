import React from "react";

const VisitCard = () => {
  return (
    <div className="w-full mx-auto flex-nowrap max-w-[calc(100%_-_60px)] md:max-w-7xl flex-col md:flex-row flex my-20 gap-5 md:gap-10">
      <div className="w-full md:w-[40%]">
        <img
          className="w-full md:max-w-[400px]"
          src="https://motocross.progressionstudios.com/wp-content/uploads/elementor/thumbs/bigstock-Gdansk-Poland-September-159088721-nhhd9f5ko2ucq7v4dub2vbppx7u1plmk6owcmv8s5k.jpg"
        />
      </div>
      <div className="w-full md:w-2/3">
        <h1 className="font-semibold text-4xl md:text-7xl">
          Our aim is to provide <span className="underline">great racing!</span>
        </h1>

        <p className="mt-10 text-lg text-gray-500">
          We and the rest of the team love to ride off road, to most of us it is
          more than just a hobby and has become a passion. We appreciate that
          there are many different types, ages and levels of riders and try to
          make all of our events as accessible and enjoyable for the novice as
          they are for the expert level rider.
        </p>

        <button className="mt-10 uppercase font-mono font-bold px-8 mx-auto md:mx-0 py-3 bg-[#EEA72B] w-max text-white hover:bg-opacity-70 transition-all">
          Register
        </button>
      </div>
    </div>
  );
};

export default VisitCard;
