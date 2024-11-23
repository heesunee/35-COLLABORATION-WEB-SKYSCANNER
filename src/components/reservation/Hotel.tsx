import TabButton from './TabButton';
import { useState } from 'react';
import styled from 'styled-components';

const Hotel = () => {
	const [selectedFilter, setSelectedFilter] = useState<string | null>(null);
	const handleFilterClick = (filter: string) => {
		setSelectedFilter(filter === selectedFilter ? null : filter);
	};

	return (
		<HotelContainer>
			<TopBar>
				<Title>호텔</Title>
				<TabButtonContainer>
					<TabButton
						content={'추천 숙소'}
						isClicked={selectedFilter === '추천 숙소'}
						onClick={() => handleFilterClick('추천 숙소')}
					/>
					<TabButton
						content={'4성급'}
						isClicked={selectedFilter === '4성급'}
						onClick={() => handleFilterClick('4성급')}
					/>
					<TabButton
						content={'3성급'}
						isClicked={selectedFilter === '3성급'}
						onClick={() => handleFilterClick('3성급')}
					/>
					<TabButton content={'후기'} isClicked={selectedFilter === '후기'} onClick={() => handleFilterClick('후기')} />
					<TabButton
						content={'가성비 숙소'}
						isClicked={selectedFilter === '가성비 숙소'}
						onClick={() => handleFilterClick('가성비 숙소')}
					/>
				</TabButtonContainer>
			</TopBar>
		</HotelContainer>
	);
};

export default Hotel;

const HotelContainer = styled.section`
	display: flex;
	flex-direction: column;
	align-items: center;
`;

const TopBar = styled.div`
	display: flex;
	flex-direction: column;
	gap: 1rem;
	margin-bottom: 1.8rem;
`;

const Title = styled.h1`
	${({ theme }) => theme.fonts.head3_eb_24};
`;

const TabButtonContainer = styled.div`
	display: flex;
	gap: 0.7rem;
`;
