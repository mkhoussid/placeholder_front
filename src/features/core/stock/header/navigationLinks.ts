import { uris } from 'src/router';
import { Core } from '../../core';

const navigationLinks = (dictionary: Core.Dictionary): Core.HeaderLink[] =>
	!dictionary
		? []
		: [
				{
					label: dictionary.CORE.HEADER.HOME,
					uri: uris.ROOT,
				},
		  ];

export default navigationLinks;
