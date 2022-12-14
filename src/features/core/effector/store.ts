import { createStore } from 'effector';
import { Core } from '../core';

export const $initLoading = createStore(true);

export const $geolocation = createStore<Core.Geolocation>(
	{
		country: null,
		state: null,
	},
	{
		updateFilter: (geolocation) => Boolean(geolocation?.country && geolocation?.state),
	},
);
