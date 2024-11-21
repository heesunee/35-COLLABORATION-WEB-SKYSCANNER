import AdIcon from '@/assets/svg/ic_ad.svg?react';
import ExclamationIcon from '@/assets/svg/ic_exclamation_circle_gray.svg?react';
import HanacardIcon from '@/assets/svg/img_hanacard.svg?react';
import styled from 'styled-components';

const AdCard = () => {
	return (
		<AdCardContainer>
			<TopSection>
				<HanacardIcon />
				<div>
					<AdIcon />
					<ExclamationIcon />
				</div>
			</TopSection>
			<BottomSection>
				<div>
					<KoreanTitle>해외여행은 트래블</KoreanTitle>
					<EngTitle>GO</EngTitle>
					<KoreanTitle>체크카드!</KoreanTitle>
				</div>
				<div>
					<KoreanSubTitle>트래블로그와</KoreanSubTitle>
					<EngSubTitle> Visa</EngSubTitle>
					<KoreanSubTitle>의 만남으로 이뤄진 트래블카드</KoreanSubTitle>
				</div>
			</BottomSection>
		</AdCardContainer>
	);
};

export default AdCard;

const AdCardContainer = styled.div`
	background-color: ${({ theme }) => theme.colors.white};
	border-radius: 1.2rem;
	display: flex;
	gap: 1.4rem;
	width: 36.2rem;
	height: 12rem;
	padding: 1.6rem 0.9rem;
	flex-direction: column;
	box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
	margin-bottom: 2rem;
`;

const TopSection = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding-left: 1rem;

	& div {
		display: flex;
		gap: 0.3rem;
		align-items: center;
	}
`;

const BottomSection = styled.div`
	display: flex;
	gap: 1.05rem;
	flex-direction: column;
`;
const KoreanTitle = styled.span`
	${({ theme }) => theme.fonts.title1_eb_20}
`;
const EngTitle = styled.span`
	${({ theme }) => theme.fonts.e_title_eb_20}
`;

const KoreanSubTitle = styled.span`
	${({ theme }) => theme.fonts.body2_r_14_new}
`;
const EngSubTitle = styled.span`
	${({ theme }) => theme.fonts.e_body_m_14}
`;
