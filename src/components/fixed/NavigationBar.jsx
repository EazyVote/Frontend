import React, { useContext, useEffect, useState } from "react";
import close from "../../assets/close.svg";
import menu from "../../assets/menu.svg";
import { navLinks } from "../../services/ContentList";
import { Link } from "react-router-dom";
import { setGlobalState, truncate } from "../../services/Helper";
import { NavContext } from "../../context/Context";
import { connectWallet } from "../../services/Blockchain";

const NavigationBar = ({ connectedAccount, handleClick }) => {
  const { active, setActive } = useContext(NavContext);
  const [toggle, setToggle] = useState(false);

  return (
    <div className="xl:max-w-[1280px] w-full">
      <nav className="w-full flex py-6 justify-between items-center navbar">
        <div className="flex-1 flex-start">
          <h1 className="text-white font-poppins font-medium cursor-pointer text-[18px]">
            EazyVote
          </h1>
        </div>

        <ul className="list-none hidden justify-center items-center flex-1 lg:flex">
          {navLinks.map((nav, index) => (
            <li
              key={nav.id}
              className={`font-poppins font-normal cursor-pointer text-[16px] text-white ${index === navLinks.length - 1 ? "mr-0" : "mr-10"}`}
              onClick={() => setActive(nav.title)}
            >
              <Link to={`/${nav.id}`}>{nav.title}</Link>
            </li>
          ))}
        </ul>

        <div className="lg:flex hidden flex-1 flex justify-end">
          {connectedAccount ? (
            <button
              type="button"
              className="hover:scale-105 duration-200 px-6 py-2.5 text-white font-poppins font-normal text-[16px] shadow-md border connect-wallet-gradient"
            >
              {truncate(connectedAccount, 4, 4, 11)}
            </button>
          ) : (
            <button
              onClick={handleClick}
              type="button"
              className="hover:scale-105 duration-200 px-6 py-2.5 text-white font-poppins font-normal text-[16px] shadow-md border connect-wallet-gradient"
            >
              Connect Wallet
            </button>
          )}
        </div>

        <div className="lg:hidden flex flex-1 justify-end items-center">
          <img
            src={toggle ? close : menu}
            alt="menu"
            className="w-[28px] h-[28px] object-contain"
            onClick={() => setToggle(!toggle)}
          />

          <div
            className={`${
              !toggle ? "hidden" : "flex"
            } p-6 bg-black-gradient popup-visible absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}
          >
            <ul className="list-none flex justify-end items-start flex-1 flex-col">
              {navLinks.map((nav, index) => (
                <li
                  key={nav.id}
                  className={`font-poppins font-medium mb-4 cursor-pointer text-[16px] ${
                    active === nav.title ? "text-white" : "text-dimWhite"
                  }`}
                  onClick={() => setActive(nav.title)}
                >
                  <Link to={`/${nav.id}`}>{nav.title}</Link>
                </li>
              ))}
              {connectedAccount ? (
                <li
                  className={`font-poppins font-medium mb-0 cursor-pointer text-[16px] ${
                    active === "signout" ? "text-white" : "text-dimWhite"
                  }`}
                  onClick={() => {
                    setGlobalState("signOutConfirmationScale", "scale-100");
                  }}
                >
                  Sign Out
                </li>
              ) : (
                <li
                  className={`font-poppins font-medium mb-0 cursor-pointer text-[16px] ${
                    active === "signout" ? "text-white" : "text-dimWhite"
                  }`}
                  onClick={handleClick}
                >
                  Connect Wallet
                </li>
              )}
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavigationBar;
