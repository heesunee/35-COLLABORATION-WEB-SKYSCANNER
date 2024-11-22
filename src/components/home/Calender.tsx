import './Calender.css';
import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import styled from 'styled-components';

const App = () => {
	const [firstSelectedDate, setFirstSelectedDate] = useState(null); // 첫 번째 선택 날짜
	const [lastSelectedDate, setLastSelectedDate] = useState(null); // 마지막 선택 날짜

	const calendarData = {
		'11월': [
			{ date: '2024-11-05', price: '26.02', color: 'r' },
			{ date: '2024-11-06', price: '20.95', color: 'b' },
			{ date: '2024-11-14', price: '38.18', color: 'o' },
			{ date: '2024-11-15', price: '38.18', color: 'o' },
			{ date: '2024-11-16', price: '38.18', color: 'r' },
			{ date: '2024-11-17', price: '38.18', color: 'r' },
			{ date: '2024-11-18', price: '38.18', color: 'o' },
			{ date: '2024-11-19', price: '38.18', color: 'o' },
			{ date: '2024-11-20', price: '38.18', color: 'g' },
			{ date: '2024-11-21', price: '38.18', color: 'g' },
			{ date: '2024-11-22', price: '38.18', color: 'o' },
			{ date: '2024-11-23', price: '38.18', color: 'o' },
			{ date: '2024-11-24', price: '38.18', color: 'o' },
			{ date: '2024-11-25', price: '38.18', color: 'g' },
			{ date: '2024-11-26', price: '38.18', color: 'g' },
			{ date: '2024-11-27', price: '38.18', color: 'o' },
			{ date: '2024-11-28', price: '38.18', color: 'o' },
			{ date: '2024-11-29', price: '38.18', color: 'o' },
		],
		'12월': [
			{ date: '2024-12-01', price: '26.02', color: 'g' },
			{ date: '2024-12-15', price: '15.20', color: 'b' },
		],
	};

	// 날짜 데이터를 가져오는 함수
	const getDateData = (monthKey, date) => {
		const data = calendarData[monthKey]?.find((item) => item.date === date);
		return data || null;
	};

	// 날짜 셀을 커스터마이징하는 함수
	const tileContent =
		(monthKey) =>
		({ date, view }) => {
			if (view === 'month') {
				const dateKey = date.toISOString().split('T')[0];
				const data = getDateData(monthKey, dateKey);
				const dayNumber = date.getDate(); // 날짜의 "일" 숫자만 가져오기
				const colorMap = {
					r: '#FF5252', // 빨강
					g: '#4CAF50', // 초록
					b: '#007BFF', // 파랑
					o: '#FF8D00', // 파랑
				};

				if (data) {
					return (
						<TileContainer>
							<StyledCircle backgroundColor={colorMap[data.color]}>{dayNumber}</StyledCircle>
							<StyledPrice>{data.price}만</StyledPrice>
						</TileContainer>
					);
				} else {
					return <StyledCircle backgroundColor="transparent">{dayNumber}</StyledCircle>;
				}
			}
			return null;
		};

	// 날짜 클릭 핸들러
	const handleDateClick = (date) => {
		if (!firstSelectedDate) {
			// 첫 번째 날짜 설정
			setFirstSelectedDate(date);
		} else if (!lastSelectedDate) {
			// 두 번째 날짜 설정
			setLastSelectedDate(date);
		} else {
			// 기존 선택 초기화
			setFirstSelectedDate(date);
			setLastSelectedDate(null);
		}
	};

	return (
		<div>
			<Weekdays>
				<WeekName>일</WeekName>
				<WeekName>월</WeekName>
				<WeekName>화</WeekName>
				<WeekName>수</WeekName>
				<WeekName>목</WeekName>
				<WeekName>금</WeekName>
				<WeekName>토</WeekName>
			</Weekdays>
			<Month>11월</Month>
			<Calendar
				tileContent={tileContent('11월')} // 11월 데이터
				defaultActiveStartDate={new Date(2024, 10, 1)}
				showNeighboringMonth={false}
				showNavigation={false}
				onClickDay={handleDateClick}
			/>
			<Month>12월</Month>
			<Calendar
				tileContent={tileContent('12월')}
				defaultActiveStartDate={new Date(2024, 11, 1)}
				showNeighboringMonth={false}
				showNavigation={false}
				showWeekNumbers={false}
				onClickDay={handleDateClick}
			/>
		</div>
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
	text-align: center;
`;

const StyledCircle = styled.div<{ backgroundColor: string }>`
	${({ theme }) => theme.fonts.e_title_eb_12}
	letter-spacing: 0px;
	background-color: ${({ backgroundColor }) => backgroundColor};
	border-radius: 50%;
	padding: 5px;
	color: ${({ backgroundColor }) => (backgroundColor === 'transparent' ? 'inherit' : 'white')};
	font-size: 14px;
	display: inline-block;
	width: 35px;
	height: 35px;
	align-content: center;
	text-align: center;
`;

const StyledPrice = styled.div`
	${({ theme }) => theme.fonts.btn4_sb_8}
	color: ${({ theme }) => theme.colors.grey30};
	line-height: 1.2rem;
	margin-top: 0.3rem;
`;

export default App;
