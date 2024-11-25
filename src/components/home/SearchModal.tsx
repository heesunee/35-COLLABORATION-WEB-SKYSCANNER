import { ArrowLeftBlackIcon, FlightGrayIcon } from '@/assets/svg';
import Button from '@/components/common/Button.tsx';
import InputForm from '@/components/common/InputForm.tsx';
import CityGroup from '@/components/home/CityGroup.tsx';
import { cityGroups } from '@/pages/home/cityGroups.ts';
import { FogEffect, flexCssGenerator } from '@/styles/customStyle.ts';
import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';

interface props {
	isOpen: boolean;
	onModalToggle: () => void;
}

const SearchModal = ({ isOpen = false, onModalToggle }: props) => {
	const [clickedCity, setClickedCity] = useState<string | null>(null);
	const [showFogEffect, setShowFogEffect] = useState<boolean>(true);
	const scrollRef = useRef<HTMLDivElement>(null);
	const isOkinawa = clickedCity === '오키나와';

	const onSearchClick = () => {
		onModalToggle();
	};

	const onClicked = (city: string) => {
		setClickedCity(city);
		console.log(city);
	};

	return (
		<SearchModalWrap isOpen={isOpen}>
			<ScrollWrap ref={scrollRef}>
				<Header>
					<ArrowLeftBlackIcon onClick={onModalToggle} />
					<ToggleContainer>
						<ToggleLabel>주변 공항 포함</ToggleLabel>
						<ToggleWrapper>
							<ToggleButton />
						</ToggleWrapper>
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
			<FogEffect showFogEffect={showFogEffect} />
		</SearchModalWrap>
	);
};

const SearchModalWrap = styled.div<{ isOpen: boolean }>`
	background-color: ${({ theme }) => theme.colors.white};
	display: ${({ isOpen }) => (isOpen ? 'flex' : 'none')};
	position: absolute;
	top: 0;
	padding: 1.5rem 1.3rem 2.6rem;
	overflow: hidden;
`;

const ScrollWrap = styled.div`
	overflow-y: auto;
	height: 800px;
	margin-bottom: 5rem;
`;

const Header = styled.header`
	${flexCssGenerator('flex', 'space-between', 'center')}
	width: 100%;
`;

const ToggleContainer = styled.div`
	${flexCssGenerator('flex', 'center')}
	gap: 0.7rem;
`;

const ToggleLabel = styled.span`
	color: ${({ theme }) => theme.colors.grey40};
	${({ theme }) => theme.fonts.body2_sb_14}
`;

const ToggleWrapper = styled.div`
	width: 3.9rem;

	border-radius: 10px;
	background: ${({ theme }) => theme.colors.grey20};
	padding: 0.2rem;
`;

const ToggleButton = styled.div`
	border-radius: 50%;
	background: ${({ theme }) => theme.colors.white};
	width: 1.6rem;
	height: 1.6rem;
`;
const CityGroupWrap = styled.div`
	${flexCssGenerator('flex', 'flex-start', '', 'column')}
	padding-bottom: 2.7rem;
	width: 100%;
	gap: 2.7rem;
`;

export default SearchModal;
