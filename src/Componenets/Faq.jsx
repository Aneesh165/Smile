import React from 'react'

const Faq = () => {
  return (
    <div className='w-[1320px] h-[878px] mx-auto mb-36'>
        <h1 className='text-[48px] text-[#011016] font-bold'>FAQs</h1>
        <div className='h-[775px] mt-[31px]'>
            <div className='h-[202px] w-[100%] rounded-3xl bg-[#FFFAF5] flex'>
                <div className=' w-[80%] pt-12 pl-[57px]'>
                <h2 className='text-[#3C3C3C] text-[32px] pb-[26px]'>How often should I visit the dentist?</h2>
                <p className='text-[16px] text-[#898787]'>We recommend visiting the dentist at least twice a year for routine check-ups and cleanings. However, your <br />
                 specific needs may require more frequent visits.</p>
                </div>
                <div className='w-[20%] pl-24 my-auto'>
                    <div className='w-[62px] h-[62px] rounded-full bg-[#F58220] text-white text-center text-[36px]'>-</div>
                </div>
            </div>
            <div className='mt-[20px] h-[171px] w-[100%] border flex justify-between rounded-3xl '>
                <h1 className='text-[32px] text-[#3C3C3C] pt-[62px] pl-[58px] '>What can I expect during my first visit?</h1>
                <div className='w-[62px] h-[62px] rounded-full bg-[#231F20] text-white text-center text-[36px] my-auto mr-24 '>+</div>
            </div>
            <div className='mt-[20px] h-[171px] w-[100%] border flex justify-between rounded-3xl '>
                <h1 className='text-[32px] text-[#3C3C3C] pt-[62px] pl-[58px] '>How can I prepare for my dental appointment?</h1>
                <div className='w-[62px] h-[62px] rounded-full bg-[#231F20] text-white text-center text-[36px] my-auto mr-24 '>+</div>
            </div>
            <div className='mt-[20px] h-[171px] w-[100%] border flex justify-between rounded-3xl '>
                <h1 className='text-[32px] text-[#3C3C3C] pt-[62px] pl-[58px] '>What should I do in case of a dental emergency?</h1>
                <div className='w-[62px] h-[62px] rounded-full bg-[#231F20] text-white text-center text-[36px] my-auto mr-24 '>+</div>
            </div>
        </div>
    </div>
  )
}

export default Faq