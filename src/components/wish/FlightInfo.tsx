import { EastarIcon, JinAirIcon, KalIcon } from '@/assets/svg';
import JejuAirIcon from '@/assets/svg/ic_jejuair.svg?react';
import React from 'react';
import styled from 'styled-components';

interface FlightInfoProps {
	timeline: string;
	route: string;
	airline: string;
	option: string;
	duration: string;
}

const FlightInfo = ({ timeline, route, airline, option, duration }: FlightInfoProps) => {
	const airlineIcons: Record<string, React.ReactNode | undefined> = {
		이스타항공: <EastarIcon />,
		대한항공: <KalIcon />,
		진에어: <JinAirIcon />,
		제주항공: <JejuAirIcon />,
	};

	return (
		<FlightInfoSection>
			{airlineIcons[airline] || null}
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
