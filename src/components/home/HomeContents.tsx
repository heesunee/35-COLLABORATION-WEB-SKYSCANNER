import RecommendCard from './RecommendCard';
import { ArrowRightGreyIcon, CalendarBlackIcon, CardBoard, FlightBlackIcon, NameTagIcon } from '@/assets/svg';
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
			<ContentsRecommendWrapper>
				<RecommendTitle>
					<h2>대한민국 출발 최저가 항공권</h2>
					<h3>
						{
							'가장 저렴한 가격의 특가 항공권을 만나보세요. 서둘러 예약하세요.\n모두 앞으로 3개월 이내에 출발하는 항공권입니다.'
						}
					</h3>
				</RecommendTitle>
				<RecommendCardsWrapper>
					{mockRecommendList.map((recommend) => (
						<RecommendCard key={recommend.id} {...recommend} />
					))}
				</RecommendCardsWrapper>
				<p>특가 상품 접기</p>
				<RecommendComments>
					<h3>스카이스캐너는 이런 특가 항공권을 어떻게 찾아냈을까요?</h3>
					<p>
						앞으로 3개월 내 출발하는 대한민국발 이코노미 항공편을 한눈에 확인하세요. 평균 가격 대비 할인율이 가장 높은
						항공권을 추천해드립니다. 모든 정보는 최근 4일 내에 업데이트된 내용이며, 가격은 실시간으로 변동될 수 있으니
						서둘러 확인하세요!
					</p>
				</RecommendComments>
			</ContentsRecommendWrapper>
			<ContentsFAQWrapper>
				<FAQBox></FAQBox>
				<AskButton></AskButton>
			</ContentsFAQWrapper>
			<CardBoard />
			<PlanWrapper>
				<PlanTitle>
					<h2>부담 없이 여행 계획하기</h2>
					<h3>여행 내내 순조롭게, 안심하고 여행하실 수 있도록 스카이스캐너가 도와드립니다.</h3>
				</PlanTitle>
				<PlanContents></PlanContents>
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
const ContentsRecommendWrapper = styled.div``;
const RecommendTitle = styled.div``;
const RecommendCardsWrapper = styled.div``;
const RecommendComments = styled.div``;
const ContentsFAQWrapper = styled.div``;
const FAQBox = styled.div``;
const AskButton = styled.div``;
const PlanWrapper = styled.div``;
const PlanTitle = styled.div``;
const PlanContents = styled.div``;
