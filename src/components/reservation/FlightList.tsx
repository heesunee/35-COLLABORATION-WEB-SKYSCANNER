import FlightCard from '@/components/reservation/FlightCard';
import { Flight } from '@/types/FlightTypes';

interface FlightListProps {
	flights: Flight[];
}

const FlightList = ({ flights }: FlightListProps) => {
	return (
		<>
			{flights.map((flight) => (
				<FlightCard key={flight.id} flight={flight} />
			))}
		</>
	);
};

export default FlightList;
