import { RadioEmptyIcon, RadioFilledIcon } from '@/assets/svg';
import styled from 'styled-components';

interface props {
	content: string;
	isClicked: boolean;
	onClick: () => void;
}

interface StyledProps {
	isClicked: boolean;
}

const SearchRadioButton = ({ content, isClicked, onClick }: props) => {
	return (
		<SearchRadioButtonContainer isClicked={isClicked} onClick={onClick}>
			{isClicked ? <RadioFilledIcon /> : <RadioEmptyIcon />}
			{content}
		</SearchRadioButtonContainer>
	);
};

const SearchRadioButtonContainer = styled.div<StyledProps>`
	display: flex;
	height: 1.7rem;
	flex-direction: row;
	align-items: center;
	gap: 0.6rem;

	color: ${({ theme }) => theme.colors.white};
	${({ theme }) => theme.fonts.body3_sb_12};
	cursor: pointer;
`;

export default SearchRadioButton;
