import { io, ManagerOptions, SocketOptions } from 'socket.io-client';

import socketEventHandlerClient from './eventHandler';
import { ThunkAction } from 'src/redux/reducers';

import events from './events';
import { errorHandler } from 'src/core/redux/actions';
import { SET_SOCKET_INSTANCE } from './redux/types';

type TInitSocket = {
	deviceId: string | null;
};
export const initSocket =
	({ deviceId }: TInitSocket): ThunkAction =>
	async (dispatch): Promise<void> => {
		try {
			const query = {
				deviceId,
			};

			const clientSocketConfig = (): Partial<ManagerOptions & SocketOptions> =>
				({
					reconnectionDelay: 1000,
					reconnection: true,
					reconnectionAttemps: 10,
					transports: ['websocket'],
					agent: false,
					upgrade: false,
					secure: false,
					rejectUnauthorized: false,
					query,
				} as Partial<ManagerOptions & SocketOptions>);

			const GATEWAY = 'http://localhost:5050';

			const socketClient = io(GATEWAY as string, clientSocketConfig());

			socketClient.on(events.COMMON.CONNECT, () => {
				socketEventHandlerClient({ dispatch, event: events.COMMON.CONNECT })({ deviceId });

				socketClient.emit(events.EMIT.CLIENT_FETCH_MESSAGES, { deviceId });
			});

			socketClient.on(
				events.COMMON.CONNECT_ERROR,
				socketEventHandlerClient({ dispatch, event: events.COMMON.CONNECT_ERROR }),
			);
			socketClient.on(
				events.COMMON.DISCONNECT,
				socketEventHandlerClient({ dispatch, event: events.COMMON.DISCONNECT }),
			);

			Object.values(events.ON).forEach((event) =>
				socketClient.on(event, socketEventHandlerClient({ dispatch, event })),
			);

			dispatch({
				type: SET_SOCKET_INSTANCE,
				payload: socketClient,
			});
		} catch (err) {
			console.log('Error caught with socket', err);
			dispatch(errorHandler({ payload: { err } }));
		}
	};
