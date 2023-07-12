export enum UserActionTypes {
	FETCH_USERS = 'FETCH_USERS',
	FETCH_USERS_SUCCESS = 'FETCH_USERS_SUCCESS',
	FETCH_USERS_ERROR = 'FETCH_USERS_ERROR'
}
export interface UserState {
	users: any[];
	loading: boolean;
	error: null | string;
}
interface UserFetchAction {
	type: UserActionTypes.FETCH_USERS;
}
interface UserFetchSuccessAction {
	type: UserActionTypes.FETCH_USERS_SUCCESS;
	payload: any[]
}
interface UserFetchErrorAction {
	type: UserActionTypes.FETCH_USERS_ERROR;
	payload: string
}
export type UserAction = UserFetchAction | UserFetchSuccessAction | UserFetchErrorAction
