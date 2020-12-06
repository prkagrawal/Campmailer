import axios from 'axios';
import { FETCH_USER, FETCH_SURVEYS } from './types';

export const fetchUser = () => {
	return async (dispatch) => {
		const res = await axios.get('api/current_user');
		dispatch({ type: FETCH_USER, payload: res.data });
	};
}

// Handle token from Stripe API
export const handleToken = token => async dispatch => {
	const res = await axios.post("/api/stripe", token);
	dispatch({ type: FETCH_USER, payload: res.data });
};