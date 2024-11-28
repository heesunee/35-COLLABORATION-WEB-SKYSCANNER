import { getFlights } from '@/api/reservation/getFlights';
import { FlightApiResponse, Flights } from '@/types/FlightTypes';
import { useEffect, useState } from 'react';

export const useFlights = () => {
	const [flights, setFlights] = useState<Flights[]>([]);
	const [averagePrice, setAveragePrice] = useState<number | null>(null);
	const [error, setError] = useState<string | null>(null);

	useEffect(() => {
		const fetchWishList = async () => {
			try {
				const data: FlightApiResponse = await getFlights();
				setFlights(data.flights);
				setAveragePrice(data.averageTotalPrice);
			} catch (err) {
				console.error('Failed to fetch wish list:', err);
				setError('Failed to fetch wish list.');
			}
		};

		fetchWishList();
	}, []);

	return { error, averagePrice, flights };
};
