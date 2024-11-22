import FlightCard from '@/components/reservation/FlightCard';
import { flightData } from '@/mocks/mockFlightData';
import styled from 'styled-components';

const Reservation = () => {
	return (
		<Container>
			{flightData.map((flight) => (
				<FlightCard key={flight.id} flight={flight} />
			))}
		</Container>
	);
};

export default Reservation;

const Container = styled.div`
	background-color: ${({ theme }) => theme.colors.babyblue40};
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	padding-top: 5rem;
`;
