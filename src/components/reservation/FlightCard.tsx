import PriceSelect from './PriceSelect';
import { EastarIcon, JejuAirIcon, JinAirIcon, KalIcon } from '@/assets/svg';
import Icons from '@/components/reservation/Icons';
import Info from '@/components/reservation/Info';
import { Flight } from '@/types/FlightTypes';
import React, { useState } from 'react';
import styled from 'styled-components';

interface FlightCardProps {
	flight: Flight;
}

// 항공사 아이콘 매핑
const airlineIcons: Record<string, React.ReactNode | undefined> = {
	이스타항공: <EastarIcon />,
	대한항공: <KalIcon />,
	진에어: <JinAirIcon />,
	제주항공: <JejuAirIcon />,
};

const FlightCard = ({ flight }: FlightCardProps) => {
	const { from, to, dep_time1, arr_time1, dep_time2, arr_time2, average_time, dep_price, arr_price, airline, is_like } =
		flight;

	const [isLike, setIsLike] = useState(is_like);
	const [isTooltipVisible, setIsTooltipVisible] = useState(false);

	// 금액 포맷 함수
	const formatPrice = (price: number) => new Intl.NumberFormat('ko-KR', { style: 'decimal' }).format(price);

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
				<Info depTime={arr_time1} arrTime={arr_time2} from={from} to={to} averageTime={average_time} />
				<Info depTime={dep_time1} arrTime={dep_time2} from={to} to={from} averageTime={average_time} />
			</InfoContainer>

			<PriceSelect depPrice={dep_price} arrPrice={arr_price} formatPrice={formatPrice} />
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
