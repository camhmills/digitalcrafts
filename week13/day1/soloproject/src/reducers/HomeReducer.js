import { toolData, yarnData } from "../data/toolData.js";

const initialState = [
    toolData,
    yarnData
];

function HomeReducer(state = initialState, action) {
    switch (action.type) {
        default:
            return state;
    }
}

export default HomeReducer;