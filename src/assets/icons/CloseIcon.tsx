import * as React from 'react';
import { IconProps } from '.';

const CloseIcon = React.memo(({ fillColor }: IconProps) => {
	const fill = fillColor || '#232323';

	return (
		<svg viewBox='0 0 24 24'>
			<path
				d='M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z'
				fill={fill}
			/>
		</svg>
	);
});

export default CloseIcon;
