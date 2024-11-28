type DateArray = [number, number, number]; // [year, month, day]

export interface PriceData {
	date: DateArray;
	price: number;
	color: 'o' | 'r' | 'g';
	id: number;
}

export interface MonthData {
	month: string;
	prices: PriceData[];
}

export type CalenderListTypes = MonthData; // 전체 데이터 배열
