import React, { useEffect } from "react";
import BoxReveal from "../magicui/BoxReveal";

const ElectionHeroSection = ({ election }) => {

  if (!election) {
    return (
      <div>Loading...</div>
    )
  }

  return (
    <section className="flex justify-center items-center mb-8">
      <div id="electionDetail" className="xl:max-w-[1280px] w-full">
        <section className="flex md:flex-row flex-col sm:py-8 py-6">
          <div className="flex-1 flex flex-col xl:px-0 sm:px-16 px-6 items-center text-center">
            <BoxReveal boxColor={"#33bbcf"} duration={0.5}>
              <div className="flex flex-row items-center py-[6px] px-4 bg-discount-gradient rounded-[10px] mb-2">
                <p className="font-poppins font-normal text-dimWhite text-[18px] leading-[30.8px] ml-2">
                  <span className="text-white">Welcome</span> to{" "}
                </p>
              </div>
            </BoxReveal>

            <div className="w-full flex flex-col items-center">
              <div className="w-full flex flex-col md:flex-row items-center justify-center">
                <BoxReveal boxColor={"#33bbcf"} duration={0.5}>
                  <h1 className="mr-2 font-poppins font-semibold ss:text-[72px] text-[52px] text-gradient ss:leading-[100.8px] leading-[75px]">
                    {election.electionTitle}
                  </h1>
                </BoxReveal>
              </div>
            </div>
            <BoxReveal boxColor={"#33bbcf"} duration={0.5}>
              <p className="font-poppins font-normal text-dimWhite text-[18px] leading-[30.8px] max-w-[600px] mt-5">
                {election.electionDescription}
              </p>
            </BoxReveal>

            <BoxReveal boxColor={"#33bbcf"} duration={0.5}>
              <button
                onClick={() =>
                  document
                    .getElementById("candidates")
                    .scrollIntoView({ behavior: "smooth" })
                }
                className="mt-6 text-white font-poppins font-normal rounded-lg btn-blue-gradient-2 py-3 px-8 transition-transform transform hover:shadow-lg"
              >
                Vote Now
              </button>
            </BoxReveal>
          </div>
        </section>
      </div>
    </section>
  );
};

export default ElectionHeroSection;
