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
	background-color: aquamarine;
	height: 100rem;
`;
