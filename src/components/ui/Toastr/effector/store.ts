import { createStore } from 'effector';
import { Toastr } from '../types';

export const $isToastrExpiring = createStore(true);

export const $toastrContent = createStore<Toastr.Content>(
	{
		title: '',
		message: '',
	},
	{
		updateFilter: (update) => !!update,
	},
);
