import FlightDetails from './FlightDetails';
import FlightInfo from './FlightInfo';
import { WishContentCardProps } from '@/types/wishContentCard';
import styled from 'styled-components';

const WishContentCard = ({
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
	return (
		<WishContentWrapper>
			<WishContentsImg src={backgroundImageUrl || 'https://ifh.cc/g/MZCwNq.jpg'} alt={`${departure} - ${arrival}`} />
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
					<ToggleWrapper>
						<input type="checkbox" id={`toggle-${departure}-${arrival}`} defaultChecked />
						<label htmlFor={`toggle-${departure}-${arrival}`} />
					</ToggleWrapper>
				</WishContentsMidBottom>
			</WishContentsContainer>
			<FlightDetails travelDays={travelDays} personInfo={`성인 ${person}명, 일반석`} price={price} />
		</WishContentWrapper>
	);
};

export default WishContentCard;

const WishContentWrapper = styled.div`
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

const ToggleWrapper = styled.div`
	display: flex;
	align-items: center;

	input[type='checkbox'] {
		appearance: none;
		width: 3.9rem;
		height: 2rem;
		background: ${({ theme }) => theme.colors.grey40};
		border-radius: 1rem;
		position: relative;
		cursor: pointer;
		transition: background 0.3s ease;

		&:checked {
			background: ${({ theme }) => theme.colors.skyblue};
		}

		&:checked + label::before {
			transform: translateX(2.2rem);
		}
	}

	label {
		display: block;
		width: 3.9rem;
		height: 2rem;
		position: absolute;
		cursor: pointer;
	}

	label::before {
		content: '';
		width: 1.5rem;
		height: 1.5rem;
		background: white;
		border-radius: 50%;
		position: absolute;
		top: 0.2rem;
		left: 0.5rem;
		transition: transform 0.3s ease;
	}
`;
