import { useState } from 'react';
import styled from 'styled-components';

interface ToggleSwitchProps {
	id?: string;
}

const ToggleSwitch = ({ id }: ToggleSwitchProps) => {
	const [isChecked, setIsChecked] = useState(true);

	const handleToggle = () => {
		setIsChecked((prev) => !prev);
	};

	return (
		<ToggleWrapper>
			<input type="checkbox" id={`toggle-${id}`} checked={isChecked} onChange={handleToggle} />
			<label htmlFor={`toggle-${id}`} />
		</ToggleWrapper>
	);
};

export default ToggleSwitch;

const ToggleWrapper = styled.div`
	display: flex;
	align-items: center;

	input[type='checkbox'] {
		appearance: none;
		width: 3.9rem;
		height: 2rem;
		background: ${({ theme }) => theme.colors.grey40};
		border-radius: 1rem;
		position: relative;
		cursor: pointer;
		transition: background 0.3s ease;

		&:checked {
			background: ${({ theme }) => theme.colors.skyblue};
		}

		&:checked + label::before {
			transform: translateX(2.2rem);
		}
	}

	label {
		display: block;
		width: 3.9rem;
		height: 2rem;
		position: absolute;
		cursor: pointer;
	}

	label::before {
		content: '';
		width: 1.5rem;
		height: 1.5rem;
		background: white;
		border-radius: 50%;
		position: absolute;
		top: 0.2rem;
		left: 0.5rem;
		transition: transform 0.3s ease;
	}
`;
