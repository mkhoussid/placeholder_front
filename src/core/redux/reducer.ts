import { AnyAction } from 'redux';
import { SET_PAGE_ERROR, SET_INIT_LOADING } from './types';

export type TPageError = {
	title: string;
	description: string;
} | null;

export interface ICoreState {
	pageError: TPageError;
	initLoading: boolean;
}

const initialState = {
	pageError: null,
	initLoading: true,
};

const coreReducer = (state: ICoreState = initialState, action: AnyAction): ICoreState => {
	const { type, payload } = action;

	switch (type) {
		case SET_PAGE_ERROR:
			return {
				...state,
				pageError: payload,
			};

		case SET_INIT_LOADING:
			return {
				...state,
				initLoading: payload,
			};

		default:
			return {
				...state,
			};
	}
};

export default coreReducer;
