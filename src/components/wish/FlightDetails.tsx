import styled from 'styled-components';

interface FlightDetailsProps {
	travelDays: string;
	personInfo: string;
	price: string;
}

const FlightDetails = ({ travelDays, personInfo, price }: FlightDetailsProps) => {
	return (
		<FlightDetailsWrapper>
			<PersonSeatWrapper>
				<TravelDays>{travelDays}</TravelDays>
				<Person>{personInfo}</Person>
			</PersonSeatWrapper>
			<Price>{price}</Price>
		</FlightDetailsWrapper>
	);
};

export default FlightDetails;

const FlightDetailsWrapper = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	width: 33.3rem;
	height: 7.1rem;
	padding: 1.1rem 2rem 2rem 1.8rem;
	border-top: 1px solid ${({ theme }) => theme.colors.grey30};
`;

const TravelDays = styled.p`
	${({ theme }) => theme.fonts.e_body_b_16};
`;

const PersonSeatWrapper = styled.div`
	display: flex;
	flex-direction: column;
`;

const Person = styled.p`
	${({ theme }) => theme.fonts.body6_r_12};
	color: ${({ theme }) => theme.colors.grey40};
`;

const Price = styled.p`
	${({ theme }) => theme.fonts.e_title_eb_20};
`;
