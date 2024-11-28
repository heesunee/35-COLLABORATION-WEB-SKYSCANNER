import HotelCard from './HotelCard';
import { Hotels } from '@/mocks/mockHotelData';

const HotelList = () => {
	return (
		<div>
			{Hotels.map((hotel) => (
				<HotelCard key={hotel.id} hotel={hotel} />
			))}
		</div>
	);
};

export default HotelList;
