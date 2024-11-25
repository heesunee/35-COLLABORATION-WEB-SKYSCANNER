import WishHotelContentCard from './WishHotelContentCard';
import { hotelData } from '@/mocks/hotelData';
import styled from 'styled-components';

const WishHotelContents = () => {
	return (
		<WishHotelContentsWrapper>
			{hotelData.map((hotel) => (
				<WishHotelContentCard key={hotel.id} {...hotel} />
			))}
		</WishHotelContentsWrapper>
	);
};

export default WishHotelContents;

const WishHotelContentsWrapper = styled.div`
	display: flex;
	flex-direction: column;
	gap: 0.9rem;
`;
