import React from "react";
import betterTomorrow from "../assets/better-tomorrow.png";
const BodySection = () => {
  return (
    <div className="flex max-w-6xl w-full justify-between mt-20 space-x-24">
      <div className="w-1/2">
        <img src={betterTomorrow} alt="better tomorrow" />
      </div>
      <div className="w-1/2 mr-10">
        <h3 className="text-3xl font-bold mb-8">
          Now is your moment to build a <br /> better tomorrow
        </h3>
        <p className="font-medium mb-3">
          We've seen what the future can be. Now its time to decide <br /> what
          it will be.
        </p>
        <button className="text-[#611f69] border-2 border-[#611f69] py-2 px-4 rounded-md font-bold">
          WATCH VIDEO
        </button>
      </div>
    </div>
  );
};

export default BodySection;
