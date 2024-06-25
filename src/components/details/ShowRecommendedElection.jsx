import React, { useEffect, useRef, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ElectionCard from "../cards/ElectionCard";
import { Link } from "react-router-dom";
import { useScroll } from "framer-motion";
import { motion } from "framer-motion";

const elections = [
  {
    electionTitle: "VOTE 1",
    electionPicture:
      "https://d2v9ipibika81v.cloudfront.net/uploads/sites/33/2-1080x684.jpg",
    electionCreator: "0x...788",
    electionStart: "Today at 12:00:00",
    electionEnd: "Today at 18:00:00",
    electionDescription:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque vel placerat lacus. Fusce sollicitudin non dolor in venenatis. Aenean a sem gravida risus ornare elementum. Vestibulum quis augue nulla. Phasellus tincidunt mauris pharetra ullamcorper suscipit. Sed mattis nulla vel urna scelerisque dignissim. Suspendisse at elementum urna. Donec id aliquet nulla, in tincidunt orci.",
  },
  {
    electionTitle: "VOTE 1",
    electionPicture:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrZtpQWrKnU6avtGUkqf2LzqlXmchzXPDbPg&s",
    electionCreator: "0x...789",
    electionStart: "Tomorrow at 10:00:00",
    electionEnd: "Tomorrow at 22:00:00",
    electionDescription:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque vel placerat lacus. Fusce sollicitudin non dolor in venenatis. Aenean a sem gravida risus ornare elementum. Vestibulum quis augue nulla. Phasellus tincidunt mauris pharetra ullamcorper suscipit. Sed mattis nulla vel urna scelerisque dignissim. Suspendisse at elementum urna. Donec id aliquet nulla, in tincidunt orci.",
  },
  {
    electionTitle: "VOTE 1",
    electionPicture:
      "https://cdn.britannica.com/56/193556-131-7D3D1EDD/Election---Button-Vote-stripes-politics-campaign.jpg?w=840&h=460&c=crop",
    electionCreator: "0x...790",
    electionStart: "July 24th 2024 at 12:00:00",
    electionEnd: "July 24th 2024 at 18:00:00",
    electionDescription:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque vel placerat lacus. Fusce sollicitudin non dolor in venenatis. Aenean a sem gravida risus ornare elementum. Vestibulum quis augue nulla. Phasellus tincidunt mauris pharetra ullamcorper suscipit. Sed mattis nulla vel urna scelerisque dignissim. Suspendisse at elementum urna. Donec id aliquet nulla, in tincidunt orci.",
  },
  {
    electionTitle: "VOTE 1",
    electionPicture:
      "https://saifulmujani.com/wp-content/uploads/2020/06/depositphotos_110340254-stock-illustration-election-campaign-election-vote-election.jpg",
    electionCreator: "0x...791",
    electionStart: "Today at 18:00:00",
    electionEnd: "Today at 23:00:00",
    electionDescription:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque vel placerat lacus. Fusce sollicitudin non dolor in venenatis. Aenean a sem gravida risus ornare elementum. Vestibulum quis augue nulla. Phasellus tincidunt mauris pharetra ullamcorper suscipit. Sed mattis nulla vel urna scelerisque dignissim. Suspendisse at elementum urna. Donec id aliquet nulla, in tincidunt orci.",
  },
  {
    electionTitle: "VOTE 1",
    electionPicture:
      "https://img.etimg.com/thumb/width-1600,height-900,imgsize-64666,resizemode-75,msid-108516210/news/elections/lok-sabha/india/general-elections-2024-schedule-to-be-announce-on-march-16.jpg",
    electionCreator: "0x...801",
    electionStart: "Today at 12:00:00",
    electionEnd: "Today at 18:00:00",
    electionDescription:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque vel placerat lacus. Fusce sollicitudin non dolor in venenatis. Aenean a sem gravida risus ornare elementum. Vestibulum quis augue nulla. Phasellus tincidunt mauris pharetra ullamcorper suscipit. Sed mattis nulla vel urna scelerisque dignissim. Suspendisse at elementum urna. Donec id aliquet nulla, in tincidunt orci.",
  },
];

const ShowRecommendedElection = () => {
  let sliderRef = useRef(null);
  const play = () => {
    sliderRef.slickPlay();
  };

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

  useEffect(() => {
    play();
  }, []);
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "0.7 1"],
  });

  return (
    <motion.section
      ref={ref}
      style={{
        scale: scrollYProgress,
        opacity: scrollYProgress,
      }}
      id="recommended"
      className="py-6 sm:py-32"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="transition duration-500 ease-in-out transform scale-100 translate-x-0 translate-y-0 opacity-100">
          <div className="mb-12 space-y-5 md:mb-12 text-center">
            <div className="inline-block font-poppins px-3 py-1 text-sm font-semibold text-indigo-100 rounded-lg text-center text-cn bg-[#202c47] bg-opacity-60 hover:cursor-pointer hover:bg-opacity-40">
              Special for you
            </div>
            <h1 className="mb-5 text-3xl font-poppins font-semibold text-white text-center md:text-5xl">
              <span className="text-gradient">Don't</span> miss out!
            </h1>
            <p className="text-xl text-gray-100 font-poppins font-normal text-center md:text-2xl">
              Here are some <span className="text-gradient">elections</span>{" "}
              that you can participate before they end.
            </p>
          </div>
        </div>
        <div className="slider-container">
          <Slider ref={(slider) => (sliderRef = slider)} {...settings}>
            {elections.map((election, index) => (
              <ElectionCard key={index} id={index} election={election} />
            ))}
          </Slider>
        </div>
      </div>
    </motion.section>
  );
};

export default ShowRecommendedElection;
