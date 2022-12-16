import { Core } from '../../core';

const authLinks: Core.HeaderLink[] = [
	{
		label: 'Мои сайты',
		uri: '/profile',
	},
	{
		label: 'Выход',
		uri: '/logout',
	},
];

export default authLinks;
