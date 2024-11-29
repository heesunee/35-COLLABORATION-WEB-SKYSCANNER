// flight 객체의 타입을 정의
export interface Flights {
	id: number;
	airline: string;
	airlineUrl: string;
	departAt: string;
	arriveAt: string;
	depFlightTimeline: string;
	depFlightTime: string;
	depAirport: string;
	arrFlightTimeline: string;
	arrFlightTime: string;
	arrAirport: string;
	totalPrice: number;
}

// API 응답 타입 정의
export interface FlightApiResponse {
	averageTotalPrice: number;
	flights: Flights[];
}
