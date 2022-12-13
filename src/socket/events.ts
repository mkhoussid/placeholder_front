const events = {
	EMIT: {
		CLIENT_SEND_MESSAGE: 'client_send_message',
		CLIENT_FETCH_MESSAGES: 'client_fetch_messages',
		CLIENT_MARK_READ: 'client_mark_read',
	},
	ON: {
		SERVER_MESSAGE_SENT: 'server_message_sent',
		SERVER_ERROR: 'server_error',
		SERVER_MESSAGES: 'server_messages',
	},
	COMMON: {
		CONNECT: 'connect',
		CONNECT_ERROR: 'connect_error',
		DISCONNECT: 'disconnect',
	},
} as const;

export default events;
