import { flexCssGenerator } from '@/styles/customStyle.ts';
import { Simulate } from 'react-dom/test-utils';
import styled from 'styled-components';

import click = Simulate.click;

interface groupProps {
	title: string;
	cities: string[];
	clickedCity: string | null;
	onClicked?: (city: string) => void;
}
interface ButtonProps {
	name: string;
	onClick: () => void;
	isSelected: boolean;
}

const CityButton = ({ name, onClick, isSelected }: ButtonProps) => (
	<StyledButton onClick={onClick} isSelected={isSelected}>
		{name}
	</StyledButton>
);
const CityGroup = ({ title, cities, onClicked, clickedCity }: groupProps) => {
	return (
		<GroupContainer>
			<GroupTitle>{title}</GroupTitle>
			<CitiesGrid>
				{cities.map((city) => (
					<CityButton key={city} name={city} onClick={() => onClicked?.(city)} isSelected={clickedCity === city} />
				))}
			</CitiesGrid>
		</GroupContainer>
	);
};

const StyledButton = styled.button<{ isSelected: boolean }>`
	align-self: stretch;
	border-radius: 5px;
	background-color: ${({ theme, isSelected }) => (isSelected ? theme.colors.skyblue : theme.colors.skygrey)};
	min-height: 3.2rem;
	width: 11.1rem;
	padding: 0.6rem;
	border: none;
	color: ${({ theme, isSelected }) => (isSelected ? theme.colors.white : theme.colors.nightblue)};
	${({ theme }) => theme.fonts.body2_sb_14};
	cursor: pointer;
`;

const GroupContainer = styled.section`
	${flexCssGenerator('flex', 'flex-start', '', 'column')}
	gap: 1.2rem;
	width: 100%;
`;

const GroupTitle = styled.h2`
	${({ theme }) => theme.fonts.body1_sb_16};
`;

const CitiesGrid = styled.div`
	${flexCssGenerator('flex', 'flex-start', '', 'row')}
	flex-wrap: wrap;
	width: 100%;
	gap: 0.8rem 0.8rem;
`;

export default CityGroup;
