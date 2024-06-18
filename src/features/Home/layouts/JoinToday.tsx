import React from "react";

const JoinToday = () => {
  return (
    <div
      className="w-full bg-cover bg-right py-28 relative before:absolute before:w-full before:bg-black before:bg-opacity-70 before:h-full before:top-0 before:z-0 mt-20"
      style={{
        backgroundImage:
          "url(https://motocross.progressionstudios.com/wp-content/uploads/2017/11/bigstock-Motocross-Racing-109373804-1.jpg)",
      }}
    >
      <div className="w-full relative z-10 mx-auto md:px-10 lg:max-w-[1440px] max-w-[calc(100%_-_60px)] lg:text-left text-center">
        <div className="w-full flex justify-between items-center flex-col gap-10 lg:flex-row">
          <div className="flex flex-col gap-4">
            <h1 className="text-5xl font-bold text-[#eea72b]">
              MOTOCROSS RUNS FROM
            </h1>
            <h4 className="text-white font-bold">
              1ST JANUARY 2017 - 20TH JULY 2024
            </h4>
          </div>
          <button className="uppercase font-mono font-bold px-8 mx-auto lg:mx-0 py-3  text-white hover:text-black border-2 border-white w-max hover:bg-white transition-all ">
            Join Today
          </button>
        </div>
      </div>
    </div>
  );
};

export default JoinToday;
