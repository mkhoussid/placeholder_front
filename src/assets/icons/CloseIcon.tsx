import * as React from 'react';
import { IconProps } from '.';

const CloseIcon = React.memo(({ fillColor }: IconProps) => {
	const fill = fillColor || '#232323';

	return (
		<svg aria-hidden='true' viewBox='0 0 14 16'>
			<path
				fill-rule='evenodd'
				d='M7.71 8.23l3.75 3.75-1.48 1.48-3.75-3.75-3.75 3.75L1 11.98l3.75-3.75L1 4.48 2.48 3l3.75 3.75L9.98 3l1.48 1.48-3.75 3.75z'
				fill={fill}
			/>
		</svg>
	);
});

export default CloseIcon;
