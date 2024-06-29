import React from "react";

const ElectionHeroSection = ({ election }) => {
  return (
    <section className="flex items-center md:flex-row flex-col lg:mb-16">
      <div className="flex-1 flex justify-center items-center flex-col text-center lg:flex lg:justify-start lg:items-start lg:text-left">
        <h2 className="font-poppins font-semibold text-[40px] xs:text-[48px] text-white  w-full mb-4">
          <br className="sm:block hidden" />{" "}
          <span className="text-gradient">{election.electionTitle}</span>
        </h2>
        <p className="font-poppins font-normal text-dimWhite text-[18px] leading-[30.8px] max-w-[470px] mt-5 mb-6">
          {election.electionDescription}
        </p>
        <button
          onClick={() =>
            document
              .getElementById("candidates")
              .scrollIntoView({ behavior: "smooth" })
          }
          className="hover:scale-105 duration-200 text-white font-poppins font-normal rounded-lg btn-blue-gradient-2 py-3 px-8 transition-transform transform hover:-translate-y-1 hover:shadow-lg"
        >
          Vote Now
        </button>
      </div>

      <div className="flex-1 flex justify-center items-center md:ml-10 ml-0 md:mt-0 mt-10 relative flex-col">
        <img
          className="rounded-lg shadow-lg transition-transform transform hover:scale-105 duration-300"
          src={election.electionPicture}
          alt=""
        />
      </div>
    </section>
  );
};

export default ElectionHeroSection;
