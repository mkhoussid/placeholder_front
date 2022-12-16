import { TServerErrorMatrixContent } from 'src/constants';
import { eventFactory, watchHelper } from 'src/utils';
import { Core } from '../core';
import { $geolocation, $initLoading, $serverError } from './store';

export const setInitLoadingEvent = eventFactory<boolean>({
	storeElement: $initLoading,
});

export const setGeolocationEvent = eventFactory<Core.Geolocation>({
	storeElement: $geolocation,
});

export const setServerErrorEvent = eventFactory<TServerErrorMatrixContent>({
	storeElement: $serverError,
});

watchHelper({
	storeElement: $geolocation,
	name: '$geolocation',
});

watchHelper({
	storeElement: $initLoading,
	name: '$initLoading',
});

watchHelper({
	storeElement: $serverError,
	name: '$serverError',
});
