import styled from 'styled-components';

interface props {
	color: 'green' | 'orange' | 'red';
	contents: string;
}

const PriceImage = ({ color = 'green', contents }: props) => {
	return (
		<PriceImageContainer>
			<PriceContent color={color}>{contents}</PriceContent>
		</PriceImageContainer>
	);
};

const PriceImageContainer = styled.div`
	width: 3.8rem;
`;

const PriceContent = styled.div<{ color: 'green' | 'orange' | 'red' }>`
	color: ${({ theme }) => theme.colors.white};
	background-color: ${({ theme, color }) => theme.colors[color]};
	${({ theme }) => theme.fonts.btn1_eb_12};
	height: 2.3rem;
	width: fit-content;
	padding: 0.1rem 0.4rem;
	text-align: center;
	align-content: center;
	border-radius: 0.4rem;
`;

export default PriceImage;
