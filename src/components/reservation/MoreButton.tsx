import { ArrowRightIcon } from '@/assets/svg';
import styled from 'styled-components';

const MoreButton = () => {
	return (
		<ButtonContainer>
			<span>더보기</span>
			<ArrowRightIcon />
		</ButtonContainer>
	);
};

export default MoreButton;

const ButtonContainer = styled.button`
	display: flex;
	align-items: center;
	justify-content: space-between;
	width: 36.2rem;
	height: 3.8rem;
	padding: 0.7rem 1.1rem;
	background-color: ${({ theme }) => theme.colors.white};
	border: none;
	border-radius: 0.7rem;
	box-shadow: 0rem 0.1rem 0.4rem 0rem rgba(0, 0, 0, 0.28);

	& span {
		${({ theme }) => theme.fonts.title2_eb_16};
	}
`;
