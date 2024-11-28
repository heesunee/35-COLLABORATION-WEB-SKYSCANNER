export interface Flight {
	id: number;
	from: string;
	to: string;
	dep_time1: string;
	arr_time1: string;
	dep_time2: string;
	arr_time2: string;
	average_time: string;
	dep_price: number;
	arr_price: number;
	airline: string;
	is_like: boolean;
	count: number;
}

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
