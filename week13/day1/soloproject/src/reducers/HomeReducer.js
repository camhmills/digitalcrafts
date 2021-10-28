import { toolData } from "../data/toolData.js";

const initialState = toolData;

function HomeReducer(state = initialState, action) {
    switch (action.type) {
        default:
            return state;
    }
}

export default HomeReducer;