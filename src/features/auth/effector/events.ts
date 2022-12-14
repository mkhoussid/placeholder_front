import { eventFactory, watchHelper } from 'src/utils';
import { Auth } from '../auth';
import { $user } from './store';

export const setUserEvent = eventFactory<Auth.User>({
	storeElement: $user,
});

watchHelper({
	storeElement: $user,
	name: '$user',
});
