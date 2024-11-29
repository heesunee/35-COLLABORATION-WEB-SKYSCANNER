import WithSuspense from '../common/WithSuspense';
import WishAirplaneContents from './WishAirplaneContents';
import { lazy } from 'react';
import styled from 'styled-components';

const WishHotelContents = lazy(() => import('./WishHotelContents'));

const WishContents = () => {
	return (
		<WishContentsWrapper>
			<WishAirplaneContents />
			<WithSuspense fallback={<div>Loading Hotels...</div>}>
				<WishHotelContents />
			</WithSuspense>
		</WishContentsWrapper>
	);
};

export default WishContents;

const WishContentsWrapper = styled.div`
	display: flex;
	flex-direction: column;
	gap: 0.9rem;
`;
