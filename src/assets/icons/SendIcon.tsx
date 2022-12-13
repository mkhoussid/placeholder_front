import * as React from 'react';
import { IconProps } from '.';

const SendIcon = React.memo(({ fillColor }: IconProps) => {
	const fill = fillColor || '#232323';

	return (
		<svg viewBox="0 0 24 24" width="100%" height="100%">
			<path d="M2.01 21 23 12 2.01 3 2 10l15 2-15 2z" fill={fill} />
		</svg>
	);
});

export default SendIcon;
