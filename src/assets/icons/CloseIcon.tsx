import * as React from 'react';
import { IconProps } from '.';

const CloseIcon = React.memo(({ fillColor }: IconProps) => {
	const fill = fillColor || '#232323';

	return (
		<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
			<path
				fillRule="evenodd"
				clipRule="evenodd"
				d="M10.3444 10.3431C9.95383 10.7337 9.95383 11.3668 10.3444 11.7574L14.587 16L10.3444 20.2426C9.95383 20.6332 9.95383 21.2663 10.3444 21.6569C10.7349 22.0474 11.368 22.0474 11.7586 21.6569L16.0012 17.4142L20.2438 21.6569C20.6344 22.0474 21.2675 22.0474 21.6581 21.6569C22.0486 21.2663 22.0486 20.6332 21.6581 20.2426L17.4154 16L21.6581 11.7574C22.0486 11.3668 22.0486 10.7337 21.6581 10.3431C21.2675 9.95262 20.6344 9.95262 20.2438 10.3431L16.0012 14.5858L11.7586 10.3431C11.368 9.95262 10.7349 9.95262 10.3444 10.3431Z"
				fill={fill}
			/>
		</svg>
	);
});

export default CloseIcon;
