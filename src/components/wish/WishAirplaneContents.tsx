import WishContentCard from '@/components/wish/WishContentCard';
import { useWishList } from '@/hooks/useWishList';
import styled from 'styled-components';

const WishAirplaneContents = () => {
	const { wishList } = useWishList();

	return (
		<WishAirplaneContentsWrapper>
			{wishList.map((item) => (
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
