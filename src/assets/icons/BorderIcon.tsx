import * as React from 'react';
import { IconProps } from '.';

const BorderIcon = React.memo(({ fillColor }: IconProps) => {
	const fill = fillColor || '#232323';

	return (
		<svg viewBox="0 0 24 24" width="100%" height="100%">
			<path
				d="M3 5v4h2V5h4V3H5c-1.1 0-2 .9-2 2zm2 10H3v4c0 1.1.9 2 2 2h4v-2H5v-4zm14 4h-4v2h4c1.1 0 2-.9 2-2v-4h-2v4zm0-16h-4v2h4v4h2V5c0-1.1-.9-2-2-2z"
				fill={fill}
			/>
		</svg>
	);
});

export default BorderIcon;
