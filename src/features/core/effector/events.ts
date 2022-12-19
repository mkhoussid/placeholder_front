import { TServerErrorMatrixContent } from 'src/constants';
import { eventFactory, watchHelper } from 'src/utils';
import { Core } from '../core';
import {
	$geolocation,
	$headerLinks,
	$initLoading,
	$requestLoading,
	$isMobile,
	$serverError,
	$dictionary,
	$inputErrors,
} from './store';

export const setInitLoadingEvent = eventFactory<boolean>({
	storeElement: $initLoading,
});

export const setRequestLoadingEvent = eventFactory<boolean>({
	storeElement: $requestLoading,
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

export const setInputErrorsEvent = eventFactory<string[]>({
	storeElement: $inputErrors,
});

export const setHeaderLinksEvent = eventFactory<{
	navHeaderLinks: Core.HeaderLink[];
	authenticationLinks: Core.HeaderLink[];
}>({
	storeElement: $headerLinks,
});

export const setDictionaryEvent = eventFactory<Core.Dictionary>({
	storeElement: $dictionary,
});

watchHelper({
	storeElement: $initLoading,
	name: '$initLoading',
});

watchHelper({
	storeElement: $requestLoading,
	name: '$requestLoading',
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

watchHelper({
	storeElement: $dictionary,
	name: '$dictionary',
});
