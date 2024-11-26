import JejuAirIcon from '@/assets/svg/ic_jejuair.svg?react';
import styled from 'styled-components';

interface FlightInfoProps {
	timeline: string;
	route: string;
	airline: string;
	option: string;
	duration: string;
}

const FlightInfo = ({ timeline, route, airline, option, duration }: FlightInfoProps) => {
	return (
		<FlightInfoSection>
			<JejuAirIcon />
			<FlightInfoSectionMid>
				<DepFlightTimeline>{timeline}</DepFlightTimeline>
				<RouteAirlineBox>
					<OriginDestination>{route}</OriginDestination>
					<Airline>, {airline}</Airline>
				</RouteAirlineBox>
			</FlightInfoSectionMid>
			<WishContentsTimeSectionRight>
				<FlightOption>{option}</FlightOption>
				<FlightTime>{duration}</FlightTime>
			</WishContentsTimeSectionRight>
		</FlightInfoSection>
	);
};

export default FlightInfo;

const FlightInfoSection = styled.div`
	display: flex;
	gap: 1.6rem;
`;

const FlightInfoSectionMid = styled.div`
	display: flex;
	flex-direction: column;
`;

const DepFlightTimeline = styled.p`
	width: 12.6rem;
	${({ theme }) => theme.fonts.e_body_b_16};
`;

const RouteAirlineBox = styled.div`
	display: flex;
	align-items: center;
	width: 10rem;
`;

const OriginDestination = styled.p`
	${({ theme }) => theme.fonts.e_body_m_12};
`;

const Airline = styled.p`
	${({ theme }) => theme.fonts.body6_r_12};
`;

const WishContentsTimeSectionRight = styled.div`
	display: flex;
	flex-direction: column;
	padding-left: 6.4rem;
`;

const FlightOption = styled.p`
	${({ theme }) => theme.fonts.body3_sb_12};
	text-align: right;
`;

const FlightTime = styled.p`
	${({ theme }) => theme.fonts.e_body_m_12};
	color: ${({ theme }) => theme.colors.grey40};
`;
