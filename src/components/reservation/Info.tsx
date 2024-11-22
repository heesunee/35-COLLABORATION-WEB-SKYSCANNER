import styled from 'styled-components';

interface InfoProps {
	depTime: string;
	arrTime: string;
	from: string;
	to: string;
	averageTime: string;
}

const Info = ({ depTime, arrTime, from, to, averageTime }: InfoProps) => (
	<StyledInfoContainer>
		<RightWrapper>
			<FlightTime>
				{depTime} - {arrTime}
			</FlightTime>
			<Location>
				{from} - {to}
			</Location>
		</RightWrapper>
		<LeftWrapper>
			<Type>직항</Type>
			<AverageTime>{averageTime}</AverageTime>
		</LeftWrapper>
	</StyledInfoContainer>
);

export default Info;

const StyledInfoContainer = styled.div`
	display: flex;
	justify-content: space-between;
	padding-right: 1rem;
`;

const RightWrapper = styled.div`
	display: flex;
	flex-direction: column;
`;

const FlightTime = styled.span`
	${({ theme }) => theme.fonts.e_body_b_16_new}
`;

const Location = styled.span`
	${({ theme }) => theme.fonts.e_body_m_12}
`;

const Type = styled.span`
	${({ theme }) => theme.fonts.e_body_m_12}
`;

const AverageTime = styled.span`
	${({ theme }) => theme.fonts.body6_r_12}
	color: ${({ theme }) => theme.colors.grey40};
	letter-spacing: 0.05rem;
`;

const LeftWrapper = styled.div`
	display: flex;
	flex-direction: column;
	text-align: right;
`;
