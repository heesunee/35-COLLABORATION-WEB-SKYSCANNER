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
				<ToolTipContainer onClick={handleExclamationClick} style={{ cursor: 'pointer' }}>
					<ToolTip>
						<FlightIcon />
						<StyledSpan>같은 노선의 항공편보다 이산화탄소 환산량이 </StyledSpan>
						<StyledSpan isNumber>36%</StyledSpan>
						<StyledSpan>더 적은 친환경 항공편이에요!</StyledSpan>
					</ToolTip>
					<PolyGonContainer>
						<PolygonIcon />
					</PolyGonContainer>
				</ToolTipContainer>
			)}

			<ExclamationIcon onClick={handleExclamationClick} style={{ cursor: 'pointer' }} />

			{isLike ? (
				<HeartBlackIcon onClick={handleHeartClick} style={{ cursor: 'pointer' }} />
			) : (
				<HeartIcon onClick={handleHeartClick} style={{ cursor: 'pointer' }} />
			)}
		</IconContainer>
	);
};

export default Icons;

const IconContainer = styled.div`
	display: flex;
	align-items: center;
`;

const ToolTipContainer = styled.div`
	position: absolute;
	top: -7%;
	left: -1.3%;
	z-index: 1;
`;

const ToolTip = styled.div`
	background-color: ${({ theme }) => theme.colors.darksky};
	height: 3.1rem;
	display: flex;
	gap: 0.2rem;
	align-items: center;
	color: ${({ theme }) => theme.colors.white};
	padding: 0.8rem 1rem;
	border-radius: 0.4rem;
	font-size: 1.2rem;
	white-space: nowrap;
`;

const StyledSpan = styled.span<{ isNumber?: boolean }>`
	${({ theme, isNumber }) => (isNumber ? theme.fonts.e_title_eb_12 : theme.fonts.btn3_sb_10)};
`;

const PolyGonContainer = styled.div`
	position: absolute;
	left: 73.4%;
	top: 73%;
	transform: scale(3, 4);
`;
