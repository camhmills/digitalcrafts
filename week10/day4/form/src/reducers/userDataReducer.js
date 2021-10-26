const initialState = {
    userData: {},
};

const userDataReducer = (state = initialState, action) => {
    switch (action.type) {

        case "GET_USER":
            return { ...state, userData: action.payload };
        default:
            return state;
    }
}

export default userDataReducer;
