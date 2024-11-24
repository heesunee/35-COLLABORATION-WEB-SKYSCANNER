import WishHotelContents from './WishHotelContents';
import WishContentCard from '@/components/wish/WishContentCard';
import { mockWishList } from '@/mocks/mockWishList';
import styled from 'styled-components';

const WishContents = () => {
	return (
		<WishContentsWrapper>
			{mockWishList.map((item) => (
				<WishContentCard key={item.id} {...item} />
			))}
			<WishHotelContents />
		</WishContentsWrapper>
	);
};

export default WishContents;

const WishContentsWrapper = styled.div`
	display: flex;
	flex-direction: column;
	gap: 0.9rem;
`;
