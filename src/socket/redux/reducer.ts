import { Socket } from 'socket.io-client';
import { AnyAction } from 'redux';
import { SET_SOCKET_INSTANCE } from './types';

export interface ISocketState {
	client: Socket | null;
}

const initialState = {
	client: null,
};

const socketReducer = (state: ISocketState = initialState, action: AnyAction): ISocketState => {
	const { type, payload } = action;

	switch (type) {
		case SET_SOCKET_INSTANCE:
			return {
				...state,
				client: payload,
			};

		default:
			return {
				...state,
			};
	}
};

export default socketReducer;
