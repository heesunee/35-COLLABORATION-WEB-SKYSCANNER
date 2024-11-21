import Button from '@/components/common/Button.tsx';
import PriceImage from '@/components/home/price-image.tsx';
import { flexCssGenerator } from '@/styles/customStyle.ts';
import styled from 'styled-components';

interface props {
	isVisible: boolean;
	onModalClose: () => void;
}

const PriceModal = ({ isVisible = false, onModalClose }: props) => {
	return (
		<PriceModalContainer isVisible={isVisible} onClick={onModalClose}>
			<PriceModalContent onClick={(e) => e.stopPropagation()}>
				<ModalHeader>가격 기준</ModalHeader>
				<ModalBody>
					<PriceItem>
						<PriceImage contents={'₩'} color={'green'} />
						<PriceTitle>저렴</PriceTitle>
						<PriceValue>평균보다 현저히 낮은 가격</PriceValue>
					</PriceItem>
					<PriceItem>
						<PriceImage contents={'₩₩'} color={'orange'} />
						<PriceTitle>중간</PriceTitle>
						<PriceValue>평균 ± 특정 범위의 가격 (일반적인 가격대)</PriceValue>
					</PriceItem>
					<PriceItem>
						<PriceImage contents={'₩₩₩'} color={'red'} />
						<PriceTitle>비쌈</PriceTitle>
						<PriceValue>평균보다 높거나, 성수기 등으로 인해 비싼 가격</PriceValue>
					</PriceItem>
				</ModalBody>
				<ModalFooter>
					<Button size={'pricemodal'} onClick={onModalClose}>
						알겠습니다
					</Button>
				</ModalFooter>
			</PriceModalContent>
		</PriceModalContainer>
	);
};

const PriceModalContainer = styled.div<{ isVisible: boolean }>`
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	background-color: ${({ theme }) => theme.colors.darkscreen};
	${flexCssGenerator('flex', 'center', 'center', 'column')}
`;

const PriceModalContent = styled.div`
	width: 32.9rem;
	height: 23.9rem;
	flex-shrink: 0;
	border-radius: 2.3rem;
	background: ${({ theme }) => theme.colors.white};
`;

const ModalHeader = styled.div`
	height: 5.4rem;
	width: 100%;
	${flexCssGenerator('flex', 'center', 'center', 'column')}
	border-bottom: 1px solid ${({ theme }) => theme.colors.gray20};
	color: ${({ theme }) => theme.colors.black};
	text-align: center;
	font-size: 2.4rem;
	font-style: normal;
	font-weight: 800;
	line-height: 2rem;
`;

const ModalBody = styled.div`
	${flexCssGenerator('flex', 'flex-start', '', 'column')}
	padding: 1.6rem 2.3rem;
	gap: 1rem;
`;

const PriceItem = styled.div`
	${flexCssGenerator('flex', 'flex-start', 'center', 'row')}
	gap: 0.7rem;
`;

const PriceTitle = styled.div`
	${({ theme }) => theme.fonts.body1_sb_16}
`;

const PriceValue = styled.div`
	color: ${({ theme }) => theme.colors.gray40};
	${({ theme }) => theme.fonts.body3_sb_12}
`;

const ModalFooter = styled.div`
	padding: 0.3rem 4.5rem 2.2rem 4.5rem;
`;

export default PriceModal;
