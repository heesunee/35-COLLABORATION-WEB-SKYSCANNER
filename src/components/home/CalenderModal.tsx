import PriceModal from '@/components/home/PriceModal.tsx';
import { useState } from 'react';

const CalenderModal = () => {
	const [isModalOpen, setIsModalOpen] = useState(false);
	const onModalToggle = () => {
		setIsModalOpen(!isModalOpen);
	};

	return (
		<>
			<PriceModal isVisible={isModalOpen} onModalClose={onModalToggle} />
		</>
	);
};

export default CalenderModal;
