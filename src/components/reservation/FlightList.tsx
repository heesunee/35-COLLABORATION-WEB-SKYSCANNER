import FlightCard from '@/components/reservation/FlightCard';
import { fetchMoreFlights, useFlights } from '@/hooks/useFlights';
import useIntersectionObserver from '@/hooks/useIntersectionObserver';
import { Flights } from '@/types/FlightTypes';
import { useCallback, useEffect, useState } from 'react';
import styled from 'styled-components';

const FlightList = () => {
	// 초기 항공권 데이터
	const { flights: initialFlights } = useFlights();

	// 무한 스크롤 상태 변수
	const [loading, setLoading] = useState(false);
	const [flights, setFlights] = useState<Flights[]>([]);
	const [initialLoad, setInitialLoad] = useState(true);

	// 처음 데이터 로딩 처리
	useEffect(() => {
		if (initialFlights.length > 0 && initialLoad) {
			setFlights(initialFlights);
			setInitialLoad(false);
		}
	}, [initialFlights, initialLoad]);

	// 데이터를 더 불러오는 함수
	const loadMoreFlights = useCallback(async () => {
		if (loading) return;
		setLoading(true);
		const moreFlights = await fetchMoreFlights();
		setFlights((prevFlights) => [...prevFlights, ...moreFlights]);
		setLoading(false);
	}, [loading]);

	// IntersectionObserver 콜백 함수
	const onIntersect: IntersectionObserverCallback = async ([entry], observer) => {
		if (entry.isIntersecting && !loading) {
			observer.unobserve(entry.target);
			await loadMoreFlights();
			observer.observe(entry.target);
		}
	};

	const { setTarget } = useIntersectionObserver({
		root: document.querySelector('#scroll-wrapper'),
		rootMargin: '5px',
		threshold: 0.5,
		onIntersect,
	});

	return (
		<FlightContainer id="scroll-wrapper">
			{flights.map((flight, index) => (
				<FlightCard key={index} flight={flight} />
			))}
			<div ref={setTarget}></div>
			{loading && <LoadingIndicator>로딩 중...</LoadingIndicator>}
		</FlightContainer>
	);
};

export default FlightList;

const FlightContainer = styled.div`
	display: flex;
	flex-direction: column;
	gap: 0.9rem;
	overflow-y: auto;
	height: 72rem;
`;

const LoadingIndicator = styled.div`
	text-align: center;
	padding: 1rem;
	color: ${({ theme }) => theme.colors.grey40};
	font-size: 1.5rem;
`;
