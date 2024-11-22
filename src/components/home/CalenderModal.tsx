import { ArrowLeftBlackIcon, InfoIcon, OneWayIcon, TwoWayIcon } from '@/assets/svg';
import Calender from '@/components/home/Calender.tsx';
import PriceImage from '@/components/home/PriceImage.tsx';
import PriceModal from '@/components/home/PriceModal.tsx';
import { flexCssGenerator } from '@/styles/customStyle.ts';
import { useState } from 'react';
import styled from 'styled-components';

interface props {
	isOpen: boolean;
	onModalToggle: () => void;
}
const CalenderModal = ({ isOpen = false, onModalToggle }: props) => {
	const [isPriceModalOpen, setIsPriceModalOpen] = useState(false);
	const onPriceModalToggle = () => {
		setIsPriceModalOpen((prev) => !prev);
	};

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
						<InfoFilterLeft>
							<TwoWayIcon />
							왕복
						</InfoFilterLeft>
						<InfoFilterRight>
							<OneWayIcon />
							편도
						</InfoFilterRight>
					</InfoFilter>
					<InfoFilter>
						<InfoGoLeft>
							<InfoGoTitle>가는 편</InfoGoTitle>
							<InfoGoContent>2024. 11. 6 수요일</InfoGoContent>
						</InfoGoLeft>
						<InfoGoRight>
							<InfoGoTitle>가는 편</InfoGoTitle>
							<InfoGoContent>2024. 11. 6 수요일</InfoGoContent>
						</InfoGoRight>
					</InfoFilter>
				</Information>
				<CalenderInfo>
					<PriceImage contents={'₩'} color={'green'} />
					<PriceImage contents={'₩₩'} color={'orange'} />
					<PriceImage contents={'₩₩₩'} color={'red'} />
					<InfoIcon onClick={onPriceModalToggle} />
				</CalenderInfo>
				<Calender />
			</ContentsWrap>
			<PriceModal isVisible={isPriceModalOpen} onModalClose={onPriceModalToggle} />
		</CalenderContainer>
	);
};

const CalenderContainer = styled.section<{ isOpen: boolean }>`
	background-color: ${({ theme }) => theme.colors.white};
	display: ${({ isOpen }) => (isOpen ? 'block' : 'none')};
	height: 100%;
	position: absolute;
	top: 0;
	padding: 1.9rem;
`;

const ContentsWrap = styled.div`
	${flexCssGenerator('column')}
`;

const Header = styled.header`
	${flexCssGenerator('flex', 'space-between', 'center')}
	width: 100%;
`;
const ModalTitle = styled.h2`
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

const InfoBase = styled.button`
	${flexCssGenerator('flex', 'center', 'center')}
	gap: 0.3rem;
	${({ theme }) => theme.fonts.body6_r_12}
	width: 16.7rem;
	height: 2.6rem;
	flex-shrink: 0;
`;

const InfoFilterLeft = styled(InfoBase)`
	color: ${({ theme }) => theme.colors.white};
	border-radius: 6px 0px 0px 6px;
	background: ${({ theme }) => theme.colors.darksky};
`;

const InfoFilterRight = styled(InfoBase)`
	color: ${({ theme }) => theme.colors.black};
	border-radius: 0px 6px 6px 0px;
	border: 1px solid ${({ theme }) => theme.colors.grey30};
	background: ${({ theme }) => theme.colors.white};
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
`;

const CalenderInfo = styled.section`
	${flexCssGenerator('flex', 'flex-start', 'center')} //margin: 1.4rem 0;
	gap:0.3rem;
	& > div {
		width: fit-content;
	}
`;

export default CalenderModal;
