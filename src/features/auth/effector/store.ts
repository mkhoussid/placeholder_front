import { createStore } from 'effector';
import { Auth } from '../auth';

export const $user = createStore<Auth.User>(null, {
	updateFilter: (user) => !!user,
});

export const $authEmailValue = createStore<string>('');

export const $isLoginSelectionScreen = createStore<boolean>(true);

export const $authCodeValue = createStore<string[]>([]);
