import {combineReducers} from 'redux';
import HomeReducer from './HomeReducer';
import WishList from './WishlistReducer';

const rootReducer = combineReducers({
    HomeReducer,
    WishList,
})

export default rootReducer;