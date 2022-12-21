import { io, ManagerOptions, SocketOptions } from 'socket.io-client';

import socketEventHandlerClient from './eventHandler';

import events from './events';
import { errorHandler, generateNumberInRange } from 'src/utils';
import { SITE_DEVICE_ID } from 'src/constants';
import { AxiosError } from 'axios';
import { ExtendedAxiosError } from 'src/utils/errorHandler';

export const initSocket = async () => {
	try {
		let deviceId = localStorage.getItem(SITE_DEVICE_ID);

		if (!deviceId) {
			deviceId = generateNumberInRange();

			localStorage.setItem(SITE_DEVICE_ID, deviceId);
		}

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

		const socketClient = io(import.meta.env.VITE_API_ENDPOINT as string, clientSocketConfig());

		socketClient.on(events.COMMON.CONNECT, () => {
			socketEventHandlerClient({ event: events.COMMON.CONNECT })({ deviceId });

			socketClient.emit(events.EMIT.CLIENT_FETCH_MESSAGES, { deviceId });
		});

		socketClient.on(
			events.COMMON.CONNECT_ERROR,
			socketEventHandlerClient({ event: events.COMMON.CONNECT_ERROR }),
		);
		socketClient.on(
			events.COMMON.DISCONNECT,
			socketEventHandlerClient({ event: events.COMMON.DISCONNECT }),
		);

		Object.values(events.ON).forEach((event) =>
			socketClient.on(event, socketEventHandlerClient({ event })),
		);
	} catch (err) {
		console.log('Error caught with socket', err);
		errorHandler({ payload: { err: err as AxiosError<ExtendedAxiosError> | null } });
	}
};
