import React from 'react'
import one from "../assets/Blog1.jpeg"
import two from "../assets/Blog2.jpeg"
import three from "../assets/Blog3.jpeg"
import four from "../assets/Blog4.jpeg"

const Blog = () => {
  return (
    <div className='h-[674px] w-[100%] mt-56 relative'>
        <div className='w-[100%] h-[369px] bg-[#FFFAF5] absolute z-[-10] bottom-[410px]'></div>
        <div className='h-[60px] w-[100%] flex justify-between pl-14 pr-14'>
            <h1 className='font-semibold text-[48px] text-[#011016]'>See Our Latest Blogs!</h1>
            <button className='bg-[#F58220] text-[18px] w-[117px] rounded-md mt-auto h-[50px] text-white'>View All</button>
        </div>
        <div className='w-[1405px] h-[466px] mx-auto mt-[55px] flex justify-between'>
                <div className='w-[319px] h-[466px] rounded-md ] '>
                {/* shadow-[0px_4px_6px_rgba(0,0,0,0.1),0px_1px_15px_4px_rgba(0,0,0,0.1)] */}
                    <div className='h-[240px] w-[319px] rounded-md overflow-hidden '>
                        <img src={one} className='h-full object-cover object-left' alt="" />
                    </div>
                    <div className='w-[100%] h-[202px] mt-5'>
                        <h1 className='text-[20px] font-semibold leading-tight py-2 text-[#231F20]'>Lorem Ipsum available, but the <br /> majority have suffered</h1>
                        <p className='text-[#8F9092] text-[14px] pb-2'>Lorem Ipsum available, but the majority have <br /> suffered alteration in some form, by injected <br />
                         humour, or randomised words which don't look <br /> even</p>
                         <button className='h-[40px] w-[93px] border-b-2 pt-2 border-[#231F20] text-[16px] font-semibold text-[#010101]'>READ MORE</button>
                    </div>
                </div>
                <div className='w-[319px] h-[466px] rounded-md ] '>
                {/* shadow-[0px_4px_6px_rgba(0,0,0,0.1),0px_1px_15px_4px_rgba(0,0,0,0.1)] */}
                    <div className='h-[240px] w-[319px] rounded-md overflow-hidden '>
                        <img src={two} className='h-full object-cover object-center' alt="" />
                    </div>
                    <div className='w-[100%] h-[202px] mt-5'>
                        <h1 className='text-[20px] font-semibold leading-tight py-2 text-[#231F20]'>Lorem Ipsum available, but the <br /> majority have suffered</h1>
                        <p className='text-[#8F9092] text-[14px] pb-2'>Lorem Ipsum available, but the majority have <br /> suffered alteration in some form, by injected <br />
                         humour, or randomised words which don't look <br /> even</p>
                         <button className='h-[40px] w-[93px] border-b-2 pt-2 border-[#231F20] text-[16px] font-semibold text-[#010101]'>READ MORE</button>
                    </div>
                </div>
                <div className='w-[319px] h-[466px] rounded-md ] '>
                {/* shadow-[0px_4px_6px_rgba(0,0,0,0.1),0px_1px_15px_4px_rgba(0,0,0,0.1)] */}
                    <div className='h-[240px] w-[319px] rounded-md overflow-hidden '>
                        <img src={three} className='h-full object-cover object-right' alt="" />
                    </div>
                    <div className='w-[100%] h-[202px] mt-5'>
                        <h1 className='text-[20px] font-semibold leading-tight py-2 text-[#231F20]'>Lorem Ipsum available, but the <br /> majority have suffered</h1>
                        <p className='text-[#8F9092] text-[14px] pb-2'>Lorem Ipsum available, but the majority have <br /> suffered alteration in some form, by injected <br />
                         humour, or randomised words which don't look <br /> even</p>
                         <button className='h-[40px] w-[93px] border-b-2 pt-2 border-[#231F20] text-[16px] font-semibold text-[#010101]'>READ MORE</button>
                    </div>
                </div>
                <div className='w-[319px] h-[466px] rounded-md ] '>
                {/* shadow-[0px_4px_6px_rgba(0,0,0,0.1),0px_1px_15px_4px_rgba(0,0,0,0.1)] */}
                    <div className='h-[240px] w-[319px] rounded-md overflow-hidden '>
                        <img src={four} className='h-full object-cover object-left' alt="" />
                    </div>
                    <div className='w-[100%] h-[202px] mt-5'>
                        <h1 className='text-[20px] font-semibold leading-tight py-2 text-[#231F20]'>Lorem Ipsum available, but the <br /> majority have suffered</h1>
                        <p className='text-[#8F9092] text-[14px] pb-2'>Lorem Ipsum available, but the majority have <br /> suffered alteration in some form, by injected <br />
                         humour, or randomised words which don't look <br /> even</p>
                         <button className='h-[40px] w-[93px] border-b-2 pt-2 border-[#231F20] text-[16px] font-semibold text-[#010101]'>READ MORE</button>
                    </div>
                </div>
        </div>
    </div>
  )
}

export default Blog