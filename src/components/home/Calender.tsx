import './Calender.ts';
import Button from '@/components/common/Button.tsx';
import { CustomCalender } from '@/components/home/Calender.ts';
import { flexCssGenerator } from '@/styles/customStyle.ts';
import { dateHandler } from '@/utils/dateHandler.ts';
import { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import styled from 'styled-components';

interface props {
	handleSetDate: (date: Date) => void;
	handleNavigate: () => void;
}

const Calender = ({ handleSetDate, handleNavigate }: props) => {
	const { cheepPrice, formatDate, getDateData, handleCheepPrice, weekDay } = dateHandler();

	const [selectedRange, setSelectedRange] = useState<[Date | null, Date | null]>([null, null]);

	const handleDateClick = (date: Date) => {
		const [start, end] = selectedRange;

		handleSetDate(date);
		if (!start || (start && end)) {
			setSelectedRange([date, null]);
		} else if (start && !end) {
			const sortedRange = [start, date].sort((a, b) => a.getTime() - b.getTime()) as [Date, Date];
			setSelectedRange(sortedRange);
		}
	};

	// 날짜 셀을 커스터마이징하는 함수
	const tileContent = ({ date, view }: { date: Date; view: string }) => {
		if (view === 'month') {
			const dateKey = formatDate(date);

			// 11월과 12월 데이터를 모두 가져옴
			const data = getDateData('2024-11', dateKey) || getDateData('2024-12', dateKey);

			const dayNumber = date.getDate();
			const colorMap = {
				r: '#FF5252', // 빨강
				g: '#4CAF50', // 초록
				b: '#007BFF', // 파랑
				o: '#FF8D00', // 주황
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
		<>
			<CustomCalender>
				<Weekdays>
					{weekDay.map((day) => (
						<WeekName key={day}>{day}</WeekName>
					))}
				</Weekdays>
				<Month>11월</Month>
				<Calendar
					tileContent={tileContent}
					allowPartialRange={true}
					selectRange={true}
					defaultActiveStartDate={new Date(2024, 10, 1)}
					showNeighboringMonth={false}
					showNavigation={true}
					onClickDay={handleDateClick}
					onChange={handleCheepPrice}
					value={selectedRange}
				/>
				<Month>12월</Month>
				<Calendar
					tileContent={tileContent}
					allowPartialRange={true}
					selectRange={true}
					defaultActiveStartDate={new Date(2024, 11, 1)}
					showNeighboringMonth={false}
					showNavigation={false}
					onClickDay={handleDateClick}
					onChange={handleCheepPrice}
					value={selectedRange}
				/>

				<MoreInfo>
					<ColorInfo></ColorInfo>
					<Info>12/25 성탄절</Info>
				</MoreInfo>
			</CustomCalender>
			<PriceWrap>
				<PriceContents>
					<Price>{cheepPrice}</Price>
					<More>근 2주 중 최저가</More>
				</PriceContents>
				<Button variant={'apply'} size={'small'} onClick={handleNavigate}>
					적용
				</Button>
			</PriceWrap>
		</>
	);
};

const PriceWrap = styled.div`
	border-top: 1px solid ${({ theme }) => theme.colors.grey20};
	display: flex;
	padding: 1.9rem 1.9rem 1.9rem 2.9rem;
	justify-content: space-between;
	margin-top: 20px;
`;

const PriceContents = styled.div`
	${flexCssGenerator('flex', 'center', 'flex-start', 'column')}
	flex-shrink: 0;
`;

const Price = styled.div`
	${({ theme }) => theme.fonts.title2_eb_16}
	color: ${({ theme }) => theme.colors.skyblue};
`;

const More = styled.div`
	${({ theme }) => theme.fonts.btn3_sb_10}
	color: ${({ theme }) => theme.colors.grey30};
`;

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
