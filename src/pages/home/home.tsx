import CalenderModal from '@/components/home/CalenderModal.tsx';
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

			<SearchModal
				isOpen={isModalOpen.search}
				onModalToggle={() => onModalToggle('search')}
				clickedCity={clickedCity}
				onClicked={onClicked}
			/>
			<CalenderModal isOpen={isModalOpen.calender} onModalToggle={() => onModalToggle('calender')} />
		</>
	);
};

export default Home;
