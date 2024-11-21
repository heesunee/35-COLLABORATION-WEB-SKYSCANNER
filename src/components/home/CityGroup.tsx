import { flexCssGenerator } from '@/styles/customStyle.ts';
import styled from 'styled-components';

interface props {
	title: string;
	cities: string[];
}

const CityGroup = ({ title, cities }: props) => {
	return (
		<GroupContainer>
			<GroupTitle>{title}</GroupTitle>
			<CitiesGrid>
				{/*{cities.map((city, index) => (*/}
				{/*	// <CityButton key={`${title}-${index}`} name={city} />*/}
				{/*))}*/}
			</CitiesGrid>
		</GroupContainer>
	);
};

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
	width: 100%;
	gap: 8px 9px;
`;

export default CityGroup;
