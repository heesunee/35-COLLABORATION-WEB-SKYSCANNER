import { getWishList } from '@/api/wish/getWishList';
import { WishContentCardProps } from '@/types/wishContentCard';
import { useEffect, useState } from 'react';

export const useWishList = () => {
	const [wishList, setWishList] = useState<WishContentCardProps[]>([]);
	const [error, setError] = useState<string | null>(null);

	useEffect(() => {
		const fetchWishList = async () => {
			try {
				const data = await getWishList();
				setWishList(data);
			} catch (err) {
				console.error('Failed to fetch wish list:', err);
				setError('Failed to fetch wish list.');
			}
		};

		fetchWishList();
	}, []);

	return { wishList, error };
};
