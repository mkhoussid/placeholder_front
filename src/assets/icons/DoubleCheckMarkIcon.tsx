import * as React from 'react';
import { IconProps } from '.';

const DoubleCheckMarkIcon = React.memo(({ fillColor }: IconProps) => {
	const fill = fillColor || '#232323';

	return (
		<svg viewBox="0 0 24 24" width="100%" height="100%">
			<path
				d="m18 7-1.41-1.41-6.34 6.34 1.41 1.41L18 7zm4.24-1.41L11.66 16.17 7.48 12l-1.41 1.41L11.66 19l12-12-1.42-1.41zM.41 13.41 6 19l1.41-1.41L1.83 12 .41 13.41z"
				fill={fill}
			/>
		</svg>
	);
});

export default DoubleCheckMarkIcon;
