import { getFlights } from '@/api/reservation/getFlights';
import { useEffect, useState } from 'react';

export const useFlights = () => {
	const [error, setError] = useState<string | null>(null);

	useEffect(() => {
		const fetchWishList = async () => {
			try {
				const data = await getFlights();
				console.log(data);
			} catch (err) {
				console.error('Failed to fetch wish list:', err);
				setError('Failed to fetch wish list.');
			}
		};

		fetchWishList();
	}, []);

	return { error };
};
