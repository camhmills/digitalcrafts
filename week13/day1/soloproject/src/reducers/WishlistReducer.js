const initialState = [];

function WishList(state = initialState, action) {
    switch (action.type) {
        case "PUT_WISHLIST":
            const newState = [...state, action.payload];
            return newState;
        default:
            return state;
    }
}

export default WishList;