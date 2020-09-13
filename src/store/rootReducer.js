import userReducer from './userReducer';
import donationReducer from './donationReducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
    user: userReducer,
    donation: donationReducer
});

export default rootReducer;