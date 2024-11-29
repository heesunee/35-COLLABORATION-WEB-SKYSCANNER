import React from 'react';
import styled from 'styled-components';

interface props {
	value: string;
	Icon: React.ComponentType;
	placeholder: string;
	onChange: () => void;
	onClick: (modal: 'search' | 'calender') => void;
	onChangeAbleCity: (city: string | null) => void;
}

const SearchTextField = ({ value, Icon, placeholder, onChange, onClick, onChangeAbleCity }: props) => {
	return (
		<SearchTextFieldWrapper
			onClick={() => {
				onClick('search');
				onChangeAbleCity(null);
				onChange();
			}}
		>
			<Icon />
			<TextField placeholder={placeholder} value={value} />
		</SearchTextFieldWrapper>
	);
};

export default SearchTextField;

const SearchTextFieldWrapper = styled.div`
	display: flex;
	align-items: center;
	width: 100%;
	gap: 0.5rem;
	padding: 0.8rem 1rem;
	border-radius: 1.1rem;
	background-color: ${({ theme }) => theme.colors.white};
	cursor: text;
`;

const TextField = styled.input`
	color: ${({ theme }) => theme.colors.black};

	${({ theme }) => theme.fonts.body2_sb_14};

	width: 100%;
	border: none;
	outline: none;

	::placeholder {
		color: ${({ theme }) => theme.colors.grey40};
	}
`;
