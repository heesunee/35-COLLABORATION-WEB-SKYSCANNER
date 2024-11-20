import { CheckboxEmptyIcon, CheckboxFilledIcon } from '@/assets/svg';
import React from 'react';
import styled from 'styled-components';

interface props {
	Icon?: React.ComponentType;
	placeholder: string;
	caption: string;
	isClicked: boolean;
	onClick: () => void;
}

interface StyledProps {
	isClicked: boolean;
}

const SearchTextContainer = ({ Icon, placeholder, caption, isClicked, onClick }: props) => {
	return (
		<>
			<SearchTextField>
				{Icon && <Icon />}
				{placeholder}
			</SearchTextField>
			<CheckboxCaption isClicked={isClicked} onClick={onClick}>
				{isClicked ? <CheckboxFilledIcon /> : <CheckboxEmptyIcon />}
				{caption}
			</CheckboxCaption>
		</>
	);
};

export default SearchTextContainer;

const SearchTextField = styled.div`
	color: ${({ theme }) => theme.colors.grey40};
	padding: 0.7rem 1rem;
	border-radius: 11px;
	background-color: ${({ theme }) => theme.colors.white};

	display: flex;
	flex-direction: row;
	align-items: center;

	${({ theme }) => theme.fonts.body2_sb_14};
`;
const CheckboxCaption = styled.div<StyledProps>`
	display: flex;
	flex-direction: row;
	align-items: center;
	padding: 0.8rem 0 1.1rem;
	gap: 0.5rem;

	color: ${({ theme }) => theme.colors.white};
	${({ theme }) => theme.fonts.body2_sb_14};
`;
