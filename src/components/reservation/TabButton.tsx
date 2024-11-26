import styled, { css } from 'styled-components';

interface TabButtonProps {
	content: string;
	isClicked: boolean;
	onClick: () => void;
}

interface StyledProps {
	isClicked: boolean;
}

const TabButton = ({ content, isClicked, onClick }: TabButtonProps) => {
	return (
		<TabButtonContainer isClicked={isClicked} onClick={onClick}>
			{content}
		</TabButtonContainer>
	);
};

export default TabButton;

const ButtonStyles = {
	default: css`
		${({ theme }) => theme.fonts.body2_sb_14};
		height: 3rem;
		background-color: ${({ theme }) => theme.colors.skygrey};
		border: 1px solid ${({ theme }) => theme.colors.grey20};
		border-radius: 0.8rem;
		padding: 0.5rem 1.4rem;
		display: flex;
		align-items: center;
		cursor: pointer;
	`,

	clicked: css`
		${({ theme }) => theme.fonts.title3_eb_14};
		background-color: ${({ theme }) => theme.colors.darksky};
		color: ${({ theme }) => theme.colors.white};
	`,
};

const TabButtonContainer = styled.div<StyledProps>`
	${ButtonStyles.default}
	${({ isClicked }) => isClicked && ButtonStyles.clicked}
`;
