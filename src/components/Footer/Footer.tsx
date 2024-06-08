import React from 'react';

const Footer = () => {
  return (

    <div className="w-full py-20 bg-[#22222A] justify-around items-center inline-flex font-sans mt-14">
      <div className="self-stretch justify-start items-start gap-4 md:gap-[158px] inline-flex">
        <div className="justify-start items-start gap-4 md:gap-[214px] flex">
          <div className="self-stretch flex-col justify-start items-start gap-5 inline-flex">
            <div className="w-36 grow shrink basis-0 flex-col justify-between items-start flex">
              <div className="flex-col justify-start items-start gap-[9px] flex">
                <div className="self-stretch grow shrink basis-0 relative">
                  <img className="color-[white]"  src="/images/Frame.png" alt="" />
                </div>
                <div className=" text-center text-white text-[15px] font-normal leading-tight">Gifting made easy.</div>
              </div>
              <div className="justify-end items-center gap-4 inline-flex">
                <img src="/images/twitter.png" className='bg-[#1D9BF0] p-1 rounded-md w-[24px] h-[24px]' alt="" />
                <img src="/images/True.png" className='bg-[#1877F2] p-1 rounded-md w-[24px] h-[24px]' alt="" />
                <div className="w-6 h-6 pl-[5px] pr-1.5 pt-[5px] pb-[4.20px] bg-white rounded-md justify-center items-center flex">
                  <div className="w-[13.04px] h-[14.80px] relative">
                  </div>
                </div>
                <div className="w-6 h-6 relative" />
              </div>
            </div>
            <div className="text-white text-[11px] font-normal  leading-[18px]">© 2022  GiftList. All rights Reserved</div>
          </div>
          <div className="justify-start items-start gap-4 md:gap-[164px] flex">
            <div className="flex-col justify-start items-start gap-6 inline-flex">
              <div className="text-center text-white text-xl font-semibold  leading-normal">About GiftList</div>
              <div className="flex-col justify-start items-start gap-4 flex">
                <div className="text-center text-white text-[15px] font-normal  leading-tight">How it works</div>
                <div className="text-center text-white text-[15px] font-normal  leading-tight">About Us</div>
                <div className="text-center text-white text-[15px] font-normal  leading-tight">Browser Extensions</div>
                <div className="text-center text-white text-[15px] font-normal  leading-tight">Shop</div>
                <div className="text-center text-white text-[15px] font-normal  leading-tight">Blog </div>
              </div>
            </div>
            <div className="flex-col justify-start items-start gap-6 inline-flex">
              <div className="text-center text-white text-xl font-semibold  leading-normal">Help</div>
              <div className="flex-col justify-center items-start gap-4 flex">
                <div className="text-center text-white text-[15px] font-normal  leading-tight">Disclaimer</div>
                <div className="text-center text-white text-[15px] font-normal  leading-tight">Privacy policy</div>
                <div className="text-center text-white text-[15px] font-normal  leading-tight">Terms of Use</div>
                <div className="text-center text-white text-[15px] font-normal  leading-tight">Contact Us</div>
                <div className="text-center text-white text-[15px] font-normal  leading-tight">FAQ</div>
              </div>
            </div>
          </div>
        </div>
      <div className='md:block hidden'>
        <div className=" flex-col justify-center items-start gap-2 inline-flex">
          <div className="self-stretch h-10 px-6 py-2 bg-white rounded-lg justify-center items-center gap-2.5 inline-flex">
            <div className="text-center text-neutral-800 text-[15px] font-semibold  leading-tight">Log in</div>
          </div>
          <div className="self-stretch h-10 px-6 py-4 bg-sky-400 rounded-lg justify-center items-center gap-2.5 inline-flex">
            <div className="text-center text-white text-[15px] font-semibold  leading-tight">Sign Up</div>
          </div>
        </div>
      </div> 
      </div>

      </div>

  );
};

export default Footer;