import HanacardIcon from '@/assets/svg/img_hanacard.svg?react';
import KKdayIcon from '@/assets/svg/img_kkday.svg?react';
import AdCard from '@/components/reservation/Adcard';
import DateFilter from '@/components/reservation/DateFilter';
import Filter from '@/components/reservation/Filter';
import Hotel from '@/components/reservation/Hotel';
import LocationInput from '@/components/reservation/LocationInput';
import MoreButton from '@/components/reservation/MoreButton';
import TabFlight from '@/components/reservation/TabFlight';
import styled from 'styled-components';

const Reservation = () => {
	const startdDate = '2024-11-6';
	const finishDate = '2024-11-13';
	return (
		<ReservationContainer>
			<TopBar>
				<LocationInput />
				<FilterContainer>
					<DateFilter startDate={startdDate} finishDate={finishDate} />
					<Filter people={1} content="성인" />
					<Filter content="일반석" />
				</FilterContainer>
			</TopBar>
			<ReservationMain>
				<Wrapper>
					<TabFlight />
					<AdCard
						Img={HanacardIcon}
						titles={['해외여행은 트래블', 'GO', '체크카드!']}
						subTitles={['트래블로그와 ', 'Visa', '의 만남으로 이뤄진 트래블카드']}
					/>
					<MoreButton />
					<AdCard
						Img={KKdayIcon}
						titles={['타이베이, ', 'KKday', '와 함께']}
						subTitles={['오감대만족 타이베이 여행, ', 'kkday', '에서 할인가로 만나볼까요?']}
					/>
				</Wrapper>
				<HotelWrapper>
					<Hotel />

					<MoreButton />
				</HotelWrapper>
			</ReservationMain>
		</ReservationContainer>
	);
};

export default Reservation;

const ReservationContainer = styled.div`
	background-color: ${({ theme }) => theme.colors.skygrey};
`;

const TopBar = styled.section`
	background-color: ${({ theme }) => theme.colors.darksky};
	height: 12rem;
	padding: 1.35rem 2.2rem 0.9rem 2.3rem;
`;

const FilterContainer = styled.div`
	display: flex;
	gap: 0.4rem;
`;

const ReservationMain = styled.main`
	padding: 3.4rem 0.7rem 3.5rem 0.6rem;
	display: flex;
	flex-direction: column;
	justify-content: center;
`;

const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	gap: 2rem;
`;

const HotelWrapper = styled.div`
	display: flex;
	flex-direction: column;
`;
