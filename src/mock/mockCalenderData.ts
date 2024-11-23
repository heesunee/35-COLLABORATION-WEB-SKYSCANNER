export interface DateTileData {
	date: string;
	price: string;
	color: 'r' | 'g' | 'b' | 'o';
}

interface CalendarData {
	[key: string]: DateTileData[];
}

export const calendarData: CalendarData = {
	'11월': [
		{ date: '2024-11-05', price: '26.02', color: 'r' },
		{ date: '2024-11-06', price: '20.95', color: 'b' },
		{ date: '2024-11-07', price: '20.95', color: 'b' },
		{ date: '2024-11-08', price: '20.95', color: 'o' },
		{ date: '2024-11-09', price: '20.95', color: 'o' },
		{ date: '2024-11-10', price: '20.95', color: 'b' },
		{ date: '2024-11-11', price: '20.95', color: 'o' },
		{ date: '2024-11-12', price: '20.95', color: 'r' },
		{ date: '2024-11-13', price: '20.95', color: 'b' },
		{ date: '2024-11-14', price: '38.18', color: 'o' },
		{ date: '2024-11-15', price: '38.18', color: 'o' },
		{ date: '2024-11-16', price: '38.18', color: 'r' },
		{ date: '2024-11-17', price: '38.18', color: 'r' },
		{ date: '2024-11-18', price: '38.18', color: 'o' },
		{ date: '2024-11-19', price: '38.18', color: 'o' },
		{ date: '2024-11-20', price: '38.18', color: 'g' },
		{ date: '2024-11-21', price: '38.18', color: 'g' },
		{ date: '2024-11-22', price: '38.18', color: 'o' },
		{ date: '2024-11-23', price: '38.18', color: 'o' },
		{ date: '2024-11-24', price: '38.18', color: 'o' },
		{ date: '2024-11-25', price: '38.18', color: 'g' },
		{ date: '2024-11-26', price: '38.18', color: 'g' },
		{ date: '2024-11-27', price: '38.18', color: 'o' },
		{ date: '2024-11-28', price: '38.18', color: 'o' },
		{ date: '2024-11-29', price: '38.18', color: 'o' },
	],
	'12월': [
		{ date: '2024-12-01', price: '26.02', color: 'g' },
		{ date: '2024-12-02', price: '18.50', color: 'r' },
		{ date: '2024-12-03', price: '22.75', color: 'b' },
		{ date: '2024-12-04', price: '19.30', color: 'o' },
		{ date: '2024-12-05', price: '20.10', color: 'g' },
		{ date: '2024-12-06', price: '25.90', color: 'r' },
		{ date: '2024-12-07', price: '15.45', color: 'b' },
		{ date: '2024-12-08', price: '30.25', color: 'o' },
		{ date: '2024-12-09', price: '18.85', color: 'g' },
		{ date: '2024-12-10', price: '23.50', color: 'b' },
		{ date: '2024-12-11', price: '26.75', color: 'o' },
		{ date: '2024-12-12', price: '22.40', color: 'r' },
		{ date: '2024-12-13', price: '27.90', color: 'g' },
		{ date: '2024-12-14', price: '29.10', color: 'r' },
		{ date: '2024-12-15', price: '15.20', color: 'b' },
		{ date: '2024-12-16', price: '21.50', color: 'o' },
		{ date: '2024-12-17', price: '19.85', color: 'r' },
		{ date: '2024-12-18', price: '24.90', color: 'g' },
		{ date: '2024-12-19', price: '30.00', color: 'o' },
		{ date: '2024-12-20', price: '16.95', color: 'b' },
		{ date: '2024-12-21', price: '18.20', color: 'r' },
		{ date: '2024-12-22', price: '20.75', color: 'o' },
		{ date: '2024-12-23', price: '22.30', color: 'g' },
		{ date: '2024-12-24', price: '19.95', color: 'r' },
		{ date: '2024-12-25', price: '26.50', color: 'b' },
		{ date: '2024-12-26', price: '28.15', color: 'g' },
		{ date: '2024-12-27', price: '30.85', color: 'o' },
		{ date: '2024-12-28', price: '29.50', color: 'r' },
		{ date: '2024-12-29', price: '17.75', color: 'b' },
		{ date: '2024-12-30', price: '21.90', color: 'o' },
		{ date: '2024-12-31', price: '25.00', color: 'g' },
	],
};
