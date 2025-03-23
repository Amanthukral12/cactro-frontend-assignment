import React from "react";
import image from "../assets/slack-hero.png";
const HeroSection = () => {
  return (
    <div className="flex max-w-6xl justify-between w-full mt-8 space-x-20">
      <div className="w-1/2">
        <h3 className="text-6xl font-bold mb-8">
          Slack is where the future works
        </h3>
        <p className="font-medium text-lg mb-8">
          Transform the way you work with one place for <br /> everyone and
          everything you need to get stuff done.
        </p>
        <div className="flex">
          <button className="bg-[#611f69] text-white py-5 px-10 rounded-md font-medium text-sm mr-2 cursor-pointer">
            TRY FOR FREE
          </button>
          <button className="flex rounded-md bg-[#1976D2] font-medium text-white items-center pr-10 text-sm cursor-pointer">
            <div className="bg-white py-3 px-4 rounded-sm m-0.5 mr-2">
              <svg viewBox="0 0 48 48" className="h-5 w-5 sm:h-6 sm:w-6 mr-1">
                <path
                  fill="#FFC107"
                  d="M43.611 20.083H42V20H24v8h11.303c-1.649 4.657-6.08 8-11.303 8-6.627 0-12-5.373-12-12s5.373-12 12-12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4 12.955 4 4 12.955 4 24s8.955 20 20 20 20-8.955 20-20c0-1.341-.138-2.65-.389-3.917z"
                />
                <path
                  fill="#FF3D00"
                  d="m6.306 14.691 6.571 4.819C14.655 15.108 18.961 12 24 12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4 16.318 4 9.656 8.337 6.306 14.691z"
                />
                <path
                  fill="#4CAF50"
                  d="M24 44c5.166 0 9.86-1.977 13.409-5.192l-6.19-5.238A11.91 11.91 0 0 1 24 36c-5.202 0-9.619-3.317-11.283-7.946l-6.522 5.025C9.505 39.556 16.227 44 24 44z"
                />
                <path
                  fill="#1976D2"
                  d="M43.611 20.083H42V20H24v8h11.303a12.04 12.04 0 0 1-4.087 5.571l.003-.002 6.19 5.238C36.971 39.205 44 34 44 24c0-1.341-.138-2.65-.389-3.917z"
                />
              </svg>
            </div>
            SIGN UP WITH GOOGLE
          </button>
        </div>
      </div>
      <div className="w-1/2">
        <img src={image} alt="slack image" />
      </div>
    </div>
  );
};

export default HeroSection;
