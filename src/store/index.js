import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

import userReducer from './reducers/userReducer';
import donationReducer from './reducers/donationReducer';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;


const rootReducer = combineReducers({
    user: userReducer,
    donation: donationReducer
});


const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));


export default store;