

const connectWallet = async () => {

}

const disconnectWallet = async () => {

}

const createNewElection = async () => {

}

const addNewCandidate = async () => {

}

const voteCandidate = async () => {

}

const getAllCandidates = async (electionId) => {
    
}

const getAllElections = async () => {

}

const getAllFeedbacks = async () => {

}

const structuredElections = async (elections) => {

}

const structuredCandidates = async (candidates) => {

}

const structuredFeedbacks = async (feedbacks) => {

}

const reportError = (error) => {
    console.log(error.message)
    throw new Error(error.message);
}

export {
    connectWallet,
    disconnectWallet,
    createNewElection,
    addNewCandidate,
    voteCandidate
}