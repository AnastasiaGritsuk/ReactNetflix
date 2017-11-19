import { combineReducers } from 'redux';

import SearchReducer from '../containers/searchContainer/searchData/searchReducer';
import DetailsReducer from '../containers/detailsContainer/detailsData/detailsReducer';

const rootReducer = combineReducers({
    searchContainer: SearchReducer,
    detailsContainer: DetailsReducer
});

export default rootReducer;