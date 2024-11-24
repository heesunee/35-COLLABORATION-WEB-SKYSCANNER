import hotelImage from '@/assets/img/hotel.png';
import AdvisorIcon from '@/assets/svg/ic_advisor.svg?react';
import LikeBlueIcon from '@/assets/svg/ic_like_blue.svg?react';
import ScoreIcon from '@/assets/svg/ic_score.svg?react';
import StarIcon from '@/assets/svg/ic_star.svg?react';
import styled from 'styled-components';

const WishHotelContentCard = () => {
	return (
		<WishHotelContentWrapper>
			<WishHotelImg src={hotelImage} alt="Hotel" />
			<LikeBlueIconStyled />
			<WishContentsContainer>
				<WishContentsTop>
					<HotelName>넥서스 리조트 & 스타 가람부 나이</HotelName>
					<StarIcon />
				</WishContentsTop>
				<HotelPlace>말레이시아 코타키나바루</HotelPlace>
				<WishContentsBottom>
					<FirstScore>4</FirstScore>
					<SecondScore>/5</SecondScore>
					<AdvisorIcon />
					<ScoreIcon />
					<Review>후기1764개</Review>
				</WishContentsBottom>
			</WishContentsContainer>
			<HotelDetailsContainer>
				<PeriodDetailsContainer>
					<TravelDays>15일-2025.2.17</TravelDays>
					<Person>성인3명,1개</Person>
				</PeriodDetailsContainer>
				<HashTagPriceContainer>
					<HashTag>#추천숙소</HashTag>
					<Price>₩157,700</Price>
				</HashTagPriceContainer>
			</HotelDetailsContainer>
		</WishHotelContentWrapper>
	);
};

export default WishHotelContentCard;

const WishHotelContentWrapper = styled.div`
	position: relative;
	display: flex;
	flex-direction: column;
	${({ theme }) => theme.shadows.card_shadow};
	border-radius: 0px 0px 11px 11px;
`;

const WishHotelImg = styled.img`
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
	padding: 1.1rem 1.7rem 1.3rem;
	width: 33.3rem;
	height: 13.2rem;
`;

const WishContentsTop = styled.div`
	display: flex;
	gap: 0.6rem;
`;

const HotelName = styled.p`
	width: 21.3rem;
	${({ theme }) => theme.fonts.title1_eb_20};
`;

const HotelPlace = styled.p`
	${({ theme }) => theme.fonts.body_sb_14};
	margin-top: 0.6rem;
`;

const WishContentsBottom = styled.div`
	display: flex;
	align-items: center;
	margin-top: 1.7rem;
	gap: 0.4rem;
`;

const FirstScore = styled.p`
	${({ theme }) => theme.fonts.title3_eb_14};
`;

const SecondScore = styled.p`
	${({ theme }) => theme.fonts.e_body_m_12};
	color: ${({ theme }) => theme.colors.grey40};
`;

const Review = styled.p`
	${({ theme }) => theme.fonts.body6_r_12};
	color: ${({ theme }) => theme.colors.grey40};
`;

const HotelDetailsContainer = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	height: 6.9rem;
	padding: 1.8rem 1.7rem 1.1rem;
	border-top: 1px solid ${({ theme }) => theme.colors.grey30};
`;

const PeriodDetailsContainer = styled.div`
	display: flex;
	flex-direction: column;
`;

const TravelDays = styled.p`
	${({ theme }) => theme.fonts.e_body_b_16};
`;

const Person = styled.p`
	${({ theme }) => theme.fonts.body6_r_12};
	color: ${({ theme }) => theme.colors.grey40};
`;

const HashTagPriceContainer = styled.div`
	display: flex;
	flex-direction: column;
`;

const HashTag = styled.p`
	${({ theme }) => theme.fonts.body3_sb_12};
	color: ${({ theme }) => theme.colors.skyblue};
	text-align: end;
`;

const Price = styled.p`
	${({ theme }) => theme.fonts.e_title_eb_20};
`;
