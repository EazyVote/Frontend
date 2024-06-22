import React from "react";
import ReusableButton from "./ReusableButton";
import { FaLocationArrow } from "react-icons/fa6";

const HeroSection = () => {
  return (
    <div className="bg-primary flex justify-center items-center">
      <div className="xl:max-w-[1280px] w-full">
        <section id="home" className="flex md:flex-row flex-col sm:py-16 py-6">
          <div className="flex-1 flex flex-col xl:px-0 sm:px-16 px-6 items-center text-center">
            <div className="flex flex-row items-center py-[6px] px-4 bg-discount-gradient rounded-[10px] mb-2">
              <p className="font-poppins font-normal text-dimWhite text-[18px] leading-[30.8px] ml-2">
                <span className="text-white">Let's</span> Introduce{" "}
                <span className="text-white">EazyVote</span>
              </p>
            </div>

            <div className="w-full flex flex-col items-center">
              <div className="w-full flex flex-col md:flex-row items-center justify-center">
                <h1 className="mr-2 font-poppins font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100.8px] leading-[75px]">
                  The Next
                </h1>
                <span className="font-poppins font-semibold ss:text-[72px] text-[52px] text-gradient ss:leading-[100.8px] leading-[75px] md:ml-2">
                  Generation
                </span>
              </div>
              <h1 className="font-poppins font-semibold ss:text-[68px] text-[52px] text-white ss:leading-[100.8px] leading-[75px]">
                of Modern Voting.
              </h1>
            </div>

            <p className="font-poppins font-normal text-dimWhite text-[18px] leading-[30.8px] max-w-[600px] mt-5">
              Our blockchain voting platform ensures secure, transparent, and
              tamper-proof elections. Trust in efficient voting with
              cutting-edge blockchain technology.
            </p>

            <a href="/">
              <ReusableButton
                title="Explore Elections"
              />
            </a>
          </div>
        </section>
      </div>
    </div>
  );
};

export default HeroSection;
