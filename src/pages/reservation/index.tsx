import DateFilter from '@/components/reservation/DateFilter';
import Filter from '@/components/reservation/Filter';
import LocationInput from '@/components/reservation/LocationInput';
import TabFlight from '@/components/reservation/TabFlight';
import styled from 'styled-components';

const Reservation = () => {
	//Home에서 전달받은 날짜와 인원, 화면 표시 위해 우선 임의로 넣어둔 값
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
				<TabFlight />
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
