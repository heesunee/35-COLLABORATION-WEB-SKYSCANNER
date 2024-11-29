import { api } from '@/libs/api';

export const getCalender = async () => {
	const res = await api.get('/calendar');
	return res.data;
};
