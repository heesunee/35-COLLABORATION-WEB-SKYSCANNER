import { Flights } from '@/types/FlightTypes';

/**
 * 항공편 정보를 받아 가장 저렴한 항공권을 반환하는 함수
 * @param flights
 * @returns averageTotalPrice, flights
 */
export const findCheapestFlight = (flights: Flights[]): { averageTotalPrice: number; flights: Flights[] } => {
	// 금액들중 최소 가격 찾기
	const cheapestPrice = Math.min(...flights.map((flight) => flight.totalPrice));

	// 최저가 항공편들 필터링
	const cheapestFlights = flights.filter((flight) => flight.totalPrice === cheapestPrice);

	const averageTotalPrice = cheapestPrice;

	return { averageTotalPrice, flights: cheapestFlights };
};

/**
 * 항공편 정보를 받아 최단시간의 항공권을 반환하는 함수
 * @param flights
 * @returns averageTotalPrice, flights
 */
export const findShortestFlight = (flights: Flights[]): { averageTotalPrice: number; flights: Flights[] } => {
	// average_time이 '2시간 30분'과 같은 string으로 온다고 가정함.
	// 문자열을 분 단위로 변환하는 함수
	const convertToMinutes = (time: string): number => {
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

		return hours * 60 + minutes;
	};

	// 각 항공권의 평균시간을 분 단위로 변환해 그중 가장 최단시간을 찾음
	const shortestTime = Math.min(...flights.map((flight) => convertToMinutes(flight.depFlightTime)));

	// 최단 시간 항공권 필터링
	const shortestFlights = flights.filter((flight) => convertToMinutes(flight.depFlightTime) === shortestTime);

	const averageTotalPrice =
		shortestFlights.reduce((acc, flight) => acc + flight.totalPrice, 0) / shortestFlights.length;

	return { averageTotalPrice, flights: shortestFlights };
};

export const formatPrice = (price: number) => new Intl.NumberFormat('ko-KR', { style: 'decimal' }).format(price);
