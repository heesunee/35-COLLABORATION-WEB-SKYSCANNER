import RecommendCard from './RecommendCard';
import {
	ArrowRightGreyIcon,
	CalendarBlackIcon,
	CardBoard,
	DownBlackIcon,
	FlightBlackIcon,
	HotelBlackIcon,
	NameTagIcon,
	TicketIcon,
} from '@/assets/svg';
import { mockRecommendList } from '@/mocks/mockRecommendList';
import { flexCssGenerator } from '@/styles/customStyle.ts';
import styled from 'styled-components';

const HomeContents = () => {
	return (
		<HomeContentsWrapper>
			<BreadCrumbs>
				<p>홈</p>
				<ArrowRightGreyIcon />
				<p>항공권</p>
			</BreadCrumbs>
			<ContentsTopWrapper>
				<ContentsTop>
					<FlightBlackIcon />
					<p>
						출발지와 도착지에 상관없이 최저가 항공권을 검색하세요.
						<br />
						추가 수수료 없이 간편하게 예약할 수 있습니다.
					</p>
				</ContentsTop>
				<ContentsTop>
					<CalendarBlackIcon />
					<p>
						1,000개 이상의 항공권을 비교해보세요.
						<br />
						가장 저렴한 항공권, 비행 시간이 짧은 항공권,
						<br />
						탄소 배출량이 적은 항공권까지 원하는 기준으로 선택할 수 있어요.
					</p>
				</ContentsTop>
				<ContentsTop>
					<NameTagIcon />
					<p>
						항공권이 가장 저렴한 달과 날짜를 찾아보고,
						<br />
						원하는 가격이 나왔을 때를 놓치지 않도록 가격 변동 알림을 켜보세요.
					</p>
				</ContentsTop>
			</ContentsTopWrapper>
			<RecommendTitle>
				<h2>대한민국 출발 최저가 항공권</h2>
				<h3>
					가장 저렴한 가격의 특가 항공권을 만나보세요. 서둘러 예약하세요. <br />
					모두 앞으로 3개월 이내에 출발하는 항공권입니다.
				</h3>
			</RecommendTitle>
			<ContentsRecommendWrapper>
				<RecommendCardsWrapper>
					{mockRecommendList.map((recommend) => (
						<RecommendCard key={recommend.id} {...recommend} />
					))}
				</RecommendCardsWrapper>
				<p className="special-price">특가 상품 접기</p>
				<RecommendComments>
					<h3>스카이스캐너는 이런 특가 항공권을 어떻게 찾아냈을까요?</h3>
					<p>
						앞으로 3개월 내 출발하는 대한민국발 이코노미 항공편을
						<br /> 한눈에 확인하세요. 평균 가격 대비 할인율이 가장 높은 항공권을
						<br /> 추천해드립니다. 모든 정보는 최근 4일 내에 업데이트된 내용이며,
						<br /> 가격은 실시간으로 변동될 수 있으니 서둘러 확인하세요!
					</p>
				</RecommendComments>
			</ContentsRecommendWrapper>
			<ContentsFAQWrapper>
				<FAQTitle>항공권 특가 찾기: 자주 묻는 질문</FAQTitle>
				<FAQBoxWrapper>
					<FAQBox>
						<h3>특가 항공권은 어떻게 찾을 수 있나요?</h3>
						<DownBlackIcon />
					</FAQBox>
					<FAQBox>
						<h3>땡처리 특가 항공권은 어떻게 찾을 수 있나요?</h3>
						<DownBlackIcon />
					</FAQBox>
					<FAQBox>
						<h3>
							특가 및 저가 항공권에 대한 최신 정보를 받아보려면
							<br />
							어떻게 해야 하나요?
						</h3>
						<DownBlackIcon />
					</FAQBox>
					<FAQBox>
						<h3>항공권을 예약한 후에는 어떻게 되나요?</h3>
						<DownBlackIcon />
					</FAQBox>
					<FAQBox>
						<h3>지금 어디로 가는 항공권을 예약하는 게 좋은가요?</h3>
						<DownBlackIcon />
					</FAQBox>
				</FAQBoxWrapper>
				<ButtonWrapper>
					<AskButton>질문하러 가기</AskButton>
				</ButtonWrapper>
			</ContentsFAQWrapper>
			<CardBoardWrapper>
				<CardBoard />
			</CardBoardWrapper>
			<PlanWrapper>
				<PlanTitle>
					<h2>부담 없이 여행 계획하기</h2>
					<h3>
						여행 내내 순조롭게, 안심하고 여행하실 수 있도록
						<br />
						스카이스캐너가 도와드립니다.
					</h3>
				</PlanTitle>
				<PlanContents>
					<div>
						<TicketIcon />
						<h2>변경 가능한 항공권 특가 찾기</h2>
					</div>
					<p>
						항공편이 변경되거나 취소되어도 불이익을 받지 않는
						<br />
						변경 가능한 항공권 특가를 둘러보세요.
					</p>
				</PlanContents>
				<PlanContents>
					<div>
						<HotelBlackIcon />
						<h2>호텔 및 렌터카 추가</h2>
					</div>
					<p>
						호텔과 렌터카를 예약하면서 여정을 계획하고,
						<br />
						모든 예약을 한 곳에서 관리하세요.
					</p>
				</PlanContents>
			</PlanWrapper>
		</HomeContentsWrapper>
	);
};

export default HomeContents;

const HomeContentsWrapper = styled.div`
	background-color: ${({ theme }) => theme.colors.white};
	${flexCssGenerator('flex', '', '', 'column')}
`;
const BreadCrumbs = styled.div`
	${flexCssGenerator('flex', 'start', 'center', 'row')}
	padding: 1.5rem 0 2.9rem 1.2rem;

	p {
		${({ theme }) => theme.fonts.btn1_eb_12}
		color: ${({ theme }) => theme.colors.black}
	}

	p:nth-of-type(1) {
		color: ${({ theme }) => theme.colors.skyblue};
	}
`;
const ContentsTopWrapper = styled.div`
	${flexCssGenerator('flex', '', '', 'column')}
	padding: 0 0 5.1rem 0.7rem;
	gap: 1.2rem;
`;
const ContentsTop = styled.div`
	${flexCssGenerator('flex', '', '', 'row')}
	gap:0.7rem;
	p {
		${({ theme }) => theme.fonts.e_title_eb_12_new}
	}
`;
const ContentsRecommendWrapper = styled.div`
	${flexCssGenerator('flex', '', 'center', 'column')}
	gap:1.7rem;
	padding-bottom: 4.6rem;

	.special-price {
		${({ theme }) => theme.fonts.body2_sb_14}
		color: ${({ theme }) => theme.colors.skyblue}
	}
`;
const RecommendTitle = styled.div`
	${flexCssGenerator('flex', '', '', 'column')}
	gap: 0.3rem;
	padding-left: 1.6rem;
	padding-bottom: 1.1rem;
	h2 {
		${({ theme }) => theme.fonts.title1_eb_20}
		color: ${({ theme }) => theme.colors.black}
	}
	h3 {
		${({ theme }) => theme.fonts.body2_sb_14}
		color: ${({ theme }) => theme.colors.black}
	}
`;
const RecommendCardsWrapper = styled.div`
	${flexCssGenerator('flex', '', 'center', 'column')}
	gap: 1.5rem;
`;
const RecommendComments = styled.div`
	border: 1px solid ${({ theme }) => theme.colors.grey20};
	border-radius: 8px;
	padding: 0.7rem 1.2rem 0.5rem 1.3rem;
	${flexCssGenerator('flex', '', '', 'column')}
	gap: 0.2rem;

	h3 {
		${({ theme }) => theme.fonts.body2_sb_14}
		color: ${({ theme }) => theme.colors.black}
	}

	p {
		${({ theme }) => theme.fonts.body5_r_14}
		color: ${({ theme }) => theme.colors.black}
	}
`;

const ContentsFAQWrapper = styled.div`
	${flexCssGenerator('flex', '', '', 'column')}
	padding: 0 1.3rem 4.1rem;
	gap: 1rem;
`;
const FAQTitle = styled.h1`
	${({ theme }) => theme.fonts.title1_eb_20}
	color: ${({ theme }) => theme.colors.black}
`;

const FAQBoxWrapper = styled.div``;

const FAQBox = styled.div`
	${flexCssGenerator('flex', 'space-between', 'center', 'row')}
	padding: 1rem 0;
	border-bottom: 1px solid ${({ theme }) => theme.colors.grey30};

	h3 {
		${({ theme }) => theme.fonts.body2_sb_14}
		color: ${({ theme }) => theme.colors.black}
	}
`;
const ButtonWrapper = styled.div`
	width: 100%;
	${flexCssGenerator('flex', 'end', 'center', 'row')}
`;
const AskButton = styled.div`
	width: 9.6rem;
	border-radius: 7px;
	padding: 0.9rem 1.2rem;
	background-color: ${({ theme }) => theme.colors.skyblue};
	${({ theme }) => theme.fonts.title3_eb_14}
	color: ${({ theme }) => theme.colors.white};
	cursor: pointer;
`;

const CardBoardWrapper = styled.div`
	${flexCssGenerator('flex', '', 'center', 'column')}
`;
const PlanWrapper = styled.div`
	${flexCssGenerator('flex', '', '', 'column')}

	padding: 3.1rem 2rem 1.9rem;
	gap: 1.9rem;
`;
const PlanTitle = styled.div`
	${flexCssGenerator('flex', '', '', 'column')}
	gap: 1rem;

	h2 {
		${({ theme }) => theme.fonts.title1_eb_20}
		color: ${({ theme }) => theme.colors.black}
	}

	h3 {
		${({ theme }) => theme.fonts.body2_sb_14_new2}
		color: ${({ theme }) => theme.colors.black}
	}
`;
const PlanContents = styled.div`
	div {
		${flexCssGenerator('flex', '', 'center', 'row')}
		gap: 1.4rem;
	}
	h2 {
		${({ theme }) => theme.fonts.body1_sb_16}
		color: ${({ theme }) => theme.colors.black}
	}
	p {
		padding-left: 3.6rem;
		${({ theme }) => theme.fonts.body2_sb_14_new2}
		color: ${({ theme }) => theme.colors.grey40}
	}
`;
