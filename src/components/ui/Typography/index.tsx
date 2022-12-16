import * as React from 'react';
import styled from '@emotion/styled';
import FlexContainer, { TFlexContainer } from '../FlexContainer';
import { useTheme } from '@emotion/react';
import { useOutletContext } from 'react-router-dom';

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
	containerProps?: TFlexContainer;
	gutterBottom?: boolean;
	variant?: ETypographyVariant;
} & React.HtmlHTMLAttributes<HTMLParagraphElement>;
const Typography = React.memo(
	({
		containerProps,
		variant = ETypographyVariant.PRIMARY,
		size = ETypographySize.MD,
		gutterBottom = false,
		...props
	}: TypographyProps) => {
		const { isMobile } = useOutletContext();
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
			<Container gutterBottom={gutterBottom} {...containerProps}>
				<Text
					size={size}
					variant={variant}
					typographySizeMap={typographySizeMap}
					typographyVariantMap={typographyVariantMap}
					{...props}
				/>
			</Container>
		);
	},
);

export default Typography;

const Container = styled(FlexContainer)<{ gutterBottom: boolean }>`
	${({ gutterBottom }) => `
		margin-bottom: ${gutterBottom ? 1 : 0}rem;
		text-align: center;
	`}
`;

const Text = styled.p<{
	size: ETypographySize;
	variant: ETypographyVariant;
	typographySizeMap: Record<ETypographySize, number>;
	typographyVariantMap: Record<ETypographyVariant, string>;
}>`
	${({ size, variant, typographySizeMap, typographyVariantMap }) => `
		font-size: ${typographySizeMap[size]}rem;
		color: ${typographyVariantMap[variant]};
	`}
`;