import { api } from '@/libs/api';

export const getWishList = async () => {
	const res = await api.get('/wishlist');
	return res.data.wishList;
};
