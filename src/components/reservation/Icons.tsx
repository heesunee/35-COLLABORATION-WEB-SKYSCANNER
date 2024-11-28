import { ExclamationIcon, FlightIcon, HeartBlackIcon, HeartIcon, PolygonIcon } from '@/assets/svg';
import styled from 'styled-components';

interface IconsProps {
	isTooltipVisible: boolean;
	isLike: boolean;
	handleExclamationClick: () => void;
	handleHeartClick: () => void;
}

const Icons = ({ isTooltipVisible, isLike, handleExclamationClick, handleHeartClick }: IconsProps) => {
	return (
		<IconContainer>
			{isTooltipVisible && (
				<ToolTipContainer onClick={handleExclamationClick}>
					<ToolTip>
						<FlightIcon />
						같은 노선의 항공편보다 이산화탄소 환산량이 36% 더 적은 친환경 항공편이에요!
					</ToolTip>
					<PolyGonContainer>
						<PolygonIcon />
					</PolyGonContainer>
				</ToolTipContainer>
			)}

			<ExclamationIcon onClick={handleExclamationClick} />

			{isLike ? (
				<Scaled>
					<HeartBlackIcon onClick={handleHeartClick} />
				</Scaled>
			) : (
				<Scaled>
					<HeartIcon onClick={handleHeartClick} />
				</Scaled>
			)}
		</IconContainer>
	);
};

export default Icons;

// 스타일 정의
const IconContainer = styled.div`
	display: flex;
	align-items: center;
`;

const ToolTipContainer = styled.div`
	position: absolute;
	top: -7%;
	left: -1%;
	z-index: 1;
	cursor: pointer;
`;

const ToolTip = styled.div`
	background-color: ${({ theme }) => theme.colors.darksky};
	height: 3.1rem;
	display: flex;
	align-items: center;
	gap: 0.2rem;

	color: ${({ theme }) => theme.colors.white};
	padding: 0.8rem 1rem;
	border-radius: 0.4rem;
	white-space: nowrap;
`;

const PolyGonContainer = styled.div`
	position: absolute;
	left: 73.4%;
	top: 73%;
	transform: scale(3, 4);
`;

const Scaled = styled.div`
	transform: scale(2);
	padding: 0.8rem;
`;
