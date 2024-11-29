import { api } from '@/libs/api';

export const getRecommendList = async () => {
	const res = await api.get('/card/');
	return res.data.cardResponseList;
};
