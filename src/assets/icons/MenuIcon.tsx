import * as React from 'react';

type MenuIconProps = {
	fillColor?: string;
};
const MenuIcon = React.memo(({ fillColor }: MenuIconProps) => {
	const fill = fillColor || '#262626';

	return (
		<svg width='100%' height='100%' viewBox='0 0 32 32' fill='none' xmlns='http://www.w3.org/2000/svg'>
			<rect x='8' y='9' width='16' height='2' rx='1' fill={fill} />
			<rect x='8' y='15' width='16' height='2' rx='1' fill={fill} />
			<rect x='8' y='21' width='16' height='2' rx='1' fill={fill} />
		</svg>
	);
});

export default MenuIcon;
