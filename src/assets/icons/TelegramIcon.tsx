import * as React from 'react';
import { IconProps } from '.';

const TelegramIcon = React.memo(({ fillColor = '#28A7E9' }: IconProps) => {
	const fill = fillColor || '#232323';

	return (
		<svg width={'100%'} height={'100%'} focusable="false" viewBox="0 0 24 24" fill={fill}>
			<path d="M9.78 18.65l.28-4.23 7.68-6.92c.34-.31-.07-.46-.52-.19L7.74 13.3 3.64 12c-.88-.25-.89-.86.2-1.3l15.97-6.16c.73-.33 1.43.18 1.15 1.3l-2.72 12.81c-.19.91-.74 1.13-1.5.71L12.6 16.3l-1.99 1.93c-.23.23-.42.42-.83.42z"></path>
		</svg>
	);
});

export default TelegramIcon;
