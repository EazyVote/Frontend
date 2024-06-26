import React, { useState } from "react";
import AddElectionDetail from "../components/multi_form/AddElectionDetail";
import AddCandidateDetail from "../components/multi_form/AddCandidateDetail";
import Stepper from "../components/multi_form/Stepper";
import StepperControl from "../components/multi_form/StepperControl";
import SuccessfullySaved from "../components/multi_form/SuccessfullySaved";
import { StepperContext } from "../components/multi_form/context/StepperContext";

const electionDetail = {
  electionTitle: "",
  electionPicture: "",
  electionCreator: "",
  electionStart: "",
  eletionEnd: "",
  electionDescription: "",
  electionTotalCandidates: "",
};

const candidateDetail = {
  candidateName: "",
  candidatePhoto: "",
  candidateVision: "",
  candidateMission: "",
};

const candidateDetailArray = [];

const steps = ["Election Detail", "Candidates Detail", "Complete"];

const renderStep = (step) => {
  switch (step) {
    case 1:
      return <AddElectionDetail />;
    case 2:
      return <AddCandidateDetail />;
    case 3:
      return <SuccessfullySaved />;
    default:
      null;
  }
};

const CreateNewElection = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [addElectionDetail, setAddElectionDetail] = useState(electionDetail);
  const [addCandidateDetail, setAddCandidateDetail] =
    useState(candidateDetailArray);

  const handleClick = (direction) => {
    let newStep = currentStep;
    direction == "next" ? newStep++ : newStep--;
    newStep > 0 && newStep <= steps.length && setCurrentStep(newStep);
  };

  return (
    <div className="">
      <div className="fixed flex items-center justify-center w-screen h-screen inset-0 bg-black bg-opacity-50 transform transition-transform duration-300 popup-visible overflow-y-auto max-h-[calc(100vh-20px)]">
        <div className="h-1/2 w-screen font-poppins shadow-xl rounded-2xl pb-2 bg-white">
          <div className="mt-5">
            <Stepper steps={steps} currentStep={currentStep} />

            <div className="my-10 p-10">
              <StepperContext.Provider
                value={{
                  addElectionDetail,
                  setAddElectionDetail,
                  addCandidateDetail,
                  setAddCandidateDetail,
                }}
              >
                {renderStep(currentStep)}
              </StepperContext.Provider>
            </div>
          </div>
          <StepperControl
            handleClick={handleClick}
            steps={steps}
            currentStep={currentStep}
          />
        </div>
      </div>
    </div>
  );
};

export default CreateNewElection;
