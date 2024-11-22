import CalenderModal from '@/components/home/CalenderModal.tsx';
import SearchModal from '@/components/home/SearchModal.tsx';
import { useState } from 'react';

interface IsModalOpenProps {
	search: boolean;
	calender: boolean;
}

const Home = () => {
	const [isModalOpen, setModalOpen] = useState<IsModalOpenProps>({
		search: false,
		calender: true,
	});

	const onModalToggle = (modal: 'search' | 'calender') => {
		setModalOpen({
			...isModalOpen,
			[modal]: !isModalOpen[modal],
		});
	};

	return (
		<>
			<SearchModal isOpen={isModalOpen.search} onModalToggle={() => onModalToggle('search')} />
			<CalenderModal isOpen={isModalOpen.calender} onModalToggle={() => onModalToggle('calender')} />
		</>
	);
};

export default Home;
