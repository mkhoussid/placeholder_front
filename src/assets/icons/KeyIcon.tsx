import * as React from 'react';
import { IconProps } from '.';

const KeyIcon = React.memo(({ fillColor }: IconProps) => {
	const fill = fillColor || '#232323';

	return (
		<svg viewBox='0 0 24 24'>
			<path
				d='M21 10h-8.35C11.83 7.67 9.61 6 7 6c-3.31 0-6 2.69-6 6s2.69 6 6 6c2.61 0 4.83-1.67 5.65-4H13l2 2 2-2 2 2 4-4.04L21 10zM7 15c-1.65 0-3-1.35-3-3s1.35-3 3-3 3 1.35 3 3-1.35 3-3 3z'
				fill={fill}
			/>
		</svg>
	);
});

export default KeyIcon;
