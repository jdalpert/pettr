import { combineReducers } from 'redux';

import childReducer from './child.reducer';

const rootReducer = combineReducers({
	list: childReducer
});

export default rootReducer;
