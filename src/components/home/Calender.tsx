import './Calender.ts';
import { CustomCalender } from '@/components/home/Calender.ts';
import { flexCssGenerator } from '@/styles/customStyle.ts';
import { dateHandler } from '@/utils/dateHandler.ts';
import { useCallback, useEffect, useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import styled from 'styled-components';

interface props {
	handleSetDate: () => void;
}

const Calender = ({ handleSetDate }: props) => {
	const { formatDate, getDateData, weekDay } = dateHandler();

	const [selectedRange, setSelectedRange] = useState<[Date | null, Date | null]>([null, null]);
	const [startDate, setStartDate] = useState<Date | null>(null);
	const [endDate, setEndDate] = useState<Date | null>(null);

	const handleDateClick = (date: Date) => {
		handleSetDate(date);
		if (!startDate || (startDate && endDate)) {
			setStartDate(date);
			setEndDate(null);
		} else if (startDate && !endDate) {
			setEndDate(date > startDate ? date : startDate);
		}
	};

	useEffect(() => {
		setSelectedRange([startDate, endDate]);
	}, [startDate, endDate]);

	useEffect(() => {
		console.log('Selected Range:', selectedRange);
		console.log('startDate :', startDate);
		console.log('endDate :', endDate);
	}, [selectedRange]);

	// 날짜 셀을 커스터마이징하는 함수
	const tileContent = ({ date, view }: { date: Date; view: string }) => {
		if (view === 'month') {
			const dateKey = formatDate(date);

			// 11월과 12월 데이터를 모두 가져옴
			const data = getDateData('11월', dateKey) || getDateData('12월', dateKey);

			const dayNumber = date.getDate();
			const colorMap = {
				r: '#FF5252', // 빨강
				g: '#4CAF50', // 초록
				b: '#007BFF', // 파랑
				o: '#FF8D00', // 주황
			};

			console.log('rr Selected Range:', selectedRange);
			console.log('rr startDate :', startDate);
			console.log(' rr endDate :', endDate);

			if (data) {
				return (
					<TileContainer>
						<Ghost></Ghost>
						<StyledCircle backgroundColor={colorMap[data.color]}>{dayNumber}</StyledCircle>
						<StyledPrice>{data.price}만</StyledPrice>
					</TileContainer>
				);
			} else {
				return (
					<TileContainer>
						<Ghost></Ghost>
						<StyledCircle backgroundColor={'transparent'}>{dayNumber}</StyledCircle>
						<StyledPrice></StyledPrice>
					</TileContainer>
				);
			}
		}
		return null;
	};

	return (
		<CustomCalender>
			<Weekdays>
				{weekDay.map((day) => (
					<WeekName key={day}>{day}</WeekName>
				))}
			</Weekdays>
			<Month>11월</Month>
			<Calendar
				tileContent={tileContent}
				selectRange={true}
				defaultActiveStartDate={new Date(2024, 10, 1)}
				showNeighboringMonth={false}
				showNavigation={false}
				onClickDay={handleDateClick}
				value={selectedRange}
			/>
			<Month>12월</Month>
			<Calendar
				tileContent={tileContent}
				selectRange={true}
				defaultActiveStartDate={new Date(2024, 11, 1)}
				showNeighboringMonth={false}
				showNavigation={false}
				onClickDay={handleDateClick}
				value={selectedRange}
			/>

			<MoreInfo>
				<ColorInfo></ColorInfo>
				<Info>12/25 성탄절</Info>
			</MoreInfo>
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

const MoreInfo = styled.div`
	${flexCssGenerator('flex', 'flex-end', 'center', 'row')}
	gap: 0.7rem;
	margin: 2rem 2.9rem;
`;
const ColorInfo = styled.span`
	width: 0.4rem;
	height: 0.4rem;
	border-radius: 50%;
	background: ${({ theme }) => theme.colors.red};
`;

const Info = styled.span`
	${({ theme }) => theme.fonts.btn4_sb_8}
	color: ${({ theme }) => theme.colors.grey30};
`;

export default Calender;
