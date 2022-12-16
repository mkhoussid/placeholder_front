import { createStore } from 'effector';
import { TServerErrorMatrixContent } from 'src/constants';
import { Core } from '../core';
import stockLinks from '../stock/header/stockLinks';

export const $initLoading = createStore(true);

export const $isMobile = createStore(false);

export const $serverError = createStore<TServerErrorMatrixContent>(null);

export const $dictionary = createStore<Core.Dictionary>(null, {
	updateFilter: (dictionary) => !!dictionary,
});

export const $geolocation = createStore<Core.Geolocation>(
	{
		country: null,
		state: null,
	},
	{
		updateFilter: (geolocation) => Boolean(geolocation?.country && geolocation?.state),
	},
);

export const $headerLinks = createStore<Core.HeaderLink[]>([]);
