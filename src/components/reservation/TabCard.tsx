import styled from 'styled-components';

interface TabCardProps {
	title: string;
	totalPrice: string;
	averageTime: string;
	variant: 'cheapest' | 'shortest';
}

const TabCard = ({ title, totalPrice, averageTime, variant }: TabCardProps) => {
	return (
		<TabCardContainer variant={variant}>
			<Title>{title}</Title>
			<Price>₩ {totalPrice}</Price>
			<Time>{averageTime} (평균)</Time>
		</TabCardContainer>
	);
};

export default TabCard;

const Title = styled.h2`
	${({ theme }) => theme.fonts.body3_sb_12};
`;

const Price = styled.p`
	${({ theme }) => theme.fonts.e_body_b_16};
`;

const Time = styled.p`
	${({ theme }) => theme.fonts.btn2_eb_10};
`;

const TabCardContainer = styled.div<{ variant: 'cheapest' | 'shortest' }>`
	display: flex;
	align-items: center;
	justify-content: center;
	width: 18rem;
	height: 8.4rem;
	padding: 1.1rem 5rem;
	flex-direction: column;

	border-radius: ${({ variant }) => (variant === 'cheapest' ? '1rem 0rem 0rem 1rem' : '0rem 1rem 1rem 0rem')};
	background-color: ${({ theme, variant }) => (variant === 'cheapest' ? theme.colors.darksky : theme.colors.white)};

	${Title}, ${Time} {
		color: ${({ theme, variant }) => (variant === 'cheapest' ? theme.colors.white : theme.colors.grey40)};
	}

	${Price} {
		color: ${({ theme, variant }) => (variant === 'cheapest' ? theme.colors.white : theme.colors.skyblue)};
	}
`;
