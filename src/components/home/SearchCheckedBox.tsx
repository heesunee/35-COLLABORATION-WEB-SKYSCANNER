import { CheckboxEmptyIcon, CheckboxFilledIcon } from '@/assets/svg';
import styled from 'styled-components';

interface props {
	caption: string;
	isClicked: boolean;
	onClick: () => void;
}

const SearchCheckedBox = ({ caption, isClicked, onClick }: props) => {
	return (
		<CheckboxWrapper isClicked={isClicked} onClick={onClick}>
			{isClicked ? <CheckboxFilledIcon /> : <CheckboxEmptyIcon />}
			{caption}
		</CheckboxWrapper>
	);
};

export default SearchCheckedBox;

const CheckboxWrapper = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
	padding: 0.8rem 0 1.1rem;
	gap: 0.5rem;
	cursor: pointer;

	color: ${({ theme }) => theme.colors.white};
	${({ theme }) => theme.fonts.body2_sb_14};
`;
