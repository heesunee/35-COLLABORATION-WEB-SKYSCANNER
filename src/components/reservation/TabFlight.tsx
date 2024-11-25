import TabCard from './TabCard';
import { flightData } from '@/mocks/mockFlightData';
import { findCheapestFlight, findShortestFlight } from '@/utils/flightUtils';
import styled from 'styled-components';

const TabFlight = () => {
	const cheapestFilght = findCheapestFlight(flightData);

	const shortestFlight = findShortestFlight(flightData);

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
					totalPrice={cheapestFilght.totalPrice}
					averageTime={cheapestFilght.average_time}
					variant={'cheapest'}
				/>
				<Rectangle />
				<TabCard
					title="최단시간"
					totalPrice={shortestFlight.totalPrice}
					averageTime={shortestFlight.average_time}
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
