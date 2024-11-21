import LeftIcon from '@/assets/svg/ic_angle_left_blue.svg?react';
import DashIcon from '@/assets/svg/ic_dash.svg?react';
import styled from 'styled-components';

const LocationInput = () => {
	return (
		<LocationContainer>
			<LeftIcon />
			<CenterInput>
				<div>
					<KoreanSpan>서울</KoreanSpan> <EngSpan>(ICN)</EngSpan>
				</div>
				<DashIcon />
				<div>
					<KoreanSpan>오키나와 나하</KoreanSpan> <EngSpan>(OKA)</EngSpan>
				</div>
			</CenterInput>
		</LocationContainer>
	);
};

export default LocationInput;

const LocationContainer = styled.section`
	background-color: ${({ theme }) => theme.colors.white};
	padding: 1.1rem 0.4rem;
	display: flex;
	justify-content: space-between;
	align-items: center;
	border-radius: 0.7rem;
	margin-bottom: 1.35rem;
`;

const CenterInput = styled.div`
	display: flex;
	align-items: center;
	justify-items: center;
	gap: 1.6rem;
	margin: 0 auto;
`;

const KoreanSpan = styled.span`
	${({ theme }) => theme.fonts.title3_eb_14};
`;

const EngSpan = styled.span`
	${({ theme }) => theme.fonts.e_body_m_14};
`;
