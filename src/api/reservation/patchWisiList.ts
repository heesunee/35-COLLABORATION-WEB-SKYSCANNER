import { api } from '@/libs/api';

export const patchWishList = async (flightId: number) => {
	const res = await api.patch(`/wishlist?flightId=${flightId}`);
	return res.data;
};
