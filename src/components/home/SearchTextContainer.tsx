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
			<SearchTextFieldWrapper>
				{Icon && <Icon />}
				<SearchTextField placeholder={placeholder} />
			</SearchTextFieldWrapper>

			<CheckboxCaption isClicked={isClicked} onClick={onClick}>
				{isClicked ? <CheckboxFilledIcon /> : <CheckboxEmptyIcon />}
				{caption}
			</CheckboxCaption>
		</>
	);
};

export default SearchTextContainer;

const SearchTextFieldWrapper = styled.div`
	display: flex;
	align-items: center;
	gap: 0.5rem;
	padding: 0.8rem 1rem;
	border-radius: 4px;
	background-color: ${({ theme }) => theme.colors.white};
	cursor: text;
`;

const SearchTextField = styled.input`
	color: ${({ theme }) => theme.colors.black};

	${({ theme }) => theme.fonts.body2_sb_14};

	border: none;
	outline: none;

	::placeholder {
		color: ${({ theme }) => theme.colors.grey40};
	}
`;
const CheckboxCaption = styled.div<StyledProps>`
	display: flex;
	flex-direction: row;
	align-items: center;
	padding: 0.8rem 0 1.1rem;
	gap: 0.5rem;
	cursor: pointer;

	color: ${({ theme }) => theme.colors.white};
	${({ theme }) => theme.fonts.body2_sb_14};
`;
