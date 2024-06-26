import { useScroll } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";
import { Typewriter } from "react-simple-typewriter";
import { motion } from "framer-motion";

const HeroSection = () => {
  const ref = useRef(null);
  const [offset, setOffset] = useState(["0 1", "1 1"]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 1024) {
        setOffset(["0 1", "0.5 1"]);
      }
    };
    handleResize();
  }, []);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: offset,
  });

  return (
    <motion.section
      ref={ref}
      style={{
        scale: scrollYProgress,
        opacity: scrollYProgress,
      }}
      className="bg-primary flex justify-center items-center"
    >
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
              <h1 className="font-poppins font-semibold flex items-center ss:text-[68px] text-[52px] text-white ss:leading-[100.8px] leading-[75px]">
                of Modern Voting.
              </h1>
            </div>

            <p className="font-poppins font-normal text-dimWhite text-[18px] leading-[30.8px] max-w-[600px] mt-5">
              Our blockchain voting platform ensures secure, transparent, and
              tamper-proof elections. Trust in efficient voting with
              cutting-edge blockchain technology.
            </p>

            <button className="hover:scale-105 duration-200 mt-5 text-white font-poppins font-normal rounded-lg btn-blue-gradient py-2 px-4 rounded-lg">
              Explore Elections
            </button>
          </div>
        </section>
      </div>
    </motion.section>
  );
};

export default HeroSection;
