import { ArrowLeftBlackIcon, InfoIcon, OneWayIcon, TwoWayIcon } from '@/assets/svg';
import Button from '@/components/common/Button.tsx';
import Calender from '@/components/home/Calender.tsx';
import PriceImage from '@/components/home/PriceImage.tsx';
import PriceModal from '@/components/home/PriceModal.tsx';
import { flexCssGenerator } from '@/styles/customStyle.ts';
import { dateHandler } from '@/utils/dateHandler.ts';
import { useState } from 'react';
import styled from 'styled-components';

interface props {
	isOpen: boolean;
	onModalToggle: () => void;
}

const CalenderModal = ({ isOpen = false, onModalToggle }: props) => {
	const { firstSelectedDate, lastSelectedDate, handleSetDate } = dateHandler();
	const [filter, setFilter] = useState<'round' | 'oneway'>('round');
	const [isPriceModalOpen, setIsPriceModalOpen] = useState(false);
	const onPriceModalToggle = () => {
		setIsPriceModalOpen((prev) => !prev);
	};
	const onFilterClick = (filter: 'round' | 'oneway') => {
		setFilter(filter);
	};

	// console.log(firstSelectedDate, lastSelectedDate);

	return (
		<CalenderContainer isOpen={isOpen}>
			<ContentsWrap>
				<Header>
					<ArrowLeftBlackIcon onClick={onModalToggle} />
					<ModalTitle>날짜 선택</ModalTitle>
				</Header>
				<Information>
					<InforTitle>서울 - 오키나와</InforTitle>
					<InfoFilter>
						<InfoFilterLeft onClick={() => onFilterClick('round')} filter={filter}>
							<TwoWayIcon />
							왕복
						</InfoFilterLeft>
						<InfoFilterRight onClick={() => onFilterClick('oneway')} filter={filter}>
							<OneWayIcon />
							편도
						</InfoFilterRight>
					</InfoFilter>
					<InfoFilter>
						<InfoGoLeft>
							<InfoGoTitle>가는 편</InfoGoTitle>
							<InfoGoContent>{firstSelectedDate}</InfoGoContent>
						</InfoGoLeft>
						<InfoGoRight>
							<InfoGoTitle>오는 편</InfoGoTitle>
							<InfoGoContent>{lastSelectedDate}</InfoGoContent>
						</InfoGoRight>
					</InfoFilter>
				</Information>
				<CalenderInfo>
					<PriceImage contents={'₩'} color={'green'} />
					<PriceImage contents={'₩₩'} color={'orange'} />
					<PriceImage contents={'₩₩₩'} color={'red'} />
					<InfoIcon onClick={onPriceModalToggle} />
				</CalenderInfo>
				<Calender handleSetDate={handleSetDate} />
			</ContentsWrap>
			<PriceWrap>
				<PriceContents>
					<Price>277,700원</Price>
					<More>근 2주 중 최저가</More>
				</PriceContents>
				<Button variant={'apply'} size={'small'} onClick={onModalToggle}>
					적용
				</Button>
			</PriceWrap>
			<PriceModal isVisible={isPriceModalOpen} onModalClose={onPriceModalToggle} />
		</CalenderContainer>
	);
};

const CalenderContainer = styled.section<{ isOpen: boolean }>`
	background-color: ${({ theme }) => theme.colors.white};
	display: ${({ isOpen }) => (isOpen ? 'block' : 'none')};
	//height: ;
	position: absolute;
	top: 0;
`;

const ContentsWrap = styled.div`
	${flexCssGenerator('column')}
	padding: 1.9rem;
`;

const Header = styled.header`
	display: grid;
	justify-items: center;
	align-items: center;
	grid-template-columns: 0.1fr 1fr 0.1fr;
	width: 100%;
`;

const ModalTitle = styled.h2`
	justify-self: center;
	${({ theme }) => theme.fonts.btn1_eb_12}
`;

const Information = styled.section`
	${flexCssGenerator('flex', 'center', 'flex-start', 'column')}
	margin: 1.4rem 0 2.4rem;
	gap: 1rem;
`;

const InforTitle = styled.h3`
	${({ theme }) => theme.fonts.btn1_eb_12}
`;

const InfoFilter = styled.div`
	${flexCssGenerator('flex', 'center')}
	gap: 0.3rem;
`;

const InfoFilterButton = styled.button<{ filter: 'round' | 'oneway' }>`
	${flexCssGenerator('flex', 'center', 'center')}
	gap: 0.3rem;
	${({ theme }) => theme.fonts.body6_r_12}
	width: 16.7rem;
	height: 2.6rem;
	flex-shrink: 0;
	border: 1px solid ${({ theme }) => theme.colors.grey30};
`;

const InfoFilterLeft = styled(InfoFilterButton)`
	border-radius: 6px 0px 0px 6px;
	color: ${({ filter, theme }) => (filter === 'round' ? theme.colors.white : theme.colors.black)};
	background: ${({ filter, theme }) => (filter === 'round' ? theme.colors.darksky : theme.colors.white)};
	& > svg {
		& > path {
			stroke: ${({ filter, theme }) => (filter === 'round' ? theme.colors.white : theme.colors.black)};
		}
	}
`;

const InfoFilterRight = styled(InfoFilterButton)`
	border-radius: 0px 6px 6px 0px;
	color: ${({ filter, theme }) => (filter === 'round' ? theme.colors.black : theme.colors.white)};
	background: ${({ filter, theme }) => (filter === 'round' ? theme.colors.white : theme.colors.darksky)};
	& > svg {
		& > path {
			stroke: ${({ filter, theme }) => (filter === 'round' ? theme.colors.black : theme.colors.white)};
		}
	}
`;

const InfoGoBase = styled.div`
	${flexCssGenerator('flex', 'center', 'flex-start', 'column')}
	width: 167px;
	flex-shrink: 0;
	background: ${({ theme }) => theme.colors.skygrey};
	padding: 1.2rem 1.7rem;
	gap: 0.6rem;
`;

const InfoGoLeft = styled(InfoGoBase)`
	border-radius: 12px 2px 2px 12px;
`;

const InfoGoRight = styled(InfoGoBase)`
	border-radius: 2px 12px 12px 2px;
`;

const InfoGoTitle = styled.h3`
	${({ theme }) => theme.fonts.btn1_eb_12}
	color: ${({ theme }) => theme.colors.grey40};
`;

const InfoGoContent = styled.div`
	${({ theme }) => theme.fonts.e_body_m_12}
	color: ${({ theme }) => theme.colors.black};
	height: 1.7rem;
`;

const CalenderInfo = styled.section`
	${flexCssGenerator('flex', 'flex-start', 'center')} //margin: 1.4rem 0;
	gap:0.3rem;
	& > div {
		width: fit-content;
	}
`;

const PriceWrap = styled.div`
	border-top: 1px solid ${({ theme }) => theme.colors.grey20};
	display: flex;
	padding: 1.9rem 1.9rem 1.9rem 2.9rem;
	justify-content: space-between;
	margin-top: 20px;
`;

const PriceContents = styled.div`
	${flexCssGenerator('flex', 'center', 'flex-start', 'column')}
	flex-shrink: 0;
`;

const Price = styled.div`
	${({ theme }) => theme.fonts.title2_eb_16}
	color: ${({ theme }) => theme.colors.skyblue};
`;

const More = styled.div`
	${({ theme }) => theme.fonts.btn3_sb_10}
	color: ${({ theme }) => theme.colors.grey30};
`;

const MoreInfo = styled.div`
	${flexCssGenerator('flex', 'flex-end', 'center', 'row')}
	gap: 0.7rem;
	margin: 2rem 2.9rem;
`;
const ColorInfo = styled.span`
	width: 0.4rem;
	height: 0.4rem;
	border-radius: 50%;
	background: ${({ theme }) => theme.colors.red};
`;

const Info = styled.span`
	${({ theme }) => theme.fonts.btn4_sb_8}
	color: ${({ theme }) => theme.colors.grey30};
`;

export default CalenderModal;
