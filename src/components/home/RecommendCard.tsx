import { flexCssGenerator } from '@/styles/customStyle';
import { RecommendCardProps } from '@/types/recommendCard';
import React from 'react';
import styled from 'styled-components';

// "id": 1,
//       "backgroundImageUrl": "https://s3-alpha-sig.figma.com/img/812a/906e/598e9f83fb269012a2490410ee50c4e5?Expires=1733097600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=D3WqYvrvoAIFl3~QK-hp7avljMPE82X8vlw7xz7KytTfYvb4mv-A~Fa29tMIRc0nGTgJvMbCo8k5-CS4TniiWoo2ZESdZ0PLtMSfb8q5bZk8bydfuhwVNrb7Xv5EyvdgDRiNVU4Pp4tcTIyigXXIEck~1iZqZ7M8GvPkn26Lo8uNGvULYtPrYeDOrf2BKb8XpENHn48RROtg8fzkIPDnCEX70KlnCuMWoLek-PghK7uOgJCABY1UZeV35Kd5LHtpuRUnAf9H0lpJPGg0mKTWZYs6HTPerphixEbkk0zc9NZugPLqs339E4a1FeiW4F50vxDZPnA8up~U0T8VyI-iLQ__",
//       "country": "대한민국",
//       "spot": "제주",
//       "price": "₩30,914 출발",
//       "departureAirlineImageUrl": "https://www.figma.com/file/4PYHo5Y7DKsyTatuqpF0AX/image/e18a3c97533eae9f443afedf2faa29783ba3180d",
//       "departureDate": "11월 6일  (수)",
//       "departureTicketDescription": "티웨이 항공의 ICN - CJJ 항공권",
//       "arrivalAirlineImageUrl": "https://www.figma.com/file/4PYHo5Y7DKsyTatuqpF0AX/image/e18a3c97533eae9f443afedf2faa29783ba3180d",
//       "arrivalDate": "11월 13일  (수)",
//       "arrivalTicketDescription": "티웨이 항공의 CJJ - ICN 항공권"

const RecommendCard = ({
	backgroundImageUrl,
	country,
	spot,
	price,
	departureAirlineImageUrl,
	departureDate,
	departureTicketDescription,
	arrivalAirlineImageUrl,
	arrivalDate,
	arrivalTicketDescription,
}: RecommendCardProps) => {
	return (
		<RecommendCardWrapper>
			<RecommendImg src={backgroundImageUrl || 'https://ifh.cc/g/MZCwNq.jpg'} alt={`${spot}`} />
			<RecommendContentsWrapper>
				<RecommendTitle>
					<h2>{spot}</h2>
					<h3>{country}</h3>
				</RecommendTitle>
				<RecommendContent>
					<ContentImg src={departureAirlineImageUrl} alt={'항공사 이미지'} />
					<ContentInfo>
						<FlightInfo>
							<h2>{departureDate}</h2>
							<h3>{departureTicketDescription}</h3>
						</FlightInfo>
						<p>직항</p>
					</ContentInfo>
				</RecommendContent>
				<RecommendContent>
					<ContentImg src={arrivalAirlineImageUrl} alt={'항공사 이미지'} />
					<ContentInfo>
						<FlightInfo>
							<h2>{arrivalDate}</h2>
							<h3>{arrivalTicketDescription}</h3>
						</FlightInfo>
						<p>직항</p>
					</ContentInfo>
				</RecommendContent>
				<RecommendPrice>
					<p>{price} ></p>
				</RecommendPrice>
			</RecommendContentsWrapper>
		</RecommendCardWrapper>
	);
};

export default RecommendCard;

const RecommendCardWrapper = styled.div`
	width: 35rem;
	border-radius: 1.3rem;
	${({ theme }) => theme.shadows.card_shadow};
`;
const RecommendImg = styled.img`
	width: 100%;
`;
const RecommendContentsWrapper = styled.div`
	${flexCssGenerator('flex', 'center', '', 'column')}
	padding: 0.8rem 1rem 1.6rem 0.9rem;
	gap: 1.5rem;
`;
const RecommendTitle = styled.div`
	h2 {
		${({ theme }) => theme.fonts.title2_eb_16}
		color: ${({ theme }) => theme.colors.black}
	}
	h3 {
		${({ theme }) => theme.fonts.body3_sb_12}
		color: ${({ theme }) => theme.colors.grey40}
	}
`;
const RecommendContent = styled.div`
	${flexCssGenerator('flex', 'center', 'center', 'row')}
	width: 100%;
`;
const ContentImg = styled.img`
	width: 2.4rem;
`;
const ContentInfo = styled.div`
	${flexCssGenerator('flex', 'space-between', 'center', 'row')}
	width:100%;
	p {
		${({ theme }) => theme.fonts.e_title_eb_12}
		color: ${({ theme }) => theme.colors.black}
	}
`;

const FlightInfo = styled.div`
	h2 {
		${({ theme }) => theme.fonts.body2_sb_14}
		color: ${({ theme }) => theme.colors.black}
	}
	h3 {
		${({ theme }) => theme.fonts.e_body_m_10}
		color: ${({ theme }) => theme.colors.grey40}
	}
`;

const RecommendPrice = styled.div`
	${flexCssGenerator('flex', 'end', 'center', 'row')}
	${({ theme }) => theme.fonts.title3_eb_14}
	color: ${({ theme }) => theme.colors.skyblue}
`;
