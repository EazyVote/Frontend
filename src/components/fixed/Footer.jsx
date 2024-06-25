import React from "react";

const Footer = () => {
  return (
    <footer className="bg-primary font-poppins py-2 border-t border-gray-200">
      <ul className="text-dimWhite hover:text-white text-md flex items-center justify-center flex-col gap-7 md:flex-row md:gap-12 transition-all duration-500 py-8">
        <li>
          <span>
            ©<a href="#">EazyVote</a> 2024, All rights reserved.
          </span>
        </li>
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">Elections</a>
        </li>
        <li>
          <a href="#">History</a>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
