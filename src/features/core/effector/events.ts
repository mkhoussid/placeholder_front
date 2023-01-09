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
	$layout,
	$landingLogoAnimationCompleted,
	$currentPage,
	$pageAnimationInProgress,
} from './store';

export const setInitLoadingEvent = eventFactory<boolean>({
	storeElement: $initLoading,
});

export const setPageAnimationInProgressEvent = eventFactory<boolean>({
	storeElement: $pageAnimationInProgress,
});

export const setNextPageEvent = eventFactory({
	storeElement: $currentPage,
	onHandler: (n) => n + 1,
});

export const setPreviousPageEvent = eventFactory({
	storeElement: $currentPage,
	onHandler: (n) => n - 1,
});

export const setLandingLogoAnimationCompletedEvent = eventFactory<boolean>({
	storeElement: $landingLogoAnimationCompleted,
});

export const setRequestLoadingEvent = eventFactory<boolean>({
	storeElement: $requestLoading,
});

export const setLayoutEvent = eventFactory<Core.Layout>({
	storeElement: $layout,
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
	storeElement: $pageAnimationInProgress,
	name: '$pageAnimationInProgress',
	print: true,
});

watchHelper({
	storeElement: $currentPage,
	name: '$currentPage',
	print: true,
});

watchHelper({
	storeElement: $landingLogoAnimationCompleted,
	name: '$landingLogoAnimationCompleted',
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
	storeElement: $layout,
	name: '$layout',
});

watchHelper({
	storeElement: $dictionary,
	name: '$dictionary',
});
