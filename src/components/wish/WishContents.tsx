import WishAirplaneContents from './WishAirplaneContents';
import WishHotelContents from './WishHotelContents';
import styled from 'styled-components';

const WishContents = () => {
	return (
		<WishContentsWrapper>
			<WishAirplaneContents />
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
