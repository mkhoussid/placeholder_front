import { eventFactory, watchHelper } from 'src/utils';
import { Auth } from '../auth';
import { $authEmailValue, $user } from './store';

export const setUserEvent = eventFactory<Auth.User>({
	storeElement: $user,
});

export const setAuthEmailValueEvent = eventFactory<string>({
	storeElement: $authEmailValue,
});

watchHelper({
	storeElement: $user,
	name: '$user',
});

watchHelper({
	storeElement: $authEmailValue,
	name: '$authEmailValue',
});
