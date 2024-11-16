import React from "react";
import Main from "../assets/gallery1.jpeg";
import person1 from "../assets/gallery2.png";
import person2 from "../assets/gallery3.png";

const Gallery = () => {
  return (
    <div className="w-[100%] h-[793px] bg-[#f58220] pt-24 mb-20">
      <div className="w-[1390px] h-[600px] flex mx-auto relative">
        <div className="w-[526px] h-[442px] rounded-md overflow-hidden ">
          <img src={Main} className="w-full h-full object-cover" alt="" />
        </div>
        <h1 className="text-[48px] font-semibold text-white mt-9 ml-16">
          500+ Happy clients said <br />
          to us they are satisfied
        </h1>
        <div className="flex justify-between w-[930px] h-[298px] absolute bottom-14 left-[368px]">
          <div className="bg-white w-[456px] h-[296px] rounded-3xl">
            <div className="mt-5 ml-5">
              <svg
                width="52"
                height="34"
                viewBox="0 0 52 34"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M17.6659 33.9998H0.000183105L14.9591 -0.000167847H26.3563L17.6659 33.9998ZM43.3098 33.9998H25.644L40.6029 -0.000167847H52.0002L43.3098 33.9998Z"
                  fill="#DEDEDE"
                />
              </svg>
            </div>
            <div>
              <p className="text-[16px] w-[420px] font-medium text-[#838383] ml-5 border-b-2 pb-10 mt-6">
                We value your feedback and are committed to providing <br />{" "}
                exceptional service to all our clients. If you have any <br />{" "}
                concerns or questions
              </p>
            </div>
            <div className="mt-4 ml-6 flex gap-6">
              <div className="w-12 h-12 rounded-full overflow-hidden">
                <img src={person1} alt="" />
              </div>
              <div>
                <h2 className="font-bold text-[20px] text-[#151313]">
                  Jang Wonyoung
                </h2>
                <p className="text-[18px] font-normal text-[#838383]">Korea</p>
              </div>
            </div>
          </div>
          <div className="bg-white w-[456px] h-[296px] rounded-3xl">
            <div>
              <p className="text-[16px] w-[420px] font-medium text-[#838383] ml-5 border-b-2 pb-10 mt-20">
                Our priority, and we appreciate the opportunity to <br />
                address any issues and ensure your complete <br /> satisfaction.
              </p>
            </div>
            <div className="mt-4 ml-6 flex gap-6">
              <div className="w-12 h-12 rounded-full overflow-hidden">
                <img src={person2} alt="" />
              </div>
              <div>
                <h2 className="font-bold text-[20px] text-[#151313]">
                  Jennie Kim
                </h2>
                <p className="text-[18px] font-normal text-[#838383]">USA</p>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-[698px]">
          <svg
            width="98"
            height="18"
            viewBox="0 0 98 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="8.5" cy="9.47461" r="8.5" fill="white" />
            <circle cx="35.5" cy="9.47461" r="8.5" fill="#FB9E4F" />
            <circle cx="62.5" cy="9.47461" r="8.5" fill="#FB9E4F" />
            <circle cx="89.5" cy="9.47461" r="8.5" fill="#FB9E4F" />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
