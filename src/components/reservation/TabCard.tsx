import styled, { css } from 'styled-components';

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

const TabCardContainer = styled.div<{ variant: 'cheapest' | 'shortest' }>`
	display: flex;
	align-items: center;
	justify-content: center;
	width: 18rem;
	height: 8.4rem;
	padding: 1.1rem 5rem;
	flex-direction: column;

	// 추천순일 때 적용될 css
	${({ variant }) =>
		variant === 'cheapest' &&
		css`
			background-color: ${({ theme }) => theme.colors.darksky};
			border-radius: 1rem 0rem 0rem 1rem;
			${Title}, ${Price}, ${Time} {
				color: ${({ theme }) => theme.colors.white}; /* cheapest일 때 텍스트 색상 */
			}
		`}

	// 최단시간일 때 적용될 css
	${({ variant }) =>
		variant === 'shortest' &&
		css`
			background-color: ${({ theme }) => theme.colors.white};
			border-radius: 0rem 1rem 1rem 0rem;
		`}
`;

const Title = styled.h2`
	font-size: 1.2rem;
	font-weight: bold;
	margin-bottom: 0.7rem;
	color: ${({ theme }) => theme.colors.black};
`;

const Price = styled.p`
	font-size: 1.4rem;
	font-weight: bold;
	color: ${({ theme }) => theme.colors.skyblue}; /* 가격 색상 */
`;

const Time = styled.p`
	font-size: 1rem;
	color: ${({ theme }) => theme.colors.grey40};
	margin-top: 0.5rem;
`;
