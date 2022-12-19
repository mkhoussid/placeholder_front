import { uris } from 'src/router';
import { Core } from '../../../core';

const authenticatedLinks = (dictionary: Core.Dictionary): Core.HeaderLink[] =>
	!dictionary
		? []
		: [
				{
					label: dictionary.CORE.HEADER.PROFILE,
					uri: uris.PROFILE,
				},
				{
					label: dictionary.CORE.HEADER.LOGOUT,
					uri: uris.AUTH.LOGOUT,
				},
		  ];

export default authenticatedLinks;
