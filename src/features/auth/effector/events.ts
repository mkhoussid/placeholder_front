import { eventFactory, watchHelper } from 'src/utils';
import { Auth } from '../auth';
import { $authValues, $user } from './store';

export const setUserEvent = eventFactory<Auth.User>({
	storeElement: $user,
});

export const setAuthValuesEvent = eventFactory<Auth.FormValues>({
	storeElement: $authValues,
});

watchHelper({
	storeElement: $user,
	name: '$user',
});

watchHelper({
	storeElement: $authValues,
	name: '$authValues',
});
