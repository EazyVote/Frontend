

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

const structuredElections = async (elections) => {

}

const structuredCandidates = async (candidates) => {

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