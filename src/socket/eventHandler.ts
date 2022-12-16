import events from './events';

type TSocketEventHandlerClient = {
	event: string;
	data?: { [key: string]: any };
};

const socketEventHandlerClient =
	({ event }: TSocketEventHandlerClient) =>
	(data?: any) => {
		if (import.meta.env.DEV) {
			console.log('client event', event, data);
		}

		const timeout = null;

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
