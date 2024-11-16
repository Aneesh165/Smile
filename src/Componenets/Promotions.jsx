import React from "react";
import Promo from "../assets/Promo.png"

const Promotions = () => {
  return (
    <div className="w-[1179px] h-[452px] mx-auto mb-4">
      <div className="w-[626px] h-[142px] mx-auto text-center pt-4">
        <h1 className="text-[48px] text-[#011016] font-semibold">
          Our Insurance Partners
        </h1>
        <p className="text-[16px] text-[#9E9E9E] mt-7">
          Conveniently pay for your dental treatments with your insurance.{" "}
          <br />
          We accept major insurance providers.
        </p>
      </div>
      <div className="w-[100%] h-[245px] mt-16">
        <img src={Promo} alt="" />
      </div>
    </div>
  );
};

export default Promotions;
