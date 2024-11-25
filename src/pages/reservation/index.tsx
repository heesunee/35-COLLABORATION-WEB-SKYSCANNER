import Hotel from '@/components/reservation/Hotel';
import styled from 'styled-components';

const Reservation = () => {
	return (
		<Container>
			<Hotel />
		</Container>
	);
};

export default Reservation;

const Container = styled.div`
	padding-top: 5rem;
	background-color: aquamarine;
`;
