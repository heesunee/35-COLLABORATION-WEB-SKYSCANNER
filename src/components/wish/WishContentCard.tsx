import FlightDetails from './FlightDetails';
import FlightInfo from './FlightInfo';
import ToggleSwitch from './ToggleSwitch';
import LikeBlueIcon from '@/assets/svg/ic_like_blue.svg?react';
import { WishContentCardProps } from '@/types/wishContentCard';
import { useState } from 'react';
import styled from 'styled-components';

const WishContentCard = ({
	id,
	backgroundImageUrl,
	departure,
	arrival,
	airline,
	depFlightTimeline,
	depFlightTime,
	depAirport,
	arrFlightTimeline,
	arrFlightTime,
	arrAirport,
	travelDays,
	person,
	price,
}: WishContentCardProps) => {
	const [isChecked, setIsChecked] = useState(true);

	const handleToggle = () => {
		setIsChecked((prev) => !prev);
	};
	return (
		<WishContentWrapper>
			<WishContentsImg src={backgroundImageUrl || 'https://ifh.cc/g/MZCwNq.jpg'} alt={`${departure} - ${arrival}`} />
			<LikeBlueIconStyled />
			<WishContentsContainer>
				<WishContentsMid>
					<WishContentsTitle>
						{departure} - {arrival}
					</WishContentsTitle>
					<FlightInfo
						timeline={depFlightTimeline}
						route={depAirport}
						airline={airline}
						option="직항"
						duration={depFlightTime}
					/>
					<FlightInfo
						timeline={arrFlightTimeline}
						route={arrAirport}
						airline={airline}
						option="직항"
						duration={arrFlightTime}
					/>
				</WishContentsMid>
				<WishContentsMidBottom>
					<PriceChangeWrapper>
						<PriceChangeText>가격 변동 알림</PriceChangeText>
					</PriceChangeWrapper>
					<ToggleSwitch id={`toggle-${id}`} isChecked={isChecked} onChange={handleToggle} />
				</WishContentsMidBottom>
			</WishContentsContainer>
			<FlightDetails travelDays={travelDays} personInfo={`성인 ${person}명, 일반석`} price={price} />
		</WishContentWrapper>
	);
};

export default WishContentCard;

const WishContentWrapper = styled.div`
	position: relative;
	display: flex;
	flex-direction: column;
	${({ theme }) => theme.shadows.card_shadow};
	border-radius: 0px 0px 11px 11px;
`;

const WishContentsImg = styled.img`
	width: 100%;
	height: auto;
	object-fit: cover;
`;

const LikeBlueIconStyled = styled(LikeBlueIcon)`
	position: absolute;
	top: 1.8rem;
	right: 1.3rem;
`;

const WishContentsContainer = styled.div`
	display: flex;
	flex-direction: column;
	padding: 1.4rem 1.7rem;
	width: 33.3rem;
	height: 21.2rem;
`;

const WishContentsMid = styled.div`
	display: flex;
	flex-direction: column;
	gap: 1.7rem;
`;

const WishContentsTitle = styled.h2`
	${({ theme }) => theme.fonts.title1_eb_20};
`;

const WishContentsMidBottom = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	margin-top: 0.8rem;
`;

const PriceChangeWrapper = styled.div`
	display: flex;
	align-items: center;
	gap: 0.1rem;
`;

const PriceChangeText = styled.p`
	${({ theme }) => theme.fonts.body2_sb_14};
`;
