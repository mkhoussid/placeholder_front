import { eventFactory, watchHelper } from 'src/utils';
import { Toastr } from '../types';
import { $isToastrExpiring, $toastrContent } from './store';

export const setToastrContentEvent = eventFactory<Toastr.Content>({
	storeElement: $toastrContent,
});

export const setIsToastrExpiringEvent = eventFactory<boolean>({
	storeElement: $isToastrExpiring,
});

watchHelper({
	storeElement: $toastrContent,
	name: '$toastrContent',
});

watchHelper({
	storeElement: $isToastrExpiring,
	name: '$isToastrExpiring',
});
