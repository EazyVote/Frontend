import { createGlobalState } from "react-hooks-global-state";

const { setGlobalState, useGlobalState, getGlobalState } = createGlobalState({
    createScale: 'scale-0',
    connectedAccount: '',
    elections: [],
    candidates: []
})

const truncate = (text, startChar, endChar, maxLength) => {
    if (text.length > maxLength) {
        let start = text.substring(0, startChar)
        let end = text.substring(text.length - endChar, text.length)
        while (start.length + end.length < maxLength) {
            start = start + '.'
        }
        return start + end 
    }
    return text 
}

const getRandomId = (min, max) => {
    min = Math.ceil(min);
    max = Math.ceil(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

const remainingTime = () => {

}

export {
    truncate,
    remainingTime,
    setGlobalState,
    useGlobalState,
    getGlobalState,
    getRandomId
}