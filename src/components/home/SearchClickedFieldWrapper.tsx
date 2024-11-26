import React from 'react';
import styled from 'styled-components';

interface props {
	Icon: React.ComponentType;
	placeholder: string;
	isClicked: boolean;
	onClick: () => void;
}

const SearchClickedFieldWrapper = ({ Icon, placeholder, onClick }: props) => {
	return (
		<SearchClickedField onClick={onClick}>
			<Icon />
			<TextField>{placeholder}</TextField>
		</SearchClickedField>
	);
};

export default SearchClickedFieldWrapper;

const SearchClickedField = styled.div`
	display: flex;
	align-items: center;
	width: 100%;
	gap: 0.5rem;
	padding: 0.8rem 1rem;
	border-radius: 1.1rem;
	background-color: ${({ theme }) => theme.colors.white};
	cursor: pointer;
`;

const TextField = styled.div`
	color: ${({ theme }) => theme.colors.grey40};

	${({ theme }) => theme.fonts.body2_sb_14};

	width: 100%;
	border: none;
	outline: none;

	::placeholder {
		color: ${({ theme }) => theme.colors.grey40};
	}
`;
