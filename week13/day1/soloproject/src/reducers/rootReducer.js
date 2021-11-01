import {combineReducers} from 'redux';
import HomeReducer from './HomeReducer';
import WishList from './WishlistReducer';
import CartData from './CartReducer'

const rootReducer = combineReducers({
    HomeReducer,
    WishList,
    CartData
})

export default rootReducer;