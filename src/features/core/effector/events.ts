import { eventFactory, watchHelper } from 'src/utils';
import { Core } from '../core';
import { $geolocation, $initLoading } from './store';

export const setInitLoadingEvent = eventFactory<boolean>({
	storeElement: $initLoading,
});

export const setGeolocationEvent = eventFactory<Core.Geolocation>({
	storeElement: $geolocation,
});

watchHelper({
	storeElement: $geolocation,
	name: '$geolocation',
});

watchHelper({
	storeElement: $initLoading,
	name: '$initLoading',
});
