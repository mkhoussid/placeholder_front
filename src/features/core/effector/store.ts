import { createStore } from 'effector';
import { TServerErrorMatrixContent } from 'src/constants';
import { Core } from '../core';

export const $initLoading = createStore(true);

export const $serverError = createStore<TServerErrorMatrixContent>(null);

export const $geolocation = createStore<Core.Geolocation>(
	{
		country: null,
		state: null,
	},
	{
		updateFilter: (geolocation) => Boolean(geolocation?.country && geolocation?.state),
	},
);
