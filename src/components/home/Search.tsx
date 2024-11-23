import Button from '../common/Button';
import SearchBottom from './SearchBottom';
import SearchCheckedBox from './SearchCheckedBox';
import SearchClickedFieldWrapper from './SearchClickedFieldWrapper';
import SearchRadioButton from './SearchRadioButton';
import SearchTextField from './SearchTextField';
import { CalendarGreyIcon, OriginIcon, PinIcon, ProfileIcon } from '@/assets/svg';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const Search = () => {
	const [selectedRadio, setSelectedRadio] = useState<string>('왕복');
	const handleRadioClick = (value: string) => {
		setSelectedRadio(value);
	};

	const [selectedNearbyDeparture, setSelectedNearbyDeparture] = useState(false);
	const [selectedNearbyArrival, setSelectedNearbyArrival] = useState(false);
	const [selectedDirect, setSelectedDirect] = useState(false);

	const [departure, setDeparture] = useState('');
	const [arrival, setArrival] = useState('');

	const [isModalOpen, setIsModalOpen] = useState(false);
	const [numAdults, setNumAdults] = useState(0);

	const handleDepartureToggle = () => {
		setSelectedNearbyDeparture((prev) => !prev);
	};

	const handleArrivalToggle = () => {
		setSelectedNearbyArrival((prev) => !prev);
	};

	const handleDirectToggle = () => {
		setSelectedDirect((prev) => !prev);
	};

	const handleModalOpen = () => {
		setIsModalOpen(true);
	};

	const handleModalClose = () => {
		setIsModalOpen(false);
	};

	const navigate = useNavigate(); // useNavigate 훅 호출

	const handleSearchClick = () => {
		navigate('/reservation');
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
				<SearchTextContainer>
					<SearchTextField
						Icon={OriginIcon}
						placeholder={'출발지는 어디인가요?'}
						onChange={(e) => setDeparture(e.target.value)}
					/>
					<SearchCheckedBox
						caption={'주변 공항 추가'}
						isClicked={selectedNearbyDeparture}
						onClick={handleDepartureToggle}
					/>
				</SearchTextContainer>
				<SearchTextContainer>
					<SearchTextField
						Icon={PinIcon}
						placeholder={'목적지는 어디인가요?'}
						onChange={(e) => setArrival(e.target.value)}
					/>
					<SearchCheckedBox
						caption={'주변 공항 추가'}
						isClicked={selectedNearbyArrival}
						onClick={handleArrivalToggle}
					/>
				</SearchTextContainer>
				<SearchCalendarWrapper onClick={() => console.log('Calander Clicked!')}>
					{/* 부모에 props 정의되면 출발하는 날짜, 들어오는 날짜에 교체할 예정 */}
					<CalendarLeft>
						<CalendarGreyIcon />
						출발하는 날짜
					</CalendarLeft>
					<CalendarRight>
						<CalendarGreyIcon />
						들어오는 날짜
					</CalendarRight>
				</SearchCalendarWrapper>
				<SearchTextContainer>
					<SearchClickedFieldWrapper
						Icon={ProfileIcon}
						placeholder={numAdults ? `성인 ${numAdults}명` : '인원을 선택해주세요.'}
						isClicked={selectedDirect}
						onClick={handleModalOpen}
					/>
					<SearchCheckedBox caption={'직항만'} isClicked={selectedDirect} onClick={handleDirectToggle} />
				</SearchTextContainer>

				{isModalOpen && (
					<SearchBottom numParentsAdults={numAdults} setParentsNumAdults={setNumAdults} onClose={handleModalClose} />
				)}

				{departure && arrival && numAdults ? (
					<Button onClick={handleSearchClick} variant="search">
						검색하기
					</Button>
				) : (
					<Button variant="disable">검색하기</Button>
				)}
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

const SearchTextContainer = styled.div``;

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
