import TabCard from './TabCard';
import { useFlights } from '@/hooks/useFlights';
import { findCheapestFlight, findShortestFlight } from '@/utils/flightUtils';
import styled from 'styled-components';

const TabFlight = () => {
	const { flights } = useFlights(); // 평균 가격만 사용

	// findCheapestFlight 함수에서 가장 저렴한 항공편과 평균 가격을 가져옴
	const { averageTotalPrice: cheapestTotalPrice, flights: cheapestFlights } = findCheapestFlight(flights);

	// findShortestFlight 함수에서 최단시간 항공편과 평균 가격을 가져옴
	const { averageTotalPrice: shortestTotalPrice, flights: shortestFlights } = findShortestFlight(flights);

	return (
		<TabFlightContainer>
			<TopSection>
				<TopText>
					<h1>항공편</h1>
					<p>추천하는 59개의 결과</p>
				</TopText>
				<Align>정렬</Align>
			</TopSection>
			<BottomSection>
				<TabCard
					title="추천순"
					totalPrice={cheapestTotalPrice.toLocaleString()}
					averageTime={cheapestFlights[0]?.depFlightTime}
					variant={'cheapest'}
				/>
				<Rectangle />
				<TabCard
					title="최단시간"
					totalPrice={shortestTotalPrice.toLocaleString()}
					averageTime={shortestFlights[0]?.depFlightTime}
					variant={'shortest'}
				/>
			</BottomSection>
		</TabFlightContainer>
	);
};

export default TabFlight;

const TabFlightContainer = styled.section`
	background-color: inherit;
	width: 36.2rem;
	height: 14.3rem;
`;

const TopSection = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	margin-bottom: 0.6rem;
`;

const TopText = styled.div`
	display: flex;
	flex-direction: column;
	gap: 0.6rem;

	& h1 {
		${({ theme }) => theme.fonts.head3_eb_24};
	}

	& p {
		${({ theme }) => theme.fonts.body2_sb_14_new};
		color: ${({ theme }) => theme.colors.grey40};
	}
`;

const Align = styled.p`
	${({ theme }) => theme.fonts.title2_eb_16};
	color: ${({ theme }) => theme.colors.skyblue};
`;

const BottomSection = styled.div`
	display: flex;
`;

const Rectangle = styled.div`
	width: 0.2rem;
	height: 8.4rem;
	background-color: ${({ theme }) => theme.colors.grey30};
`;
