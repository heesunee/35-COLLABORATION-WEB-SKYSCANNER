import { HeartIcon, OwlIcon, ReviewFillFIcon, ReviewIcon, StarIcon } from '@/assets/svg';
import { Hotel } from '@/types/hotel';
import styled from 'styled-components';

interface HotelCardProps {
	hotel: Hotel;
}
const HotelCard = ({ hotel }: HotelCardProps) => {
	const { name, image, price, star, description, rating, review } = hotel;
	console.log(image);

	return (
		<HotelCardContainer>
			<HotelImage src={image} alt={`${name} 이미지`} />
			<Wrapper>
				<TopWrapper>
					<LeftWrapper>
						<Title>{name}</Title>
						<IconsWrapper>
							{Array.from({ length: star }, (_, index) => (
								<StarIcon key={index} />
							))}
						</IconsWrapper>
					</LeftWrapper>
					<HeartIcon />
				</TopWrapper>

				<BottomWrapper>
					<Left>
						<Description>{description}</Description>

						<Bottom>
							<Rating>{rating}</Rating>
							<Review>{review}</Review>
							<OwlIcon />
							<IconsWrapper>
								<ReviewFillFIcon />
								<ReviewFillFIcon />
								<ReviewFillFIcon />
								<ReviewFillFIcon />
								<ReviewIcon />
							</IconsWrapper>
						</Bottom>
					</Left>
					<Right>
						<Price>{price}</Price>
						<p>1박 요금</p>
					</Right>
				</BottomWrapper>
			</Wrapper>
		</HotelCardContainer>
	);
};

export default HotelCard;

const HotelCardContainer = styled.div`
	width: 36.2rem;
	height: 13.2rem;
	padding: 1.8rem 0.5rem;
	background-color: ${({ theme }) => theme.colors.white};
	border-radius: 1rem;
	margin-bottom: 0.9rem;
	display: flex;

	& p {
		${({ theme }) => theme.fonts.body3_sb_12};
	}
`;

const Wrapper = styled.div`
	width: 100%;
	padding: 0.2rem 0.6rem;
`;

const TopWrapper = styled.div`
	display: flex;
	justify-content: space-between;
	margin-bottom: 0.35rem;
`;

const BottomWrapper = styled.div`
	display: flex;
	justify-content: space-between;
`;

const LeftWrapper = styled.div`
	gap: 0.6rem;
`;

const HotelImage = styled.img``;

const Left = styled.div`
	display: flex;
	flex-direction: column;
	gap: 0.75rem;
`;

const Right = styled.div`
	display: flex;
	flex-direction: column;
	gap: 0.55rem;
	text-align: end;
`;

const Bottom = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	gap: 0.2rem;
`;

const Title = styled.h1`
	${({ theme }) => theme.fonts.title2_eb_16};
	color: ${({ theme }) => theme.colors.gray40};
	margin-bottom: 0.6rem;
`;

const Description = styled.p`
	${({ theme }) => theme.fonts.body3_sb_12};
	color: ${({ theme }) => theme.colors.gray40};
`;
const Rating = styled.p`
	${({ theme }) => theme.fonts.title3_eb_14};
`;
const Price = styled.p`
	${({ theme }) => theme.fonts.e_title_eb_16};
`;
const Review = styled.p`
	${({ theme }) => theme.fonts.body6_r_12};
	color: ${({ theme }) => theme.colors.gray40};
`;

const IconsWrapper = styled.div`
	display: flex;
	gap: 0.1rem;
`;
