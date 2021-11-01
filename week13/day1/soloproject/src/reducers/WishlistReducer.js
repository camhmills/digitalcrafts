import { 
    REMOVE_FROM_WISHLIST,
    PUT_WISHLIST
} from '../actions/wishlistActions'

const initialState = [];

function WishList(state = initialState, action) {
    switch (action.type) {
        case PUT_WISHLIST:
            return [...state, action.payload];
        case REMOVE_FROM_WISHLIST:
            const originalState = state;
            const newState = originalState.filter(item => item.name !== action.payload)
            return newState;
        default:
            return state;
    }
}

export default WishList;