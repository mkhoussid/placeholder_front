import { eventFactory, watchHelper } from 'src/utils';
import { Toastr } from '../types';
import { $isToastrExpiring, $showToastr, $toastrContent } from './store';

export const setShowToastrEvent = eventFactory<boolean>({
	storeElement: $showToastr,
});

export const setToastrContentEvent = eventFactory<Toastr.Content>({
	storeElement: $toastrContent,
});

export const setIsToastrExpiringEvent = eventFactory<boolean>({
	storeElement: $isToastrExpiring,
});

watchHelper({
	storeElement: $showToastr,
	name: '$showToastr',
});

watchHelper({
	storeElement: $toastrContent,
	name: '$toastrContent',
});

watchHelper({
	storeElement: $isToastrExpiring,
	name: '$isToastrExpiring',
});
