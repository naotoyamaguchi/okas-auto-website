// import { SOME_ACTION } from '../actions';

const initialState = {
	sumStateKey: "sumStateValue"
};

function reducerFunctionName(state = initialState, action){
	switch(action.type){
		case "SOME_ACTION":
		return Object.assign({}, state, {
			sumStateKey: {
				sumStateKey: action.sum_action_value
			}
		});

		default: return state;
	}
}

export default reducerFunctionName;