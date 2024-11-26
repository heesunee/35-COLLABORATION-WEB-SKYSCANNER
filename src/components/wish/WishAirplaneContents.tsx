import WishContentCard from '@/components/wish/WishContentCard';
import { mockWishList } from '@/mocks/mockWishList';
import styled from 'styled-components';

const WishAirplaneContents = () => {
	return (
		<WishAirplaneContentsWrapper>
			{mockWishList.map((item) => (
				<WishContentCard key={item.id} {...item} />
			))}
		</WishAirplaneContentsWrapper>
	);
};

export default WishAirplaneContents;

const WishAirplaneContentsWrapper = styled.div`
	display: flex;
	flex-direction: column;
	gap: 0.9rem;
`;
