import React from "react";
import fox from "../assets/Fox.png";
import lonelyPlanet from "../assets/Lonely-Planet-logo.png";
import intuit from "../assets/intuit.png";
import carvana from "../assets/carvana.png";
import kiva from "../assets/Kiva.png";
import target from "../assets/Target-Logo-1968-present.png";
import devacurl from "../assets/DevaCurl.png";
const Logobar = () => {
  return (
    <div className="flex mt-28 max-w-6xl w-full justify-evenly items-center gap-7">
      <img src={fox} alt="" className="h-[60px] object-contain" />
      <img src={lonelyPlanet} alt="" className="h-[100px] object-contain" />
      <img src={intuit} alt="" className="h-[100px] object-contain" />
      <img src={carvana} alt="" className="h-[75px] object-contain" />
      <img src={kiva} alt="" className="h-[30px] object-contain" />
      <img src={target} alt="" className="h-[40px] object-contain" />
      <img src={devacurl} alt="" className="h-[120px] object-contain" />
    </div>
  );
};

export default Logobar;
