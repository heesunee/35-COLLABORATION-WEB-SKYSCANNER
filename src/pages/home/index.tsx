import CalenderModal from '@/components/home/CalenderModal.tsx';
import SearchModal from '@/components/home/SearchModal.tsx';
import { useState } from 'react';

interface IsModalOpenProps {
	search: boolean;
	calender: boolean;
}

const Home = () => {
	const [isModalOpen, setModalOpen] = useState<IsModalOpenProps>({
		search: true,
		calender: false,
	});

	const onModalToggle = (modal: 'search' | 'calender') => {
		setModalOpen((prev) => ({ ...prev, [modal]: !prev[modal] }));
	};

	return (
		<>
			<SearchModal isOpen={isModalOpen.search} onModalToggle={onModalToggle} />
			<CalenderModal />
		</>
	);
};

export default Home;
