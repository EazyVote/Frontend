import React, { useEffect, useState } from "react";
import { setGlobalState, useGlobalState } from "../../services/Helper";
import { FaTimes } from "react-icons/fa";
import { getCandidates, voteCandidate } from "../../services/Blockchain";
import { useNavigate } from "react-router-dom";

const CandidateDetail = () => {
  const [candidateDetailScale] = useGlobalState("candidateDetailScale");
  const candidateId = sessionStorage.getItem("candidateId");
  const electionId = sessionStorage.getItem("electionId");
  const connectedAccount = localStorage.getItem("connectedAccount");
  const [candidateData, setCandidateData] = useState({});
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  const onClose = () => {
    setGlobalState("candidateDetailScale", "scale-0");
  };

  const handleClick = async () => {
    try {
      await voteCandidate(connectedAccount, electionId, candidateId);
      reset();
      navigate("/elections");
    } catch (error) {
      console.log(error.message);
    }
  };

  const reset = async () => {
    sessionStorage.removeItem("candidateId");
    sessionStorage.removeItem("electionId");
    setGlobalState("candidateDetailScale", "scale-0");
    setGlobalState("successfullyVoteScale", "scale-100");
  };

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const data = await getCandidates();
        const indexedData = data.find(
          (candidate) => candidate.id === parseInt(candidateId)
        );
        setCandidateData(indexedData);
      } catch (error) {
        console.log(error.message);
        setCandidateData({});
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [candidateId, electionId]);

  if (loading || !candidateData) {
    return <div>Loading...</div>;
  }

  return (
    <div
      className={`fixed font-poppins flex items-center justify-center w-screen h-screen inset-0 bg-black bg-opacity-50 transform transition-transform duration-300 ${candidateDetailScale} popup-visible`}
    >
      <div className="bg-white shadow-xl shadow-black rounded-xl max-w-[60%] max-h-[95%] p-6 overflow-auto">
        <div className="flex flex-col h-full">
          <div className="flex justify-between items-center mb-4">
            <p className="font-bold">Candidate Detail</p>
            <button
              type="button"
              className="border-0 bg-transparent focus:outline-none"
              onClick={onClose}
            >
              <FaTimes />
            </button>
          </div>
          <div className="flex flex-grow justify-center my-5 space-x-8 overflow-auto">
            <div className="flex flex-col items-center w-1/2">
              <p className="font-bold mb-4">Vision</p>
              <p className="text-sm">{candidateData.candidateVision}</p>
            </div>
            <div className="flex flex-col items-center w-1/2">
              <p className="font-bold mb-4">Mission</p>
              <p className="text-sm">{candidateData.candidateMission}</p>
            </div>
          </div>
          <button
            onClick={handleClick}
            type="submit"
            className="duration-200 hover:scale-105 inline-block px-6 py-2.5 mt-2 text-white font-medium rounded-full shadow-md bg-primary"
          >
            Vote {candidateData.candidateName}
          </button>
        </div>
      </div>
    </div>
  );
};

export default CandidateDetail;
