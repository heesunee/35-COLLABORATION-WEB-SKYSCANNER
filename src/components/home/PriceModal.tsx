import Button from '@/components/common/Button.tsx';
import PriceInfoItem from '@/components/home/PriceInfoItem.tsx';
import { flexCssGenerator } from '@/styles/customStyle.ts';
import styled from 'styled-components';

interface props {
	isVisible: boolean;
	onModalClose?: () => void;
}

const PriceModal = ({ isVisible = false, onModalClose }: props) => {
	return (
		<PriceModalContainer isVisible={isVisible} onClick={onModalClose}>
			<PriceModalContent onClick={(e) => e.stopPropagation()}>
				<ModalHeader>가격 기준</ModalHeader>
				<ModalBody>
					<PriceInfoItem contents={'₩'} price={'저렴'} detail={'평균보다 현저히 낮은 가격'} color={'green'} />
					<PriceInfoItem
						contents={'₩₩'}
						price={'중간'}
						detail={'평균 ± 특정 범위의 가격 (일반적인 가격대)'}
						color={'orange'}
					/>
					<PriceInfoItem
						contents={'₩₩₩'}
						price={'비쌈'}
						detail={'평균보다 높거나, 성수기 등으로 인해 비싼 가격'}
						color={'red'}
					/>
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

const PriceModalContainer = styled.div.withConfig({
	shouldForwardProp: (prop) => prop !== 'isVisible',
})<{ isVisible: boolean }>`
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	background-color: ${({ theme }) => theme.colors.darkscreen};
	${flexCssGenerator('flex', 'center', 'center', 'column')}
	display: ${({ isVisible }) => (isVisible ? 'flex' : 'none')};
`;

const PriceModalContent = styled.div`
	width: 32.9rem;
	height: 23.9rem;
	flex-shrink: 0;
	border-radius: 2.3rem;
	background: ${({ theme }) => theme.colors.white};
`;

const ModalHeader = styled.section`
	height: 5.5rem;
	width: 100%;
	${flexCssGenerator('flex', 'center', 'center', 'column')}
	border-bottom: 1px solid ${({ theme }) => theme.colors.grey20};
	color: ${({ theme }) => theme.colors.black};
	${({ theme }) => theme.fonts.head3_eb_24}
	text-align: center;
`;

const ModalBody = styled.section`
	${flexCssGenerator('flex', 'flex-start', '', 'column')}
	padding: 1.6rem 2.3rem;
	gap: 1rem;
`;

const ModalFooter = styled.div`
	padding: 0.3rem 4.5rem 2.2rem 4.5rem;
`;

export default PriceModal;
