import React, { useEffect, useRef, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import FeedbackCard from "../cards/FeedbackCard";
import { useScroll } from "framer-motion";
import { motion } from "framer-motion";
import { setGlobalState } from "../../services/Helper";
import { getFeedbacks } from "../../services/Blockchain";

const ShowFeedbacks = () => {
  const [expandedIndex, setExpandedIndex] = useState(null);
  const toggleExpand = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };
  let sliderRef = useRef(null);
  const play = () => {
    sliderRef.slickPlay();
  };

  const [feedbacksData, setFeedbacksData] = useState([]);

  const settings = {
    dots: false,
    className: "center",
    focusOnSelect: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2000,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    swipeToSlide: true,
    adaptiveHeight: true,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "0.7 1"],
  });

  const handleClick = () => {
    const connectedAccount = sessionStorage.getItem("connectedAccount")
    if (connectedAccount) {
      setGlobalState("createNewFeedbackScale", "scale-100");
    }
    else {
      setGlobalState("mustConnectWalletScale", "scale-100")
    }
  };

  useEffect(() => {
    play();
  }, [])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getFeedbacks();
        setFeedbacksData(data);
      } catch (error) {
        console.log(error.message);
        setFeedbacksData([]);
      }
    };
    fetchData();
  }, [feedbacksData]);

  return (
    <motion.section
      ref={ref}
      style={{
        scale: scrollYProgress,
        opacity: scrollYProgress,
      }}
      id="feedbacks"
      className="py-6 sm:pb-32"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="transition duration-500 ease-in-out transform scale-100 translate-x-0 translate-y-0 opacity-100">
          <div className="mb-12 space-y-5 md:mb-16 text-center">
            <div className="inline-block font-poppins px-3 py-1 text-sm font-semibold text-indigo-100 rounded-lg text-center text-cn bg-[#202c47] bg-opacity-60 hover:cursor-pointer hover:bg-opacity-40">
              Words from Others
            </div>
            <h1 className="mb-5 text-3xl font-poppins font-semibold text-white text-center md:text-5xl">
              It's not <span className="text-gradient">just</span> us.
            </h1>
            <p className="text-xl text-gray-100 font-poppins font-normal text-center md:text-2xl">
              Here's what <span className="text-gradient">others</span> have to
              say about us.
            </p>
            <button
              onClick={handleClick}
              className="hover:scale-105 duration-200 mt-6 text-white font-poppins font-normal rounded-lg btn-blue-gradient-2 rounded-lg"
            >
              Add Yours
            </button>
          </div>
        </div>
        <div
          className={`slider-container ${
            feedbacksData == null ? "scale-0" : "scale-100"
          }`}
        >
          <Slider ref={(slider) => (sliderRef = slider)} {...settings}>
            {feedbacksData == null ? (
              <div></div>
            ) : (
              feedbacksData.map((feedback, index) => (
                <FeedbackCard
                  key={index}
                  id={index}
                  feedback={feedback}
                  isExpanded={expandedIndex === index}
                  toggleExpand={toggleExpand}
                />
              ))
            )}
          </Slider>
        </div>
      </div>
    </motion.section>
  );
};

export default ShowFeedbacks;
