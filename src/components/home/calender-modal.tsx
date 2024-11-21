import PriceModal from '@/components/home/price-modal.tsx';
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
