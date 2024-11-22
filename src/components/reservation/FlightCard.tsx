import Info from './Info';
import ArrowrightIcon from '@/assets/svg/ic_arrow_right_white.svg?react';
import ExclamationIcon from '@/assets/svg/ic_exclamation_circle_navy.svg?react';
import HeartIcon from '@/assets/svg/ic_heat_outline.svg?react';
import EastarIcon from '@/assets/svg/img_eastar.svg?react';
import JejuAirIcon from '@/assets/svg/img_jejuair.svg?react';
import JinAirIcon from '@/assets/svg/img_jinair.svg?react';
import KalIcon from '@/assets/svg/img_koreaair.svg?react';
import { Flight } from '@/types/FlightTypes';
import styled from 'styled-components';

interface FlightCardProps {
	flight: Flight;
}

// 항공사 아이콘 매핑
const airlineIcons: Record<string, JSX.Element | undefined> = {
	'이스타 항공': <EastarIcon />,
	'대한항공 (KAL)': <KalIcon />,
	진에어: <JinAirIcon />,
	제주항공: <JejuAirIcon />,
};

const FlightCard = ({ flight }: FlightCardProps) => {
	const { from, to, dep_time1, arr_time1, dep_time2, arr_time2, average_time, dep_price, arr_price, airline, is_like } =
		flight;

	// 금액 포맷 함수
	const formatPrice = (price: number) => new Intl.NumberFormat('ko-KR', { style: 'decimal' }).format(price);

	return (
		<FlightCardContainer>
			<TopBar>
				<AirLine>
					{airlineIcons[airline] || null}
					{airline}
				</AirLine>
				<IconContainer>
					<ExclamationIcon />
					<HeartIcon />
				</IconContainer>
			</TopBar>
			<InfoContainer>
				<Info depTime={arr_time1} arrTime={arr_time2} from={from} to={to} averageTime={average_time} />
				<Info depTime={dep_time1} arrTime={dep_time2} from={to} to={from} averageTime={average_time} />
			</InfoContainer>

			<Rectangle />

			<BottomContainer>
				<PriceContainer>
					{/** 최저가 일때 해시태그, 후작업 예정ㄴ */}
					<Price>₩{formatPrice(arr_price + dep_price)}</Price>
				</PriceContainer>
				<SelectButton>
					선택하기
					<ArrowrightIcon />
				</SelectButton>
			</BottomContainer>
		</FlightCardContainer>
	);
};

export default FlightCard;

const FlightCardContainer = styled.div`
	background-color: ${({ theme }) => theme.colors.white};
	display: flex;
	width: 36.2rem;
	height: 25.3rem;
	padding: 1.4rem 2.4rem;
	flex-direction: column;
	border-radius: 1.2rem;
`;

const TopBar = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
`;

const AirLine = styled.span`
	${({ theme }) => theme.fonts.body6_r_12};
	color: ${({ theme }) => theme.colors.grey40};
	display: flex;
	align-items: center;
	gap: 0.3rem;
`;

const IconContainer = styled.div`
	display: flex;
	align-items: center;
`;

const InfoContainer = styled.div`
	display: flex;
	gap: 1.4rem;
	flex-direction: column;
`;

const Rectangle = styled.div`
	height: 0.1rem;

	// 부모요소 넓이+ 줄어든 패딩값
	width: calc(100% + 5.4rem);

	// 패딩 값만큼  왼쪽으로 이동
	transform: translateX(-3rem);
	background-color: ${({ theme }) => theme.colors.grey30};
	margin-top: 2rem;
`;

const BottomContainer = styled.div`
	display: flex;
	align-items: center;
	gap: 1.2rem;
	justify-content: right;
	padding: 1.15rem 0;
`;

const PriceContainer = styled.div``;

const Price = styled.p`
	${({ theme }) => theme.fonts.e_title_eb_20}
	letter-spacing: 0.07rem;
`;
const SelectButton = styled.button`
	${({ theme }) => theme.fonts.title2_eb_16}
	border: none;
	border-radius: 0.7rem;
	width: 10.4rem;
	height: 3.5rem;
	background-color: ${({ theme }) => theme.colors.darksky};
	color: ${({ theme }) => theme.colors.white};
	display: flex;
	align-items: center;
	justify-content: center;
`;
