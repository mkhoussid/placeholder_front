import { ThunkAction } from 'src/redux/reducers';
import { SET_SOCKET_INSTANCE } from './types';
import { Socket } from 'socket.io-client';

type TSetSocketClient = {
	payload: {
		client: Socket | null;
	};
};
export const setSocketClient =
	({ payload: { client } }: TSetSocketClient): ThunkAction =>
	(dispatch): void => {
		dispatch({
			type: SET_SOCKET_INSTANCE,
			payload: client,
		});
	};
