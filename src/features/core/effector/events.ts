import { TServerErrorMatrixContent } from 'src/constants';
import { eventFactory, watchHelper } from 'src/utils';
import { Core } from '../core';
import { $geolocation, $headerLinks, $initLoading, $isMobile, $serverError } from './store';

export const setInitLoadingEvent = eventFactory<boolean>({
	storeElement: $initLoading,
});

export const setIsMobileEvent = eventFactory<boolean>({
	storeElement: $isMobile,
});

export const setGeolocationEvent = eventFactory<Core.Geolocation>({
	storeElement: $geolocation,
});

export const setServerErrorEvent = eventFactory<TServerErrorMatrixContent>({
	storeElement: $serverError,
});

export const setHeaderLinksEvent = eventFactory<Core.HeaderLink[]>({
	storeElement: $headerLinks,
});

watchHelper({
	storeElement: $initLoading,
	name: '$initLoading',
});

watchHelper({
	storeElement: $isMobile,
	name: '$isMobile',
});

watchHelper({
	storeElement: $geolocation,
	name: '$geolocation',
});

watchHelper({
	storeElement: $serverError,
	name: '$serverError',
});

watchHelper({
	storeElement: $headerLinks,
	name: '$headerLinks',
});
