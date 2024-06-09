
import React from 'react';

const Footer = () => {
  return (
    <div className="w-full py-10 md:py-20 bg-[#22222A] font-sans mt-14">
      <div className="container mx-auto px-4 md:px-8 lg:max-w-[1086px]">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 lg:gap-0 lg:space-x-8">
          <div className="flex flex-col gap-5">
            <div className="flex flex-col justify-between items-start">
              <div className="flex flex-col justify-start items-start gap-[9px]">
                <div className="relative">
                  <img className="w-36" src="/images/Frame.png" alt="" />
                </div>
                <div className="text-center text-white text-[15px] font-normal leading-tight">
                  Gifting made easy.
                </div>
              </div>
              <div className="flex justify-start items-center gap-4 mt-4">
                <img src="/images/twitter.png" className="bg-[#1D9BF0] p-1 rounded-md w-[24px] h-[24px]" alt="" />
                <img src="/images/True.png" className="bg-[#1877F2] p-1 rounded-md w-[24px] h-[24px]" alt="" />
                <img src="/images/tiktok.png" className="bg-white text-black p-1 rounded-md w-[24px] h-[24px]" alt="" />
                <img src="/images/Instagram.png" className=" p-1 rounded-md w-[24px] h-[24px]" alt="" />
              </div>
            </div>
            <div className="text-white text-[11px] font-normal leading-[18px] mt-4 md:mt-0">
              © 2022 GiftList. All rights Reserved
            </div>
          </div>

          <div className="flex flex-col justify-start items-start gap-6">
            <div className="text-center text-white text-xl font-semibold leading-normal">
              About GiftList
            </div>
            <div className="flex flex-col justify-start items-start gap-4">
              <div className="text-center text-white text-[15px] font-normal leading-tight">
                How it works
              </div>
              <div className="text-center text-white text-[15px] font-normal leading-tight">
                About Us
              </div>
              <div className="text-center text-white text-[15px] font-normal leading-tight">
                Browser Extensions
              </div>
              <div className="text-center text-white text-[15px] font-normal leading-tight">
                Shop
              </div>
              <div className="text-center text-white text-[15px] font-normal leading-tight">
                Blog
              </div>
            </div>
          </div>

          <div className="flex flex-col justify-start items-start gap-6">
            <div className="text-center text-white text-xl font-semibold leading-normal">
              Help
            </div>
            <div className="flex flex-col justify-center items-start gap-4">
              <div className="text-center text-white text-[15px] font-normal leading-tight">
                Disclaimer
              </div>
              <div className="text-center text-white text-[15px] font-normal leading-tight">
                Privacy policy
              </div>
              <div className="text-center text-white text-[15px] font-normal leading-tight">
                Terms of Use
              </div>
              <div className="text-center text-white text-[15px] font-normal leading-tight">
                Contact Us
              </div>
              <div className="text-center text-white text-[15px] font-normal leading-tight">
                FAQ
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-5 md:gap-2 lg:gap-0 lg:items-center lg:justify-center">
            <div className="flex flex-col justify-center items-start lg:items-center gap-2">
              <div className="w-full h-10 px-6 py-2 bg-white rounded-lg flex justify-center items-center gap-2.5">
                <div className="text-center text-neutral-800 text-[15px] font-semibold leading-tight">
                  Log in
                </div>
              </div>
              <div className="w-full h-10 px-6 py-4 bg-sky-400 rounded-lg flex justify-center items-center gap-2.5">
                <div className="text-center text-white text-[15px] font-semibold leading-tight">
                  Sign Up
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;


