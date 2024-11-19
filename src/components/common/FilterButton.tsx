import React from 'react';
import styled, { css } from 'styled-components';

interface props {
	content: string;
	Icon?: React.ComponentType;
	isClicked: boolean;
	onClick: () => void;
}

interface StyledProps {
	isClicked: boolean;
}

const FilterButton = ({ content, Icon, isClicked, onClick }: props) => {
	return (
		<FilterButtonContainer isClicked={isClicked} onClick={onClick}>
			{Icon && <Icon />}
			{content}
		</FilterButtonContainer>
	);
};

const ButtonStyles = {
	default: css`
		display: flex;
		height: 2.8rem;
		padding: 0.7rem 1.2rem;
		flex-direction: row;
		align-items: center;
		gap: 0.6rem;

		border-radius: 1.45rem;
		border: 0.1rem solid ${({ theme }) => theme.colors.grey30};
		background: ${({ theme }) => theme.colors.darksky};

		color: ${({ theme }) => theme.colors.white};
		font-size: 1.2rem;
		font-weight: 800;
		cursor: pointer;
	`,
	clicked: css`
		background: ${({ theme }) => theme.colors.skyblue};
		border: none;
	`,
};

const FilterButtonContainer = styled.div<StyledProps>`
	${ButtonStyles.default}
	${({ isClicked }) => isClicked && ButtonStyles.clicked}
`;

export default FilterButton;
