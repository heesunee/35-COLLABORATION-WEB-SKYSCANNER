import FlightList from '@/components/reservation/FlightList';
import { flightData } from '@/mocks/mockFlightData';
import styled from 'styled-components';

const Reservation = () => {
	return (
		<Container>
			<FlightList flights={flightData} />
		</Container>
	);
};
export default Reservation;

const Container = styled.div`
	height: 100rem;
	background-color: ${({ theme }) => theme.colors.babyblue40};
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	padding-top: 5rem;
	gap: 0.9rem;
`;
