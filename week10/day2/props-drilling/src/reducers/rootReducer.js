const initialState = {
    mustang: "1967 Mustang Boss 302",
    fordGt: "2021 Ford GT",
    bugatti: "2021 Bugatti Chiron",
    kawasaki: "ZRX1200"
}


const rootReducer = (state=initialState, action) => {
    switch (action.type) {
        case "GET_BUGATTI":
            return state.bugatti;
        case "GET_FORDGT":
            return state.fordGt
        case "GET_MUSTANG":
            return state.mustang
        case "CHANGE_KAWASAKI":
            return {...state, kawasaki: "Ninja 250"}
    
        default:
           return state;
    }
}

export default rootReducer;