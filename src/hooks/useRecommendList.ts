import { getRecommendList } from '@/api/recommend/getRecommendList';
import { RecommendCardProps } from '@/types/recommendCard';
import { useEffect, useState } from 'react';

export const useRecommendList = () => {
	const [recommendList, setRecommendList] = useState<RecommendCardProps[]>([]); //배열 초기화
	const [error, setError] = useState<Error | null>(null);

	useEffect(() => {
		const fetchRecommendList = async () => {
			try {
				const data = await getRecommendList();
				setRecommendList(data);
			} catch (err) {
				setError(err as Error);
				console.error('추천 리스트 불러오기를 실패했습니다. : ', err);
			}
		};

		fetchRecommendList();
	}, []); // 빈 배열로 한 번만 실행

	return { recommendList, error };
};
