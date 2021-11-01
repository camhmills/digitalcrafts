import { ADD_TO_CART, REMOVE_FROM_CART } from '../actiontypes/cartActions'

const initialState = [];

const CartData = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TO_CART:
            return [...state, action.payload];
        case REMOVE_FROM_CART:
            const originalState = state;
            const newState = originalState.filter(item => item.name !== action.payload);
            return newState;
        default: 
            return state;
    }
}

export default CartData;