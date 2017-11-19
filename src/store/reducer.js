import { combineReducers } from 'redux';

import SearchReducer from '../containers/searchContainer/searchData/searchReducer';

const rootReducer = combineReducers({
    searchContainer: SearchReducer
});

export default rootReducer;