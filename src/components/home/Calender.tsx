import './Calender.ts';
import { CustomCalender } from '@/components/home/Calender.ts';
import { dateHandler } from '@/utils/dateHandler.ts';
import { useCallback } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import styled from 'styled-components';

interface props {
	handleDateClick: (date: Date) => void;
}

const Calender = ({ handleDateClick }: props) => {
	const { firstSelectedDate, lastSelectedDate, formatDate, getDateData, weekDay } = dateHandler();

	// 날짜 셀을 커스터마이징하는 함수
	const tileContent = useCallback(
		(monthKey: string) =>
			({ date, view }: { date: Date; view: string }) => {
				if (view === 'month') {
					const year = date.getFullYear();
					const month = (date.getMonth() + 1).toString().padStart(2, '0');
					const day = date.getDate().toString().padStart(2, '0');
					const dateKey = `${year}-${month}-${day}`;

					const data = getDateData(monthKey, dateKey);
					const dayNumber = date.getDate();
					const colorMap = {
						r: '#FF5252', // 빨강
						g: '#4CAF50', // 초록
						b: '#007BFF', // 파랑
						o: '#FF8D00', //
					};
					const isSelected = formatDate(date) === firstSelectedDate || formatDate(date) === lastSelectedDate;

					if (data) {
						return (
							<TileContainer>
								<Ghost></Ghost>
								<StyledCircle backgroundColor={isSelected ? 'blue' : colorMap[data.color]}>{dayNumber}</StyledCircle>
								<StyledPrice>{data.price}만</StyledPrice>
							</TileContainer>
						);
					} else {
						return (
							<TileContainer>
								<Ghost></Ghost>
								<StyledCircle backgroundColor={isSelected ? 'blue' : 'transparent'}>{dayNumber}</StyledCircle>
								<StyledPrice></StyledPrice>
							</TileContainer>
						);
					}
				}
				return null;
			},
		[firstSelectedDate, lastSelectedDate],
	);

	return (
		<CustomCalender>
			<Weekdays>
				{weekDay.map((day) => (
					<WeekName key={day}>{day}</WeekName>
				))}
			</Weekdays>
			<Month>11월</Month>
			<Calendar
				tileContent={tileContent('11월')}
				selectRange={true}
				defaultActiveStartDate={new Date(2024, 10, 1)}
				showNeighboringMonth={false}
				showNavigation={false}
				onClickDay={handleDateClick}
			/>
			<Month>12월</Month>
			<Calendar
				tileContent={tileContent('12월')}
				selectRange={true}
				defaultActiveStartDate={new Date(2024, 11, 1)}
				showNeighboringMonth={false}
				showNavigation={false}
				onClickDay={handleDateClick}
			/>
		</CustomCalender>
	);
};

const Month = styled.h1`
	${({ theme }) => theme.fonts.title2_eb_16}
	margin-top: 20px;
`;

const Weekdays = styled.div`
	width: 337px;
	border-bottom: 1px solid ${({ theme }) => theme.colors.grey30};
	display: flex;
	justify-content: space-between;
	font-weight: bold;
`;

const WeekName = styled.div`
	${({ theme }) => theme.fonts.body6_r_12}
	width: 48px;
	text-align: center;
	padding: 10px 0;
`;

const TileContainer = styled.div`
	position: relative;
	text-align: center;
`;

const Ghost = styled.div`
	display: none;
	position: absolute;
	width: 50px;
	height: 35px;
	top: 0;
	border-radius: 50% 0 0 50%;
	background-color: ${({ theme }) => theme.colors.babyblue};
`;

const StyledCircle = styled.div<{ backgroundColor: string }>`
	${({ theme }) => theme.fonts.e_title_eb_12}
	letter-spacing: 0px;
	background-color: ${({ backgroundColor }) => backgroundColor};
	border-radius: 50%;
	padding: 5px;
	color: ${({ backgroundColor }) => (backgroundColor === 'transparent' ? 'inherit' : 'white')};
	font-size: 14px;
	width: 35px;
	height: 35px;
	align-content: center;
	text-align: center;
	position: relative;
`;

const StyledPrice = styled.div`
	height: 12px;
	${({ theme }) => theme.fonts.btn4_sb_8}
	color: ${({ theme }) => theme.colors.grey30};
	line-height: 1.2rem;
	margin-top: 0.3rem;
`;

export default Calender;
