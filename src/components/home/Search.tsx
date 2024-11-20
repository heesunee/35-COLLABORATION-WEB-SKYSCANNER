import SearchRadioButton from './SearchRadioButton';
import SearchTextContainer from './SearchTextContainer';
import { OriginIcon, PinIcon, ProfileIcon } from '@/assets/svg';
import { useState } from 'react';
import styled from 'styled-components';

const Search = () => {
	const [selectedRadio, setSelectedRadio] = useState<string>('왕복');
	const handleRadioClick = (value: string) => {
		setSelectedRadio(value);
	};

	const [selectedNearbyDeparture, setSelectedNearbyDeparture] = useState(false);
	const [selectedNearbyArrival, setSelectedNearbyArrival] = useState(false);

	const handleDepartureToggle = () => {
		setSelectedNearbyDeparture((prev) => !prev); // 이전 상태를 반대로 토글
	};

	const handleArrivalToggle = () => {
		setSelectedNearbyArrival((prev) => !prev); // 이전 상태를 반대로 토글
	};

	return (
		<>
			<SearchTitle>전 세계 항공권 특가 상품</SearchTitle>
			<SearchContainer>
				<SearchRadioWrapper>
					<SearchRadioButton
						content={'왕복'}
						isClicked={selectedRadio === '왕복'}
						onClick={() => handleRadioClick('왕복')}
					/>
					<SearchRadioButton
						content={'편도'}
						isClicked={selectedRadio === '편도'}
						onClick={() => handleRadioClick('편도')}
					/>
					<SearchRadioButton
						content={'다구간'}
						isClicked={selectedRadio === '다구간'}
						onClick={() => handleRadioClick('다구간')}
					/>
				</SearchRadioWrapper>
				<SearchTextContainer
					Icon={OriginIcon}
					placeholder={'출발지는 어디인가요?'}
					caption={'주변 공항 추가'}
					isClicked={selectedNearbyDeparture}
					onClick={handleDepartureToggle}
				/>
				<SearchTextContainer
					Icon={PinIcon}
					placeholder={'목적지는 어디인가요?'}
					caption={'주변 공항 추가'}
					isClicked={selectedNearbyArrival}
					onClick={handleArrivalToggle}
				/>
				<SearchTextContainer
					Icon={ProfileIcon}
					placeholder={'인원을 선택해주세요.'}
					caption={'직항만'}
					isClicked={selectedNearbyArrival}
					onClick={handleArrivalToggle}
				/>
			</SearchContainer>
		</>
	);
};

export default Search;

const SearchContainer = styled.div`
	background-color: ${({ theme }) => theme.colors.darksky};
	padding: 2.7rem 1.9rem 3.2rem;
`;

const SearchTitle = styled.h1`
	${({ theme }) => theme.fonts.head2_eb_26};
	color: ${({ theme }) => theme.colors.white};
	background-color: ${({ theme }) => theme.colors.darksky};
	padding: 1.8rem 0 0 1.3rem;
`;

const SearchRadioWrapper = styled.div`
	display: flex;
	gap: 1.1rem;
	flex-direction: row;
	padding-bottom: 0.6rem;
`;
