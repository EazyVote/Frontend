import { features } from "../../services/ContentList";
import { useScroll } from "framer-motion";
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import FeatureCard from "../cards/FeatureCard";
import { setGlobalState } from "../../services/Helper";

const DescriptionSection = () => {
  const ref = useRef(null);
  const [offset, setOffset] = useState(["0 1", "1.05 1"]);
  const navigate = useNavigate();

  const handleClick = () => {
    const connectedAccount = sessionStorage.getItem("connectedAccount");
    if (connectedAccount) {
      navigate("/create_election");
    } 
    else {
      setGlobalState("mustConnectWalletScale", "scale-100");
    }
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 1024) {
        setOffset(["0 1", "0.5 1"]);
      } else if (window.innerWidth < 500) {
        setOffset("0 1", "0.3 1");
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
      id="features"
      className="flex items-center md:flex-row flex-col sm:py-16 py-6"
    >
      <div className="flex-1 flex justify-center items-center flex-col text-center lg:flex lg:justify-start lg:items-start lg:text-left">
        <h2 className="font-poppins font-semibold text-[40px] xs:text-[48px] text-white leading-[66.8px] xs:leading-[76.8px] w-full">
          You make the <span className="text-gradient">choices</span>,{" "}
          <br className="sm:block hidden" /> we’ll secure the{" "}
          <span className="text-gradient">votes</span>
        </h2>
        <p className="font-poppins font-normal text-dimWhite text-[18px] leading-[30.8px] max-w-[470px] mt-5">
          With the right blockchain voting system, you can ensure transparency,
          security, and trust in elections. However, with many platforms
          available.
        </p>
        <button
          onClick={handleClick}
          className="hover:scale-105 duration-200 mt-6 text-white font-poppins font-normal rounded-lg btn-blue-gradient-2 rounded-lg"
        >
          Create New Election
        </button>
      </div>

      <div
        className={`flex-1 flex flex justify-center items-center md:ml-10 ml-0 md:mt-0 mt-10 relative flex-col`}
      >
        {features.map((feature, index) => (
          <FeatureCard key={feature.id} {...feature} index={index} />
        ))}
      </div>
    </motion.section>
  );
};

export default DescriptionSection;
