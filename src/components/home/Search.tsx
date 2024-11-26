import Button from '../common/Button';
import SearchBottom from './SearchBottom';
import SearchCalendarWrapper from './SearchCalendarWrapper';
import SearchCheckedBox from './SearchCheckedBox';
import SearchClickedFieldWrapper from './SearchClickedFieldWrapper';
import SearchRadioButton from './SearchRadioButton';
import SearchTextField from './SearchTextField';
import { OriginIcon, PinIcon, ProfileIcon } from '@/assets/svg';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const Search = () => {
	const [selectedRadio, setSelectedRadio] = useState<string>('왕복');
	const handleRadioClick = (value: string) => {
		setSelectedRadio(value);
	};

	const [checkedNearbyDeparture, setCheckedNearbyDeparture] = useState(false);
	const [checkedNearbyArrival, setCheckedNearbyArrival] = useState(false);
	const [checkedDirect, setCheckedDirect] = useState(false);

	const [departure, setDeparture] = useState('');
	const [arrival, setArrival] = useState('');

	const [isSearchBottomOpen, setIsSearchBottomOpen] = useState(false);
	const [numAdults, setNumAdults] = useState(0);

	const handleDepartureToggle = () => {
		setCheckedNearbyDeparture((prev) => !prev);
	};

	const handleArrivalToggle = () => {
		setCheckedNearbyArrival((prev) => !prev);
	};

	const handleDirectToggle = () => {
		setCheckedDirect((prev) => !prev);
	};

	const handleSearchBottomOpen = () => {
		setIsSearchBottomOpen(true);
	};

	const handleSearchBottomClose = () => {
		setIsSearchBottomOpen(false);
		document.body.style.overflow = '';
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
						isClicked={checkedNearbyDeparture}
						onClick={handleDepartureToggle}
					/>
				</SearchTextContainer>
				<SearchTextContainer>
					<SearchTextField
						Icon={PinIcon}
						placeholder={'목적지는 어디인가요?'}
						onChange={(e) => setArrival(e.target.value)}
					/>
					<SearchCheckedBox caption={'주변 공항 추가'} isClicked={checkedNearbyArrival} onClick={handleArrivalToggle} />
				</SearchTextContainer>
				<SearchCalendarWrapper />
				<SearchTextContainer>
					<SearchClickedFieldWrapper
						Icon={ProfileIcon}
						placeholder={numAdults ? `성인 ${numAdults}명` : '인원을 선택해주세요.'}
						isClicked={checkedDirect}
						onClick={handleSearchBottomOpen}
					/>
					<SearchCheckedBox caption={'직항만'} isClicked={checkedDirect} onClick={handleDirectToggle} />
				</SearchTextContainer>

				{isSearchBottomOpen && (
					<SearchBottom
						numParentsAdults={numAdults}
						setParentsNumAdults={setNumAdults}
						onClose={handleSearchBottomClose}
					/>
				)}

				{departure && arrival && numAdults ? (
					<Button onClick={handleSearchClick} variant="searchHome">
						검색하기
					</Button>
				) : (
					<Button variant="disableHome">검색하기</Button>
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
