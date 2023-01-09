import { eventFactory, watchHelper } from 'src/utils';
import { Auth } from '../auth';
import { $authCodeValue, $authEmailValue, $isLoginSelectionScreen, $user } from './store';

export const resetAuthPage = eventFactory<void>();

export const setUserEvent = eventFactory<Auth.User>({
	storeElement: $user,
});

export const setAuthEmailValueEvent = eventFactory<string>({
	storeElement: $authEmailValue,
	resetOn: resetAuthPage,
});

export const setIsLoginSelectionScreenEvent = eventFactory<boolean>({
	storeElement: $isLoginSelectionScreen,
	resetOn: resetAuthPage,
});

export const setAuthCodeValueEvent = eventFactory<string[]>({
	storeElement: $authCodeValue,
	resetOn: resetAuthPage,
});

watchHelper({
	storeElement: $user,
	name: '$user',
});

watchHelper({
	storeElement: $authEmailValue,
	name: '$authEmailValue',
});

watchHelper({
	storeElement: $isLoginSelectionScreen,
	name: '$isLoginSelectionScreen',
});

watchHelper({
	storeElement: $authCodeValue,
	name: '$authCodeValue',
});
