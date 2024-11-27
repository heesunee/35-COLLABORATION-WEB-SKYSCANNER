import { ArrowLeftBlackIcon, FlightGrayIcon } from '@/assets/svg';
import Button from '@/components/common/Button.tsx';
import InputForm from '@/components/common/InputForm.tsx';
import CityGroup from '@/components/home/CityGroup.tsx';
import ToggleSwitch from '@/components/wish/ToggleSwitch.tsx';
import { cityGroups } from '@/constants/cityGroups.ts';
import { FogEffect, flexCssGenerator } from '@/styles/customStyle.ts';
import { useRef } from 'react';
import styled from 'styled-components';

interface props {
	isOpen: boolean;
	onModalToggle: () => void;
	clickedCity: string | null;
	onClicked: (city: string) => void;
}

const SearchModal = ({ isOpen = false, onModalToggle, clickedCity, onClicked }: props) => {
	const scrollRef = useRef<HTMLDivElement>(null);
	const isOkinawa = clickedCity === '오키나와';

	const onSearchClick = () => {
		onModalToggle();
	};

	return (
		<SearchModalWrap isOpen={isOpen}>
			<ScrollWrap ref={scrollRef}>
				<Header>
					<ArrowLeftBlackIcon onClick={onModalToggle} />
					<ToggleContainer>
						<ToggleLabel>주변 공항 포함</ToggleLabel>
						<ToggleSwitch />
					</ToggleContainer>
				</Header>

				<CityGroupWrap>
					<InputForm Icon={FlightGrayIcon} placeholder="도시명 또는 공항명" />
					<CityGroup title="인기 도시" cities={cityGroups.popular} clickedCity={clickedCity} onClicked={onClicked} />
					<CityGroup title="아시아" cities={cityGroups.asia} clickedCity={clickedCity} onClicked={onClicked} />
					<CityGroup title="유럽" cities={cityGroups.europe} clickedCity={clickedCity} onClicked={onClicked} />
					<CityGroup title="북미" cities={cityGroups.northAmerica} clickedCity={clickedCity} onClicked={onClicked} />
					<CityGroup
						title="남아메리카"
						cities={cityGroups.southAmerica}
						clickedCity={clickedCity}
						onClicked={onClicked}
					/>
				</CityGroupWrap>
			</ScrollWrap>

			<Button
				variant={isOkinawa ? 'search' : 'disable'}
				size={isOkinawa ? 'search' : 'disable'}
				onClick={onSearchClick}
				disabled={!isOkinawa}
			>
				검색하기
			</Button>
			<FogEffect showFogEffect={true} />
		</SearchModalWrap>
	);
};

const SearchModalWrap = styled.div<{ isOpen: boolean }>`
	background-color: ${({ theme }) => theme.colors.white};
	display: ${({ isOpen }) => (isOpen ? 'flex' : 'none')};
	max-width: inherit;
	position: absolute;
	flex-direction: column;
	height: 100vh;
	top: 0;
	padding: 1.5rem 1.3rem 2.6rem;
	overflow: hidden;
`;

const ScrollWrap = styled.div`
	overflow-y: auto;
	height: 80rem;
	padding-bottom: 10rem;
`;

const Header = styled.header`
	${flexCssGenerator('flex', 'space-between', 'center')}
	width: 100%;
`;

const ToggleContainer = styled.div`
	${flexCssGenerator('flex', 'center')}
	position: relative;
	gap: 0.7rem;
`;

const ToggleLabel = styled.span`
	color: ${({ theme }) => theme.colors.grey40};
	${({ theme }) => theme.fonts.body2_sb_14}
`;

const CityGroupWrap = styled.div`
	${flexCssGenerator('flex', 'flex-start', '', 'column')}
	padding-bottom: 2.7rem;
	width: 100%;
	gap: 2.7rem;
`;

export default SearchModal;
