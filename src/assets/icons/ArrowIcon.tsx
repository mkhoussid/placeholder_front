import * as React from 'react';
import { IconProps } from '.';

const ArrowIcon = React.memo(({ fillColor }: IconProps) => {
	const fill = fillColor || '#232323';

	return (
		<svg viewBox="0 0 24 24" width={'100%'} height={'100%'}>
			<path d="m10 17 5-5-5-5v10z" fill={fill} />
		</svg>
	);
});

export default ArrowIcon;
