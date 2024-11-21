import SearchRadioButton from './SearchRadioButton';
import SearchTextContainer from './SearchTextContainer';
import { CalendarGreyIcon, OriginIcon, PinIcon, ProfileIcon } from '@/assets/svg';
import { useState } from 'react';
import styled from 'styled-components';

const Search = () => {
	const [selectedRadio, setSelectedRadio] = useState<string>('왕복');
	const handleRadioClick = (value: string) => {
		setSelectedRadio(value);
	};

	const [selectedNearbyDeparture, setSelectedNearbyDeparture] = useState(false);
	const [selectedNearbyArrival, setSelectedNearbyArrival] = useState(false);
	const [selectedDirect, setSelectedDirect] = useState(false);

	const handleDepartureToggle = () => {
		setSelectedNearbyDeparture((prev) => !prev); // 이전 상태를 반대로 토글
	};

	const handleArrivalToggle = () => {
		setSelectedNearbyArrival((prev) => !prev); // 이전 상태를 반대로 토글
	};

	const handleDirectToggle = () => {
		setSelectedDirect((prev) => !prev); // 이전 상태를 반대로 토글
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
				<SearchCalendarWrapper>
					<CalendarLeft>
						<CalendarGreyIcon />
						출발하는 날짜
					</CalendarLeft>
					<CalendarRight>
						<CalendarGreyIcon />
						들어오는 날짜
					</CalendarRight>
				</SearchCalendarWrapper>
				<SearchTextContainer
					Icon={ProfileIcon}
					placeholder={'인원을 선택해주세요.'}
					caption={'직항만'}
					isClicked={selectedDirect}
					onClick={handleDirectToggle}
				/>
				<SearchButton>검색하기</SearchButton>
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

const SearchCalendarWrapper = styled.div`
	display: flex;
	margin-bottom: 1.1rem;
	gap: 0.298rem;
`;

const CalendarLeft = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
	background-color: ${({ theme }) => theme.colors.white};
	border-radius: 1.1rem 0 0 1.1rem;
	width: 100%;

	padding: 0.8rem 1rem;

	color: ${({ theme }) => theme.colors.grey40};
	${({ theme }) => theme.fonts.e_body_m_12}
`;

const CalendarRight = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
	background-color: ${({ theme }) => theme.colors.white};
	border-radius: 0 1.1rem 1.1rem 0;
	width: 100%;

	padding: 0.8rem 1rem;

	color: ${({ theme }) => theme.colors.grey40};
	${({ theme }) => theme.fonts.e_body_m_12}
`;

const SearchButton = styled.div`
	color: ${({ theme }) => theme.colors.white};
	padding: 1.2rem 14rem;
	margin-top: 2rem;
	border-radius: 11px;
	background-color: ${({ theme }) => theme.colors.skyblue};

	display: flex;
	flex-direction: row;
	align-items: center;

	${({ theme }) => theme.fonts.body2_sb_14};
`;
