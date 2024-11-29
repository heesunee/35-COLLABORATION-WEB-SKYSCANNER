import { getCalender } from '@/api/calender/getWishList.ts';
import { CalenderListTypes } from '@/types/CalenderListTypes.ts';
import { useEffect, useState } from 'react';

export const useCalender = () => {
	const [calenderList, setCalenderList] = useState<CalenderListTypes[]>([]);
	const [error, setError] = useState<string | null>(null);

	const fetchCalender = async () => {
		try {
			const data = await getCalender();
			setCalenderList(data);
		} catch (err) {
			console.error('Failed to fetch wish list:', err);
			setError('Failed to fetch wish list.');
		}
	};
	useEffect(() => {
		fetchCalender();
	}, []);

	return { calenderList, error };
};
