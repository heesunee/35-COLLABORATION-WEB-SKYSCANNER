import CalenderModal from '@/components/home/CalenderModal.tsx';
import HomeContents from '@/components/home/HomeContents';
import Search from '@/components/home/Search';
import SearchModal from '@/components/home/SearchModal.tsx';
import { useModal } from '@/hooks/useModal.ts';
import { useState } from 'react';

const Home = () => {
	const { isModalOpen, onModalToggle } = useModal();

	const [clickedCity, setClickedCity] = useState<string | null>(null);

	const onClicked = (city: string) => {
		setClickedCity(city);
	};

	return (
		<>
			<Search />
			<HomeContents />
			<SearchModal
				isOpen={isModalOpen.search}
				onModalToggle={() => onModalToggle('search')}
				clickedCity={clickedCity}
				onClicked={onClicked}
			/>
			<CalenderModal />
		</>
	);
};

export default Home;
