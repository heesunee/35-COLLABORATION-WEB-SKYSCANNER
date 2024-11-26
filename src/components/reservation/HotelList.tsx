import HotelCard from './HotelCard';
import { Hotels } from '@/mocks/hotelData';

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
