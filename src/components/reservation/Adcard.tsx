import AdIcon from '@/assets/svg/ic_ad.svg?react';
import ExclamationIcon from '@/assets/svg/ic_exclamation_circle_gray.svg?react';
import React from 'react';
import styled from 'styled-components';

interface AdCardProps {
	Img: React.ComponentType;
	titles: string[];
	subTitles: string[];
}

const AdCard = ({ Img, titles, subTitles }: AdCardProps) => {
	return (
		<AdCardContainer>
			<TopSection>
				<Img />
				<div>
					<AdIcon />
					<ExclamationIcon />
				</div>
			</TopSection>
			<BottomSection>
				<div>
					{titles.map((title, index) =>
						index === 1 ? <EngTitle key={index}>{title}</EngTitle> : <KoreanTitle key={index}>{title}</KoreanTitle>,
					)}
				</div>
				<div>
					{subTitles.map((subTitle, index) =>
						index === 1 ? (
							<EngSubTitle key={index}>{subTitle}</EngSubTitle>
						) : (
							<KoreanSubTitle key={index}>{subTitle}</KoreanSubTitle>
						),
					)}
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
	${({ theme }) => theme.fonts.e_body_m_12}
`;
