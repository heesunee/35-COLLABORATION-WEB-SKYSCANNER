import FlightCard from '@/components/reservation/FlightCard';
import { Flights } from '@/types/FlightTypes';

interface FlightListProps {
	flights: Flights[];
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
