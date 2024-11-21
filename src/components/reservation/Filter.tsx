import AngledownIcon from '@/assets/svg/ic_angle_down_white.svg?react';
import styled from 'styled-components';

interface FilterProps {
	people?: number;
	content: string;
}

const Filter = ({ people, content }: FilterProps) => {
	return (
		<ButtonContainer>
			{people && <PeopleSpan>{people}</PeopleSpan>}
			<ContentSpan>{content}</ContentSpan>
			<AngledownIcon />
		</ButtonContainer>
	);
};

export default Filter;

const ButtonContainer = styled.div`
	background-color: inherit;
	color: ${({ theme }) => theme.colors.white};
	width: 7.4rem;
	height: 3rem;
	padding: 0.3rem 0.4rem;
	border-radius: 0.7rem;
	border: 0.1rem solid ${({ theme }) => theme.colors.white};
	display: flex;
	align-items: center;
	justify-content: center;
`;

const PeopleSpan = styled.span`
	${({ theme }) => theme.fonts.e_body_m_14};
`;

const ContentSpan = styled.span`
	${({ theme }) => theme.fonts.body5_r_14};
`;
