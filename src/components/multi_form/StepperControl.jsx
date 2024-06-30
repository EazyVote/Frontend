import React from "react";

const StepperControl = ({ handleClick, steps, currentStep }) => {
  return (
    <div className="flex justify-end mb-8">
      <button
        onClick={() => {
          if (currentStep != 1) {
            handleClick();
          }
        }}
        className={`hover:scale-105 mr-4 duration-200 mt-6 text-white font-poppins font-normal rounded-lg btn-blue-gradient-2 rounded-lg ${
          currentStep == 1 ? "opacity-0 cursor-not-allowed" : "cursor-pointer"
        }`}
      >
        Back
      </button>
      <button
        onClick={() => handleClick("next")}
        className="hover:scale-105 duration-200 mt-6 text-white font-poppins font-normal rounded-lg btn-blue-gradient-2 rounded-lg cursor-pointer"
      >
        {currentStep == steps.length ? "Confirm" : "Next"}
      </button>
    </div>
  );
};

export default StepperControl;
