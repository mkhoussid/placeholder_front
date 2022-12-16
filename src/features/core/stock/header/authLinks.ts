import { Core } from '../../core';

const authLinks = (dictionary: Core.Dictionary): Core.HeaderLink[] =>
	!dictionary
		? []
		: [
				{
					label: dictionary.CORE.HEADER.PROFILE,
					uri: '/profile',
				},
				{
					label: dictionary.CORE.HEADER.LOGOUT,
					uri: '/logout',
				},
		  ];

export default authLinks;
