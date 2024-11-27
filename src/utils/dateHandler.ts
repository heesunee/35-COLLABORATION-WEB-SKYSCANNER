import { DateTileData, calendarData } from '@/mock/mockCalenderData.ts';
import { useState } from 'react';

export const dateHandler = () => {
	const weekDay = ['일', '월', '화', '수', '목', '금', '토'];

	const formatDate = (date: Date) => {
		// 년, 월, 일, 요일 가져오기
		const year = date.getFullYear();
		const month = (date.getMonth() + 1).toString().padStart(2, '0'); // 0부터 시작하므로 +1
		const day = date.getDate().toString().padStart(2, '0');

		// 원하는 포맷으로 반환
		return `${year}-${month}-${day}`;
	};

	// 날짜 데이터를 가져오는 함수
	const getDateData = (monthKey: string, date: string): DateTileData | null => {
		const data = calendarData[monthKey]?.find((item) => item.date === date);
		return data || null;
	};

	const [firstSelectedDate, setFirstSelectedDate] = useState<string | null>(null);
	const [lastSelectedDate, setLastSelectedDate] = useState<string | null>(null);
	const [selectedMonth, setSelectedMonth] = useState<string | null>(null);

	// 날짜 클릭 핸들러

	const handleSetDate = (date: Date) => {
		const clickedMonth = (date.getMonth() + 1).toString().padStart(2, '0'); // 월 정보 추출

		// 새로운 월이 클릭되면 선택 초기화
		if (selectedMonth !== clickedMonth) {
			setFirstSelectedDate(formatDate(date));
			setLastSelectedDate(null);
		} else if (!firstSelectedDate) {
			setFirstSelectedDate(formatDate(date));
		} else if (!lastSelectedDate) {
			setLastSelectedDate(formatDate(date));
		} else {
			setFirstSelectedDate(formatDate(date));
			setLastSelectedDate(null);
		}

		// 현재 선택된 월 업데이트
		setSelectedMonth(clickedMonth);
	};

	return { formatDate, getDateData, handleSetDate, firstSelectedDate, lastSelectedDate, weekDay };
};
