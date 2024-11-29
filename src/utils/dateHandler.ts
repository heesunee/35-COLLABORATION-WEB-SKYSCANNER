import { useCalender } from '@/hooks/useCalender.ts';
import { PATH } from '@/router/path.ts';
import { CalenderListTypes, PriceData } from '@/types/CalenderListTypes.ts';
import { useState } from 'react';
import { Value } from 'react-calendar/src/shared/types.js';
import { useNavigate } from 'react-router-dom';

export const dateHandler = () => {
	const weekDay = ['일', '월', '화', '수', '목', '금', '토'];
	const [firstSelectedDate, setFirstSelectedDate] = useState<string | null>(null);
	const [lastSelectedDate, setLastSelectedDate] = useState<string | null>(null);
	const [selectedMonth, setSelectedMonth] = useState<string | null>(null);
	const [cheepPrice, setCheepPrice] = useState<string | null>(null);

	/**
	 * 날짜를 'yyyy-mm-dd' 형식으로 변환하는 함수
	 * @param date
	 */
	const formatDate = (date: Date) => {
		const year = date.getFullYear();
		const month = (date.getMonth() + 1).toString().padStart(2, '0'); // 0부터 시작하므로 +1
		const day = date.getDate().toString().padStart(2, '0');

		return `${year}-${month}-${day}`;
	};

	/** 해당 날짜의 데이터를 가져오는 함수 */
	const { calenderList } = useCalender();
	const getDateData = (monthKey: string, date: string): PriceData | null => {
		const monthData: CalenderListTypes[] = calenderList;
		const index = monthKey === '2024-11' ? 0 : 1;

		if (monthData[index]?.prices) {
			const data = monthData[index]?.prices.find((item) => JSON.stringify(item.date) === JSON.stringify(date));
			return data || null;
		}
		return null;
	};

	/**
	 * 날짜 클릭 핸들러
	 * @param date
	 */
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
		setSelectedMonth(clickedMonth);
	};

	/**
	 * 가격 변환 함수 (14.11 -> 141.100원)
	 * @param price
	 */
	const convertPrice = (price: number): string => {
		const transformedPrice = price * 10 + 0.0001;
		return `${transformedPrice.toFixed(3)}원`;
	};

	/**
	 * 가는날, 오는날의 가격을 합산하는 함수
	 * @param value
	 */
	const handleCheepPrice = (value: Value) => {
		if (!value || !Array.isArray(value)) return;
		const [startDate, endDate] = value as [Date, Date];

		const allData = calenderList.flatMap((month) => month.prices);
		const startPrice =
			allData.find((price) => JSON.stringify(price.date) === JSON.stringify(formatDate(startDate)))?.price || 0;
		const endPrice =
			allData.find((price) => JSON.stringify(price.date) === JSON.stringify(formatDate(endDate)))?.price || 0;

		setCheepPrice(convertPrice(startPrice + endPrice));
	};

	/**
	 * 홈으로 이동하면서 쿼리 파라미터에 가는날, 오는날 넣는 함수
	 */
	const navigate = useNavigate();
	const handleNavigate = () => {
		if (!firstSelectedDate || !lastSelectedDate) {
			return;
		}

		const params = new URLSearchParams({
			startDate: firstSelectedDate,
			finishDate: lastSelectedDate,
		});

		navigate(`${PATH.HOME}?${params.toString()}`);
	};

	return {
		formatDate,
		getDateData,
		handleSetDate,
		handleCheepPrice,
		handleNavigate,
		cheepPrice,
		firstSelectedDate,
		lastSelectedDate,
		weekDay,
	};
};
