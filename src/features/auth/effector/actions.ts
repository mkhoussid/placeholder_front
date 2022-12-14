import { Auth } from '../auth';
import { setUserEvent } from './events';

type TSetUser = {
	payload: {
		user: Auth.User;
	};
};
export const setUser = ({ payload: { user } }: TSetUser) => {
	setUserEvent(user);
};
