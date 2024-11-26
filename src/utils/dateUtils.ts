/**
 * 날짜를 nn월 nn일 (n)을 출력하기 위해 변환하는 함수
 * @param date - 변환할 날짜의 문자열을 받음 (ex: 2024-11-03)
 * @returns { month: number, day: number, weekday: string}
 */

export const formatDate = (date: string) => {
	const dateObj = new Date(date);
	const weekdays = ['일', '월', '화', '수', '목', '금', '토'];

	const month = dateObj.getMonth() + 1;
	const day = dateObj.getDate();
	const weekday = weekdays[dateObj.getDay()];

	return { month, day, weekday };
};
