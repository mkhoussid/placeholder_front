import { eventFactory, watchHelper } from 'src/utils';
import { Auth } from '../auth';
import { $authCodeValue, $authEmailValue, $isLoginSelectionScreen, $user } from './store';

export const setUserEvent = eventFactory<Auth.User>({
	storeElement: $user,
});

export const setAuthEmailValueEvent = eventFactory<string>({
	storeElement: $authEmailValue,
});

export const setIsLoginSelectionScreenEvent = eventFactory<boolean>({
	storeElement: $isLoginSelectionScreen,
});

export const setAuthCodeValueEvent = eventFactory<string[]>({
	storeElement: $authCodeValue,
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
	print: true,
});
