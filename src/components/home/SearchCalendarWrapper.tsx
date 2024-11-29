import { CalendarGreyIcon } from '@/assets/svg';
import { PATH } from '@/router/path.ts';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const SearchCalendarWrapper = () => {
	const navigate = useNavigate();
	const searchParams = new URLSearchParams(window.location.search);
	const startDate = searchParams.get('startDate');
	const finishDate = searchParams.get('finishDate');

	return (
		<SearchCalendar onClick={() => navigate(PATH.CALENDER)}>
			{/* 부모에 props 정의되면 출발하는 날짜, 들어오는 날짜에 교체할 예정 */}
			<CalendarLeft>
				<CalendarGreyIcon />
				{startDate ? startDate : '출발하는 날짜'}
			</CalendarLeft>
			<CalendarRight>
				<CalendarGreyIcon />
				{finishDate ? finishDate : '들어오는 날짜'}
			</CalendarRight>
		</SearchCalendar>
	);
};

export default SearchCalendarWrapper;

const SearchCalendar = styled.div`
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
