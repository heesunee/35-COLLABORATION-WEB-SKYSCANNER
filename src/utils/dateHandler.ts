import { DateTileData, calendarData } from '@/mock/mockCalenderData.ts';
import { useState } from 'react';

export const dateHandler = () => {
	const weekDay = ['일', '월', '화', '수', '목', '금', '토'];
	const weekDay_full = ['일요일', '월요일', '화요일', '수요일', '목요일', '금요일', '토요일'];

	const formatDate = (date: Date) => {
		// 년, 월, 일, 요일 가져오기
		const year = date.getFullYear();
		const month = (date.getMonth() + 1).toString().padStart(2, '0'); // 0부터 시작하므로 +1
		const day = date.getDate().toString().padStart(2, '0');
		const dayName = weekDay_full[date.getDay()]; // 요일

		// 원하는 포맷으로 반환
		return `${year}. ${month}. ${day} ${dayName}`;
	};

	// 날짜 데이터를 가져오는 함수
	const getDateData = (monthKey: string, date: string): DateTileData | null => {
		const data = calendarData[monthKey]?.find((item) => item.date === date);
		return data || null;
	};

	const [firstSelectedDate, setFirstSelectedDate] = useState<string | null>(' ');
	const [lastSelectedDate, setLastSelectedDate] = useState<string | null>(' ');

	// 날짜 클릭 핸들러
	const handleDateClick = (date: Date) => {
		if (!firstSelectedDate) {
			setFirstSelectedDate(formatDate(date));
		} else if (!lastSelectedDate) {
			setLastSelectedDate(formatDate(date));
		} else {
			setFirstSelectedDate(formatDate(date));
			setLastSelectedDate(null);
		}
	};

	return { formatDate, getDateData, handleDateClick, firstSelectedDate, lastSelectedDate, weekDay };
};
