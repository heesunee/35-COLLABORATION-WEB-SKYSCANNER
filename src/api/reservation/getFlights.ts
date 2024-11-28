import { api } from '@/libs/api';

export const getFlights = async () => {
	const res = await api.get('/flights');
	return res.data;
};
