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
	// 임시 값, 항공권 상단 PR이 머지되면 수정될 것
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	padding-top: 5rem;
	gap: 0.9rem;
`;
