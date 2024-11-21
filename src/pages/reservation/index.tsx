import DateFilter from '@/components/reservation/DateFilter';
import FilterButton from '@/components/reservation/FilterButton';
import LocationInput from '@/components/reservation/LocationInput';
import styled from 'styled-components';

const Reservation = () => {
	//Home에서 전달받은 날짜와 인원, 화면 표시 위해 우선 임의로 넣어둔 값
	const startdDate = '2024-11-6';
	const finishDate = '2024-11-13';
	return (
		<>
			<TopBar>
				<LocationInput />
				<FilterContainer>
					<DateFilter startDate={startdDate} finishDate={finishDate} />
					<FilterButton people={1} content="성인" />
					<FilterButton content="일반석" />
				</FilterContainer>
			</TopBar>
		</>
	);
};

export default Reservation;

const TopBar = styled.section`
	background-color: ${({ theme }) => theme.colors.darksky};
	height: 12rem;
	padding: 1.35rem 2.2rem 0.9rem 2.3rem;
`;

const FilterContainer = styled.div`
	display: flex;
	gap: 0.4rem;
`;
