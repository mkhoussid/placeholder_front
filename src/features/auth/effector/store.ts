import { createStore } from 'effector';
import { Auth } from '../auth';

export const $user = createStore<Auth.User>(null, {
	updateFilter: (user) => !!user,
});

export const $authValues = createStore<Auth.FormValues>({
	login: '',
	password: '',
});
