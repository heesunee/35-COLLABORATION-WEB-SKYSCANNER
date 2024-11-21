import { FlightGrayIcon } from '@/assets/svg';
import Button from '@/components/common/Button.tsx';
import InputForm from '@/components/common/InputForm.tsx';
import CityGroup from '@/components/home/CityGroup.tsx';
import { cityGroups } from '@/pages/home/cityGroups.ts';
import { flexCssGenerator } from '@/styles/customStyle.ts';
import { useState } from 'react';
import styled from 'styled-components';

interface props {
	isOpen: boolean;
	onModalToggle: () => void;
}

const SearchModal = ({ isOpen = false, onModalToggle }: props) => {
	const [isButtonClicked, setIsButtonClicked] = useState(false);

	const onSearchClick = () => {
		onModalToggle();
	};

	return (
		<SearchModalWrap isOpen={isOpen}>
			<Header>
				<BackButton
					src="https://cdn.builder.io/api/v1/image/assets/TEMP/61ab8f64019a8f9ea1b247f99077ed1cb42f73e83bd9d999a40bd69bc24e53c2?placeholderIfAbsent=true&apiKey=2f1c3d702854430c9d5f68ac3d9e3238"
					alt="Back"
					loading="lazy"
				/>
				<ToggleContainer>
					<ToggleLabel>주변 공항 포함</ToggleLabel>
					<ToggleWrapper>
						<ToggleButton />
					</ToggleWrapper>
				</ToggleContainer>
			</Header>

			<CityGroupWrap>
				<InputForm Icon={FlightGrayIcon} placeholder="도시명 또는 공항명" />
				<CityGroup title="인기 도시" cities={cityGroups.popular} />
				<CityGroup title="아시아" cities={cityGroups.asia} />
				<CityGroup title="유럽" cities={cityGroups.europe} />
				<CityGroup title="북미" cities={cityGroups.northAmerica} />
				<CityGroup title="남아메리카" cities={cityGroups.southAmerica} />
			</CityGroupWrap>

			<Button variant={isButtonClicked ? 'search' : 'disable'} onClick={onSearchClick}>
				검색하기
			</Button>
		</SearchModalWrap>
	);
};

const SearchModalWrap = styled.div<{ isOpen: boolean }>`
	background-color: ${({ theme }) => theme.colors.white};
	${flexCssGenerator('flex', 'center', '', 'column')}
	max-width: 37.5rem;
	width: 100%;
	position: absolute;
	top: 0;
	padding: 1.5rem 1.3rem 2.6rem;
`;

const Header = styled.header`
	${flexCssGenerator('flex', 'space-between', 'center')}
	width: 100%;
`;

const BackButton = styled.img`
	width: 2.4rem;
	height: 2.4rem;
	object-fit: contain;
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
	margin-bottom: 1rem;
	width: 100%;
	gap: 2.7rem;
`;

export default SearchModal;
