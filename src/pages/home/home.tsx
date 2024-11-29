import HomeContents from '@/components/home/HomeContents';
import Search from '@/components/home/Search';
import SearchModal from '@/components/home/SearchModal.tsx';
import { useModal } from '@/hooks/useModal.ts';
import { useState } from 'react';

const Home = () => {
	const { isModalOpen, onModalToggle } = useModal();

	const [clickedCity, setClickedCity] = useState<string | null>(null);
	const [ableCityName, setAbleCityName] = useState<'오키나와' | '서울'>('오키나와');

	const onClicked = (city: string) => {
		setClickedCity(city);
	};

	const onChangeAbleCity = (city: string | null) => {
		if (city === null) return;
		setAbleCityName(city as '오키나와' | '서울');
	};

	return (
		<>
			<Search onModalToggle={onModalToggle} onChangeAbleCity={onChangeAbleCity} />
			<HomeContents />
			<SearchModal
				ableCityName={ableCityName}
				isOpen={isModalOpen.search}
				onModalToggle={() => onModalToggle('search')}
				clickedCity={clickedCity}
				onClicked={onClicked}
			/>
		</>
	);
};

export default Home;
