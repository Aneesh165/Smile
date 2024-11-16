import React from "react";
import smile1 from "../assets/smile1.jpeg";
import smile2 from "../assets/smile2.jpeg";
import smile3 from "../assets/smile3.jpeg";
import Line from "../assets/HR.png";

const Services = () => {
  return (
    <div className="mb-10">
      <div className="flex gap-56 ml-16">
        <h1 className="text-[48px] font-bold text-[#011016] leading-tight">
          Exclusive <br />
          Monthly Dental Offers
        </h1>

        <p className="text-[16px] text-[#9E9E9E] font-normal my-auto">
          Unlock your smile’s potential with our exclusive <br />
          dental offers for this month
        </p>
      </div>
      <div className="flex justify-evenly">
        <div className="w-[413px] h-[659px] rounded-md  shadow-[0px_4px_6px_rgba(0,0,0,0.1),0px_1px_15px_4px_rgba(0,0,0,0.1)] mt-8 ml-4 pt-2">
          <div className="w-[395px]  overflow-hidden mx-auto rounded-md ">
            <img src={smile1} alt="" />
          </div>
          <p className="text-[20px] font-semibold text-center my-2">
            Cleaning Polishing, Teeth Whitening <br />
            and Comprehensive Consultation
          </p>
          <h1 className="text-[#F58220] text-[42px] font-semibold text-center mb-5">
            599 AED
          </h1>
          <div className="w-[390px] mx-auto border-y border-[#E8E8E8] text-center py-3">
            <p className="text-[18px] text-[#9E9E9E] font-normal my-1">
              Flash Tooth Whitening System for 1 Hour
            </p>
          </div>
          <div className="w-[390px] mx-auto  text-center py-3">
            <p className="text-[18px] text-[#9E9E9E] font-normal ">
              Deep Cleaning and Polishing
            </p>
          </div>
          <div className="w-[390px] mx-auto border-y border-[#E8E8E8] text-center py-3">
            <p className="text-[18px] text-[#9E9E9E] font-normal my-1">
              Full Mouth Treatment Plan Included
            </p>
          </div>
          <button className="w-[298px] bg-[#231F20] text-white text-[22px] font-medium rounded-md ml-14 mt-16 py-3 px-5">
            MAKE AN APPOINTMENT
          </button>
        </div>
        <div className="w-[413px] h-[659px] rounded-md  shadow-[0px_4px_6px_rgba(0,0,0,0.1),0px_1px_15px_4px_rgba(0,0,0,0.1)] mt-8 ml-4 pt-2">
          <div className="w-[395px] h-[183px] overflow-hidden mx-auto rounded-md ">
            <img src={smile2} alt="" />
          </div>
          <p className="text-[20px] font-semibold text-center my-2">
            Orthodontic Braces{" "}
          </p>
          <h1 className="text-[#F58220] text-[42px] font-semibold text-center mb-5">
            2499 AED
          </h1>
          <div className="w-[390px] mx-auto border-y border-[#E8E8E8] text-center py-3">
            <p className="text-[18px] text-[#9E9E9E] font-normal my-1">
              American Association of Orthodontist Member
            </p>
          </div>
          <div className="w-[390px] mx-auto  text-center py-3">
            <p className="text-[18px] text-[#9E9E9E] font-normal ">
              Align Your Complete Teeth in 6-12 Months
            </p>
          </div>
          <div className="w-[390px] mx-auto border-y border-[#E8E8E8] text-center py-3">
            <p className="text-[18px] text-[#9E9E9E] font-normal my-1">
              Complimentary Teeth Cleaning During <br />
              Orthodontic Treatment
            </p>
          </div>
          <button className="w-[298px] bg-[#231F20] text-white text-[22px] font-medium rounded-md ml-14 mt-16 py-3 px-5">
            MAKE AN APPOINTMENT
          </button>
        </div>
        <div className="w-[413px] h-[659px] rounded-md  shadow-[0px_4px_6px_rgba(0,0,0,0.1),0px_1px_15px_4px_rgba(0,0,0,0.1)] mt-8 ml-4 pt-2">
          <div className="w-[395px] h-[183px] overflow-hidden mx-auto rounded-md ">
            <img src={smile3} alt="" />
          </div>
          <p className="text-[20px] font-semibold text-center my-2">
            Premium Quality Hollywood <br />
            Smile 20 Teeth
          </p>
          <h1 className="text-[#F58220] text-[42px] font-semibold text-center mb-3">
            14000 AED
          </h1>
          <div className="w-[390px] mx-auto border-y border-[#E8E8E8] text-center py-3">
            <p className="text-[18px] text-[#9E9E9E] font-normal my-1">
              German Quality Super Thin Veneers
            </p>
          </div>
          <div className="w-[390px] mx-auto  text-center py-3">
            <p className="text-[18px] text-[#9E9E9E] font-normal ">
              Painless and Delivered in 5 Days in 2 Sessions
            </p>
          </div>
          <div className="w-[390px] mx-auto border-y border-[#E8E8E8] text-center py-3">
            <p className="text-[18px] text-[#9E9E9E] font-normal my-1">
              German Trained Cosmetic Dentist Who <br />
              Delivered More than 2000 Smiles
            </p>
          </div>
          <button className="w-[298px] bg-[#231F20] text-white text-[22px] font-medium rounded-md ml-14 mt-10 py-3 px-5">
            MAKE AN APPOINTMENT
          </button>
        </div>
      </div>
      <div className="mt-28 mb-20 w-[100%]">
        <img src={Line} className="w-full" alt="" />
      </div>
    </div>
  );
};

export default Services;
