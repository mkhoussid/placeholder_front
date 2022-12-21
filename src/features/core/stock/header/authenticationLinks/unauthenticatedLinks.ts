import { uris } from 'src/router';
import { Core } from '../../../core';

const unauthenticatedLinks = (dictionary: Core.Dictionary): Core.HeaderLink[] =>
	!dictionary
		? []
		: [
				{
					label: dictionary.CORE.HEADER.LOGIN,
					uri: uris.AUTH.LOGIN,
					icon: 'LoginIcon',
				},
				{
					label: dictionary.CORE.HEADER.ABOUT,
					uri: uris.ABOUT,
					icon: 'AboutIcon',
				},
		  ];

export default unauthenticatedLinks;
