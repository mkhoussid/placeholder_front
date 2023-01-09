import * as React from 'react';
import styled from '@emotion/styled';
import FlexContainer, { TFlexContainer } from '../FlexContainer';
import { useTheme } from '@emotion/react';
import { useOutletContext } from 'react-router-dom';
import { useStore } from 'effector-react';
import { $isMobile } from 'src/features/core/effector/store';
import * as Icons from 'src/assets/icons';

export enum ETypographySize {
	CAPTION,
	SM,
	MD,
	LG,
	XL,
	XXL,
	XXXL,
	XXXXL,
}
export enum ETypographyVariant {
	PRIMARY,
	SECONDARY,
	BLACK,
	WHITE,
}

type TypographyProps = {
	size?: ETypographySize;
	paragraphProps?: Omit<React.HtmlHTMLAttributes<HTMLParagraphElement>, 'children'>;
	gutterBottom?: boolean;
	variant?: ETypographyVariant;
	icon?: React.ReactNode;
	text: string;
} & React.HtmlHTMLAttributes<HTMLDivElement> &
	TFlexContainer;
const Typography = React.memo(
	({
		paragraphProps,
		variant = ETypographyVariant.PRIMARY,
		size = ETypographySize.MD,
		gutterBottom = false,
		icon,
		text,
		...props
	}: TypographyProps) => {
		const isMobile = useStore($isMobile);
		const theme = useTheme();

		const typographySizeMap = React.useMemo(
			() => ({
				[ETypographySize.CAPTION]: 0.5,
				[ETypographySize.SM]: 0.75,
				[ETypographySize.MD]: 1,
				[ETypographySize.LG]: 1.25,
				[ETypographySize.XL]: 1.5,
				[ETypographySize.XXL]: isMobile ? 1.75 : 2,
				[ETypographySize.XXXL]: 3,
				[ETypographySize.XXXXL]: isMobile ? 4 : 5,
			}),
			[isMobile],
		);

		const typographyVariantMap = React.useMemo(
			() => ({
				[ETypographyVariant.PRIMARY]: theme.palette.primary.main,
				[ETypographyVariant.SECONDARY]: theme.palette.secondary.main,
				[ETypographyVariant.WHITE]: theme.palette.common.white,
				[ETypographyVariant.BLACK]: theme.palette.common.black,
			}),
			[],
		);

		return (
			<Container gutterBottom={gutterBottom} {...props}>
				{icon && (
					<Icons.Icon
						// @ts-ignore
						icon={Icons[icon as any] as any}
						fillColor={theme.palette.common.white}
						disabledButton
					/>
				)}
				<Text
					size={size}
					hasIcon={!!icon}
					variant={variant}
					typographySizeMap={typographySizeMap}
					typographyVariantMap={typographyVariantMap}
					{...paragraphProps}
				>
					{text}
				</Text>
			</Container>
		);
	},
);

export default Typography;

const Container = styled(FlexContainer)<{ gutterBottom: boolean }>`
	${({ gutterBottom }) => `
		margin-bottom: ${gutterBottom ? 1 : 0}rem;
		text-align: center;
		overflow: hidden;
	`}
`;

const Text = styled.p<{
	size: ETypographySize;
	variant: ETypographyVariant;
	typographySizeMap: Record<ETypographySize, number>;
	typographyVariantMap: Record<ETypographyVariant, string>;
	hasIcon: boolean;
}>`
	${({ size, variant, typographySizeMap, typographyVariantMap, hasIcon }) => `
		font-size: ${typographySizeMap[size]}rem;
		color: ${typographyVariantMap[variant]};
		margin-left: ${hasIcon ? 0.25 : 0}rem;
	`}
`;
