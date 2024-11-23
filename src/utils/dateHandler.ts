import { useState } from 'react';

export const dateHandler = () => {
	const formatDate = (date: Date) => {
		const days = ['일요일', '월요일', '화요일', '수요일', '목요일', '금요일', '토요일'];

		// 년, 월, 일, 요일 가져오기
		const year = date.getFullYear();
		const month = (date.getMonth() + 1).toString().padStart(2, '0'); // 0부터 시작하므로 +1
		const day = date.getDate().toString().padStart(2, '0');
		const dayName = days[date.getDay()]; // 요일

		// 원하는 포맷으로 반환
		return `${year}. ${month}. ${day} ${dayName}`;
	};

	const [firstSelectedDate, setFirstSelectedDate] = useState<string>(' ');
	const [lastSelectedDate, setLastSelectedDate] = useState<string>(' ');

	console.log(firstSelectedDate, lastSelectedDate);

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

	return { formatDate, handleDateClick, firstSelectedDate, lastSelectedDate };
};
