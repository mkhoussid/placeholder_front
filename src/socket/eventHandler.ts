import { Dispatch } from 'redux';
import events from './events';

type TSocketEventHandlerClient = {
	dispatch: Dispatch<any>;
	event: string;
	data?: { [key: string]: any };
};

const socketEventHandlerClient =
	({ dispatch, event }: TSocketEventHandlerClient) =>
	(data?: any) => {
		if (process.env.NODE_ENV !== 'production') {
			console.log('client event', event, data);
		}

		let timeout = null;

		switch (event) {
			case events.COMMON.CONNECT: {
				const { deviceId } = data;

				break;
			}
			case events.COMMON.CONNECT_ERROR: {
				const err = data.err;
				break;
			}
			case events.COMMON.DISCONNECT: {
				break;
			}

			default: {
				throw new Error(`Unknown event - ${event}`);
			}
		}
	};

export default socketEventHandlerClient;
