import { useState } from 'react';

interface IsModalOpenProps {
	search: boolean;
	calender: boolean;
}

export const useModal = () => {
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

	return { isModalOpen, onModalToggle };
};
