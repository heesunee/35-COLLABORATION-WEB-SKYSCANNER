import PriceSelect from './PriceSelect';
import { EastarIcon, JejuAirIcon, JinAirIcon, KalIcon } from '@/assets/svg';
import Icons from '@/components/reservation/Icons';
import Info from '@/components/reservation/Info';
import { Flights } from '@/types/FlightTypes';
import React, { useState } from 'react';
import styled from 'styled-components';

interface FlightCardProps {
	flight: Flights;
}

// 항공사 아이콘 매핑
const airlineIcons: Record<string, React.ReactNode | undefined> = {
	이스타항공: <EastarIcon />,
	대한항공: <KalIcon />,
	진에어: <JinAirIcon />,
	제주항공: <JejuAirIcon />,
};

const FlightCard = ({ flight }: FlightCardProps) => {
	const {
		airline,

		arrAirport,
		arrFlightTime,
		arrFlightTimeline,

		depAirport,
		depFlightTime,
		depFlightTimeline,

		totalPrice,
	} = flight;

	const [isLike, setIsLike] = useState(false);
	const [isTooltipVisible, setIsTooltipVisible] = useState(false);

	const handleHeartClick = () => {
		setIsLike((prev) => !prev);
		// 위시리스트 API 연결작업
		// ...
	};
	const handleExclamationClick = () => {
		setIsTooltipVisible((prev) => !prev);
	};

	return (
		<FlightCardContainer>
			<TopBar>
				<AirLine>
					{airlineIcons[airline] || null}
					{airline}
				</AirLine>
				<Icons
					isTooltipVisible={isTooltipVisible}
					isLike={isLike}
					handleExclamationClick={handleExclamationClick}
					handleHeartClick={handleHeartClick}
				/>
			</TopBar>
			<InfoContainer>
				<Info time={arrFlightTimeline} airPort={arrAirport} averageTime={arrFlightTime} />
				<Info time={depFlightTimeline} airPort={depAirport} averageTime={depFlightTime} />
			</InfoContainer>

			<PriceSelect totalPrice={totalPrice} />
		</FlightCardContainer>
	);
};

export default FlightCard;

const FlightCardContainer = styled.div`
	background-color: ${({ theme }) => theme.colors.white};
	position: relative;
	display: flex;
	width: 36.2rem;

	flex-direction: column;
	border-radius: 1.2rem;
`;

const TopBar = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 1.2rem 1.4rem 0.5rem 1.4rem;
`;

const AirLine = styled.span`
	${({ theme }) => theme.fonts.body6_r_12};
	color: ${({ theme }) => theme.colors.grey40};
	display: flex;
	align-items: center;
	gap: 0.3rem;
`;

const InfoContainer = styled.div`
	display: flex;
	gap: 1.4rem;
	flex-direction: column;
	padding: 1.2rem 1.4rem 0.5rem 1.4rem;
`;
