import { useScroll } from "framer-motion";
import React, { useContext, useEffect, useRef, useState } from "react";
import { Typewriter } from "react-simple-typewriter";
import { motion } from "framer-motion";
import BoxReveal from "../magicui/BoxReveal";
import { Link } from "react-router-dom";
import { NavContext } from "../../context/Context";

const HomeHeroSection = () => {
  const { setActive } = useContext(NavContext);

  const handleExploreClick = () => {
    setActive("elections");
  };

  return (
    <section className="bg-primary flex justify-center items-center">
      <div id="home" className="xl:max-w-[1280px] w-full">
        <section className="flex md:flex-row flex-col sm:py-16 py-6">
          <div className="flex-1 flex flex-col xl:px-0 sm:px-16 px-6 items-center text-center">
            <BoxReveal boxColor={"#33bbcf"} duration={0.5}>
              <div className="flex flex-row items-center py-[6px] px-4 bg-discount-gradient rounded-[10px] mb-2">
                <p className="font-poppins font-normal text-dimWhite text-[18px] leading-[30.8px] ml-2">
                  <span className="text-white">Let's</span> Introduce{" "}
                  <span className="text-white">EazyVote</span>
                </p>
              </div>
            </BoxReveal>

            <div className="w-full flex flex-col items-center">
              <BoxReveal boxColor={"#33bbcf"} duration={0.5}>
                <div className="w-full flex flex-col md:flex-row items-center justify-center">
                  <h1 className="mr-2 font-poppins font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100.8px] leading-[75px]">
                    The Next
                  </h1>
                  <span className="font-poppins flex font-semibold ss:text-[72px] text-[52px] text-gradient ss:leading-[100.8px] leading-[75px] md:ml-2">
                    <Typewriter
                      words={["Generation", "Evolution", "Future"]}
                      loop
                      cursor
                      cursorStyle="|"
                      cursorBlinking={true}
                      typeSpeed={100}
                      deleteSpeed={100}
                      delaySpeed={1000}
                    />
                  </span>
                </div>
              </BoxReveal>

              <BoxReveal boxColor={"#33bbcf"} duration={0.5}>
                <h1 className="font-poppins font-semibold flex items-center ss:text-[68px] text-[52px] text-white ss:leading-[100.8px] leading-[75px]">
                  of Modern Voting.
                </h1>
              </BoxReveal>
            </div>

            <BoxReveal boxColor={"#33bbcf"} duration={0.5}>
              <p className="font-poppins font-normal text-dimWhite text-[18px] leading-[30.8px] max-w-[600px] mt-5">
                Our blockchain voting platform ensures secure, transparent, and
                tamper-proof elections. Trust in efficient voting with
                cutting-edge blockchain technology.
              </p>
            </BoxReveal>

            <BoxReveal boxColor={"#33bbcf"} duration={0.5}>
              <Link to={"/elections"}>
                <button
                  onClick={handleExploreClick}
                  className="mt-5 text-white font-poppins font-normal rounded-lg btn-blue-gradient py-2 px-4 rounded-lg"
                >
                  Explore Elections
                </button>
              </Link>
            </BoxReveal>
          </div>
        </section>
      </div>
    </section>
  );
};

export default HomeHeroSection;
