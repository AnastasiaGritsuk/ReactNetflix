import { combineReducers } from 'redux';

import SearchReducer from '../containers/searchContainer/searchData/searchReducer';

const rootReducer = combineReducers({
    searchPage: SearchReducer
});

export default rootReducer;