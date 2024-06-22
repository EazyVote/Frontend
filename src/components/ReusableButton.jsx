import React from "react";

const ReusableButton = ({ title }) => {
  return (
    <button className="mt-5 text-white font-poppins font-normal rounded-lg border-blue-gradient py-2 px-4 rounded-lg">
      {title}
    </button>
  );
};

export default ReusableButton;
