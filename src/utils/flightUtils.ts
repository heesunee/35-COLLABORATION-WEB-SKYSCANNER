import { Flight } from '@/types/FlightTypes';

/**
 *
 * 항공편 정보를 받아 가장 저렴한 항공권을 반환하는 함수
 * @param flights
 * @returns totalPrice, average_time
 *
 */

export const findCheapestFlight = (flights: Flight[]): { totalPrice: string; average_time: string } => {
	// 항공권 출발+도착 가격 합계
	const totalPrices = flights.map((flight) => flight.dep_price + flight.arr_price);

	// 금액들중 최소 가격 찾기
	const cheapestPrice = Math.min(...totalPrices);
	const cheapesrIndex = totalPrices.indexOf(cheapestPrice);

	// 최소 가격 항공권의 평균 시간
	const averageTime = flights[cheapesrIndex].average_time;

	return { totalPrice: cheapestPrice.toLocaleString(), average_time: averageTime };
};

/**
 *
 * 항공편 정보를 받아 최단시간의 항공권을 반환하는 함수
 * @param flights
 * @returns totalPrice, average_time
 *
 */

export const findShortestFlight = (flights: Flight[]): { totalPrice: string; average_time: string } => {
	// average_time이 '2시간 30분'과 같은 string으로 온다고 가정함.
	// 문자열을 분 단위로 변환하는 함수
	const convertToMinutes = (time: string): number => {
		//  ["2시간", "30분"]으로 분리됨
		const timeParts = time.split(' ');
		let hours = 0;
		let minutes = 0;

		timeParts.forEach((part) => {
			if (part.includes('시간')) {
				hours = parseInt(part.replace('시간', '').trim());
			} else if (part.includes('분')) {
				minutes = parseInt(part.replace('분', '').trim());
			}
		});

		// 2시간 30분의 경우 150으로 return
		return hours * 60 + minutes;
	};

	// 각 항공권의 평균시간을 분 단위로 변환해 그중 가장 최단시간을 찾음
	const shortestTime = Math.min(...flights.map((flight) => convertToMinutes(flight.average_time)));

	// 최단 시간 항공권의 인덱스 찾기
	const shortestIndex = flights.findIndex((flight) => convertToMinutes(flight.average_time) === shortestTime);

	// 최단 시간 항공권의 출발 + 도착 가격
	const totalPrice = flights[shortestIndex].dep_price + flights[shortestIndex].arr_price;

	return {
		totalPrice: totalPrice.toLocaleString(),
		average_time: flights[shortestIndex].average_time,
	};
};
