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
    <div className="font-poppins shadow-xl rounded-2xl pb-2">
      <div className="mt-5">
        <Stepper steps={steps} currentStep={currentStep} />

        <div>
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
  );
};

export default CreateNewElection;
