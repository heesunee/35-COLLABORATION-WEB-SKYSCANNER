import { flexCssGenerator } from '@/styles/customStyle.ts';
import React from 'react';
import styled, { css } from 'styled-components';

interface props {
	onClick: () => void;
	variant?: 'default' | 'confirm' | 'search' | 'disable';
	size?: 'default' | 'pricemodal';
	children: React.ReactNode;
}

interface StyledProps {
	variant?: 'default' | 'clicked' | 'search' | 'disable';
	size?: 'default' | 'pricemodal';
}

/**
 * @description 버튼 컴포넌트
 * @param content 버튼 안에 내용
 * @param variant 버튼 스타일 종류
 * @param size 버튼 사이즈
 * @param onClick 버튼 클릭 이벤트
 * @constructor
 */

const Button = ({ children, variant = 'default', size = 'default', onClick }: props) => {
	return (
		<ButtonContainer onClick={onClick} variant={variant} size={size}>
			{children}
		</ButtonContainer>
	);
};

const ButtonStyles = {
	default: css`
		width: 100%;
		${flexCssGenerator('flex', 'center', 'center', 'column')}
		border-radius: 1.1rem;
		background: ${({ theme }) => theme.colors.skyblue};
		color: ${({ theme }) => theme.colors.white};
		cursor: pointer;
	`,
	confirm: css`
		// 확인 버튼
		gap: 1rem;
		flex-shrink: 0;
	`,
	search: css`
		// 검색 버튼
	`,
	disable: css`
		// 비활성화 버튼
		background: ${({ theme }) => theme.colors.grey30};
		color: ${({ theme }) => theme.colors.black};
	`,
};

const ButtonSizes = {
	default: css`
		height: 3.9rem;
		width: 100%;
		${({ theme }) => theme.fonts.body2_sb_14};
	`,
	pricemodal: css`
		height: 3.9rem;
		width: 100%;
		${({ theme }) => theme.fonts.body1_sb_16};
	`,
};

const ButtonContainer = styled.div<StyledProps>`
	${ButtonStyles.default}
	${(props) => props.variant && ButtonStyles[props.variant]}
  ${(props) => props.size && ButtonSizes[props.size]}
`;

export default Button;
