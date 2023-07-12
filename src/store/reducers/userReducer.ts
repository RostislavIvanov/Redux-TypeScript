import { UserAction, UserActionTypes, UserState } from "../../types/user";

const initialState: UserState = {
	users: [],
	loading: false,
	error: null
};

export const userReducer = (action: UserAction, state = initialState): UserState => {
	if (!action) {
		return state;
	}
	switch (action.type) {
		case UserActionTypes.FETCH_USERS:
			return {
				users: [],
				loading: true,
				error: null
			};
		case UserActionTypes.FETCH_USERS_SUCCESS:
			if (action.payload) {
				return {
					users: action.payload,
					loading: false,
					error: null
				};
			} else {
				return {
					users: [],
					loading: false,
					error: "No users found"
				};
			}
		case UserActionTypes.FETCH_USERS_ERROR:
			return {
				users: [],
				loading: false,
				error: action.payload
			};
		default:
			return state;
	}
};