import { ActionBase } from 'src/global';
import { Toastr } from '../types';
import { setIsToastrExpiringEvent, setToastrContentEvent } from './events';

export const setToastrContent = ({ payload: { toastrContent } }: ActionBase<{ toastrContent: Toastr.Content }>) => {
	setToastrContentEvent(toastrContent);
};

export const setIsToastrExpiring = ({ payload: { isToastrExpiring } }: ActionBase<{ isToastrExpiring: boolean }>) => {
	setIsToastrExpiringEvent(isToastrExpiring);
};
