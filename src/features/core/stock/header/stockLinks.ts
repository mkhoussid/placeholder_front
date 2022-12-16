import { Core } from '../../core';

const stockLinks = (dictionary: Core.Dictionary): Core.HeaderLink[] =>
	!dictionary
		? []
		: [
				{
					label: dictionary.CORE.HEADER.LOGIN,
					uri: '/auth/login',
				},
				{
					label: dictionary.CORE.HEADER.ABOUT,
					uri: '/about',
				},
		  ];

export default stockLinks;
