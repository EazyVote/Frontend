import React from "react";
// import { Link } from "react-router-dom";

const ElectionCard = ({ id, election }) => {
  return (
    <div>
      <div
        id="elections"
        className="font-poppins rounded-lg hover:scale-105 duration-500 shadow-lg election-gradient m-4 lg:w-80"
      >
        {/* <Link to={"/projects/" + project.index}> */}
        <img
          src={election.electionPicture}
          alt={election.electionTitle}
          className="rounded-xl h-56 w-full object-cover md:h-64 lg:h-64"
        />
        <div className="p-4">
          <h5 className="text-white font-semibold line-clamp-1">
            {election.electionTitle}
          </h5>
          <div>
            <div className="flex justify-between items-center">
              <img
                src={`https://api.dicebear.com/9.x/adventurer/svg?seed=${election.electionCreator}`}
                className="w-6 h-6 bg-center md:w-16 md:-12 lg:w-12 lg:h-12"
                alt="avatar"
              />
              <small className="text-dimWhite">
                {" "}
                {election.electionCreator}
                {/* {truncate(project.owner, 4, 4, 11)} */}
              </small>
            </div>
            <small className="text-white my-2 block">
              {/* {new Date().getTime() > Number(project.expiredAt + "000")
              ? "Expired"
              : remainingDay(project.expiredAt)}
            {""} */}
              Start : {election.electionStart}
            </small>
            <small className="text-white mb-2 block">
              {/* {new Date().getTime() > Number(project.expiredAt + "000")
              ? "Expired"
              : remainingDay(project.expiredAt)}
            {""} */}
              End : {election.electionEnd}
            </small>
            {/* <small className="font-normal text-white">
                What's this election about ?
            </small>
            <small className="font-normal text-dimWhite line-clamp-2">
                {election.electionDescription}
            </small> */}
          </div>

          <div className="flex justify-between items-center flex-wrap mt-4 mb-2 text-gray-500 font-semibold">
            {/* <small>{project.backers} {(project.backers == 0 || project.backers == 1) ? 'Backer' : 'Backers'} </small>
          <div>
            <small className={new Date().getTime() > Number(project.expiredAt + "000") ? "text-gray-600" : "text-indigo-600"}>{new Date().getTime() > Number(project.expiredAt + "000") ? "Closed" : "Open"}</small>
          </div> */}
            <small className="text-white">10 person has vote</small>
            <div>
              <small className="text-green-600">OPEN</small>
            </div>
          </div>
        </div>
        {/* </Link> */}
      </div>
    </div>
  );
};

export default ElectionCard;
