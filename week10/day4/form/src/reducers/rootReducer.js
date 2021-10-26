import { combineReducers } from 'redux';

import userDataReducer from './userDataReducer';
import LoginFormData from './userReducer';

const rootReducer = combineReducers({
    userDataReducer,
    LoginFormData,
});

export default rootReducer;