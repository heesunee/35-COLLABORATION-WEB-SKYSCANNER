import { flexCssGenerator } from '@/styles/customStyle.ts';
import React from 'react';
import styled from 'styled-components';

interface InputFormProps {
	Icon?: React.ComponentType;
	placeholder: string;
}

const InputForm = ({ Icon, placeholder }: InputFormProps) => {
	return (
		<InputFormContainer>
			{Icon && <Icon />}
			<StyledInput type="text" placeholder={placeholder} />
		</InputFormContainer>
	);
};

const InputFormContainer = styled.div`
	${flexCssGenerator('flex', '', 'center')};
	gap: 0.1rem;
	border-radius: 1.1rem;
	border: 0.1rem solid ${({ theme }) => theme.colors.grey30};
	background: ${({ theme }) => theme.colors.white};
	margin-top: 1.9rem;
	min-height: 3.9rem;
	padding: 0.8rem 1rem;
`;

const StyledInput = styled.input`
	flex: 1;
	border: none;
	outline: none;
	color: ${({ theme }) => theme.colors.black};
	${({ theme }) => theme.fonts.body2_sb_14}

	&::placeholder {
		color: ${({ theme }) => theme.colors.grey30};
	}
`;

export default InputForm;
