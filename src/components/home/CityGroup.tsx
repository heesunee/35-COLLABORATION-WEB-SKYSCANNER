import { flexCssGenerator } from '@/styles/customStyle.ts';
import styled from 'styled-components';

interface groupProps {
	title: string;
	cities: string[];
}
interface buttonProps {
	name: string;
	onClick: () => void;
}

const CityButton = ({ name, onClick }: buttonProps) => {
	return <StyledButton onClick={onClick}>{name}</StyledButton>;
};

const CityGroup = ({ title, cities }: groupProps) => {
	const onButtonClick = (city: string) => {
		if (city === '오키나와') {
			alert('오키나와는 현재 서비스 준비 중입니다.');
		}
	};

	return (
		<GroupContainer>
			<GroupTitle>{title}</GroupTitle>
			<CitiesGrid>
				{cities.map((city, index) => (
					<CityButton key={index} name={city} onClick={onButtonClick} />
				))}
			</CitiesGrid>
		</GroupContainer>
	);
};

const StyledButton = styled.button`
	align-self: stretch;
	border-radius: 5px;
	background-color: ${({ theme }) => theme.colors.skygrey};
	min-height: 3.2rem;
	width: 11.1rem;
	padding: 0.6rem;
	border: none;
	color: ${({ theme }) => theme.colors.nightblue};
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
