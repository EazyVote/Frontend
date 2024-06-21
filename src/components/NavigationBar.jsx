import React, { useState } from "react";
import close from "../assets/close.svg";
import menu from "../assets/menu.svg";

const NavigationBar = () => {
  const [active, setActive] = useState("Home");
  const [toggle, setToggle] = useState(false);

  const navLinks = [
    {
      id: "home",
      title: "Home",
    },
    {
      id: "elections",
      title: "Elections",
    },
    {
      id: "history",
      title: "History",
    },
  ];

  return (
    <div className="sm:px-16 px-6">
      <div className="xl:max-w-[1280px] w-full">
        <nav className="w-full flex py-6 justify-between items-center navbar">
          {/* <img src={react} alt="hoobank" className="w-[124px] h-[32px]" /> */}
          <div className="flex-1 flex-start">
            <h1 className="text-white font-poppins font-medium cursor-pointer text-[18px]">
              EazyVote
            </h1>
          </div>

          <ul className="list-none flex sm:flex hidden justify-center items-center flex-1">
            {navLinks.map((nav, index) => (
              <li
                key={nav.id}
                className={`font-poppins font-normal cursor-pointer text-[16px] ${
                  active === nav.title ? "text-white" : "text-dimWhite"
                } ${index === navLinks.length - 1 ? "mr-0" : "mr-10"}`}
                onClick={() => setActive(nav.title)}
              >
                <a href={`#${nav.id}`}>{nav.title}</a>
              </li>
            ))}
          </ul>

          <div className="sm:flex hidden flex-1 flex justify-end">
            <button
              type="button"
              className="px-6 py-2.5 text-white font-poppins font-normal text-[16px] rounded-full shadow-md border border-white border-opacity-50"
            >
              Connect Wallet
            </button>
          </div>

          <div className="sm:hidden flex flex-1 justify-end items-center">
            <img
              src={toggle ? close : menu}
              alt="menu"
              className="w-[28px] h-[28px] object-contain"
              onClick={() => setToggle(!toggle)}
            />

            <div
              className={`${
                !toggle ? "hidden" : "flex"
              } p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}
            >
              <ul className="list-none flex justify-end items-start flex-1 flex-col">
                {navLinks.map((nav, index) => (
                  <li
                    key={nav.id}
                    className={`font-poppins font-medium cursor-pointer text-[16px] ${
                      active === nav.title ? "text-white" : "text-dimWhite"
                    } ${index === navLinks.length - 1 ? "mb-0" : "mb-4"}`}
                    onClick={() => setActive(nav.title)}
                  >
                    <a href={`#${nav.id}`}>{nav.title}</a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default NavigationBar;
