import * as React from 'react';
import { IconProps } from '.';

const CheckMarkIcon = React.memo(({ fillColor, x, y, width, height }: IconProps) => {
	const fill = fillColor || '#232323';

	return (
		<svg viewBox="0 0 24 24" width={width || '100%'} height={height || '100%'} x={x} y={y}>
			<path d="M9 16.17 4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" fill={fill} />
		</svg>
	);
});

export default CheckMarkIcon;
