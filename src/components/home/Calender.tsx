import './Calender.ts';
import { CustomCalender, custom_calender } from '@/components/home/Calender.ts';
import { DateTileData, calendarData } from '@/mock/mockCalenderData.ts';
import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import styled from 'styled-components';

interface props {
	handleDateClick: (date: Date) => void;
}

const Calender = ({ handleDateClick }: props) => {
	// 날짜 데이터를 가져오는 함수
	const getDateData = (monthKey: string, date: string): DateTileData | null => {
		const data = calendarData[monthKey]?.find((item) => item.date === date);
		return data || null;
	};

	// 날짜 셀을 커스터마이징하는 함수
	const tileContent =
		(monthKey: string) =>
		({ date, view }: { date: Date; view: string }) => {
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
							<Ghost></Ghost>
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

	return (
		<CustomCalender>
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
				defaultActiveStartDate={new Date(2024, 11, 1)}
				showNeighboringMonth={false}
				showNavigation={false}
				showWeekNumbers={false}
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
