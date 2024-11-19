import { useState } from 'react';
import styled, { css } from 'styled-components';

interface props {
	content: string;
	Icon?: any;
}

interface StyledProps {
	isClicked: boolean;
}

const FilterButton = ({ content, Icon }: props) => {
	const [isClicked, setIsClicked] = useState(false);
	const onClick = () => {
		setIsClicked(!isClicked);
	};

	return (
		<FilterButtonContainer isClicked={isClicked} onClick={onClick}>
			{Icon && <Icon />}
			{content}
		</FilterButtonContainer>
	);
};

export const ButtonStyles = {
	default: css`
		display: flex;
		width: 6.4rem;
		height: 2.8rem;
		padding: 0.7rem 1.2rem;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		gap: 1rem;

		border-radius: 1.45rem;
		border: 0.1rem solid ${({ theme }) => theme.colors.grey30};
		background: ${({ theme }) => theme.colors.darksky};

		color: ${({ theme }) => theme.colors.white};
		text-align: center;
		font-family: 'Apple SD Gothic Neo';
		font-size: 12px;
		font-weight: 800;
	`,
	Clicked: css`
		background: ${({ theme }) => theme.colors.skyblue};
		border: none;
	`,
};

const FilterButtonContainer = styled.div<StyledProps>`
	${ButtonStyles.default}
	${(props) => props.isClicked && ButtonStyles['Clicked']}
`;

export default FilterButton;
