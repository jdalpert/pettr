import { CHANGE, GRAB, GRAB2, DELETE, LOGINUSER, GETINFO } from "../actions/constants";

const initial_state = {
	data: ""
};

export default function(state = initial_state, action){

	switch(action.type) {
		case CHANGE:
			return {...state, data: action.payload};

		case GRAB:
			return {...state, data: action.payload.data};

		case GRAB2:
			return {...state, data: action.payload.data};
		
		case LOGINUSER:
			return {...state, data: action.payload.data};
		
		case GETINFO:
			return {...state, data: action.payload.data};

		case DELETE:
			return {...state, data: action.payload.data};

		default:
			return state 
	}
}
