import React from "react";
import Doctor1 from "../assets/doctor1.jpeg";
import Doctor2 from "../assets/doctor2.jpeg";
import Doctor3 from "../assets/doctor3.jpeg";
import Doctor4 from "../assets/doctor4.jpeg";

const Aboutus = () => {
  return (
    <div className="w-[100%] h-[840px] mt-20 relative">
      <div className="h-[435px] bg-[#011016] ">
        <h1 className="text-[48px] font-semibold text-center pt-12 text-white">
          Meet Our Team
        </h1>
        <p className="text-[16px] text-[#9E9E9E] text-center pt-3 relative">
          Lorem Ipsum available, but the majority have suffered alteration in
          some form, <br />
          by injected humour, or randomised words which don't look even
        </p>
      </div>
      <div className=" absolute top-72 left-20 flex">
        <div className="h-[400px] w-[310px]  flex flex-col bg-white rounded-lg">
          <div className="w-[310px] h-[354px] rounded-lg overflow-hidden mx-auto">
            <img
              src={Doctor1}
              alt="Doctor"
              className=" h-full object-cover object-left"
            />
          </div>
          <div className="text-center mt-4">
            <h2 className="text-[26px] font-bold text-[#011016]">
              Dr. Jhon Paul
            </h2>
            <p className="text-[18px] text-[#9E9E9E]">General Dentist</p>
          </div>
        </div>
        <div className="h-[400px] w-[310px] ml-10 flex flex-col bg-white rounded-lg">
          <div className="w-[310px] h-[354px] rounded-lg overflow-hidden mx-auto">
            <img
              src={Doctor2}
              alt="Doctor"
              className=" h-full object-cover object-left"
            />
          </div>
          <div className="text-center mt-4">
            <h2 className="text-[26px] font-bold text-[#011016]">
              Dr. Khaled Abul
            </h2>
            <p className="text-[18px] text-[#9E9E9E]">Children's Dentist</p>
          </div>
        </div>
        <div className="h-[400px] w-[310px] ml-10 flex flex-col bg-white rounded-lg">
          <div className="w-[310px] h-[354px] rounded-lg overflow-hidden mx-auto">
            <img
              src={Doctor3}
              alt="Doctor"
              className=" h-full object-cover object-right"
            />
          </div>
          <div className="text-center mt-4">
            <h2 className="text-[26px] font-bold text-[#011016]">
              Dr. Marwan Serhal
            </h2>
            <p className="text-[18px] text-[#9E9E9E]">Children's Dentist</p>
          </div>
        </div>
        <div className="h-[400px] w-[310px] ml-10 flex flex-col bg-white rounded-lg">
          <div className="w-[310px] h-[354px] rounded-lg overflow-hidden mx-auto">
            <img
              src={Doctor4}
              alt="Doctor"
              className=" h-full object-cover object-right"
            />
          </div>
          <div className="text-center mt-4">
            <h2 className="text-[26px] font-bold text-[#011016]">
              Dr. Chinchu Mathew
            </h2>
            <p className="text-[18px] text-[#9E9E9E]">Children's Dentist</p>
          </div>
        </div>
      </div>
      <div className="mt-[290px] h-[50px] mx-auto rounded-md py-[14px] px-[24px] bg-[#F58220] w-[169px]">
        <button className="text-[white] text-[18px] ">View All Team</button>
      </div>
    </div>
  );
};

export default Aboutus;
