import { getRecommendList } from '@/api/recommend/getRecommendList';
import { RecommendCardProps } from '@/types/recommendCard';
import { useState } from 'react';

export const useRecommendList = () => {
	const [recommendList, setRecommendList] = useState<RecommendCardProps>();

	const fetchRecommendList = async () => {
		try {
			const data = await getRecommendList();
			setRecommendList(data);
		} catch (err) {
			console.error('추천 리스트 불러오기를 실패했습니다. : ', err);
		}
	};

	fetchRecommendList();

	return recommendList;
};
