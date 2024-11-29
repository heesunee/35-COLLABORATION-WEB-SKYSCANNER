import { ArrowrightIcon } from '@/assets/svg';
import { formatPrice } from '@/utils/flightUtils';
import styled from 'styled-components';

interface PriceSelectProps {
	totalPrice: number;
}
const PriceSelect = ({ totalPrice }: PriceSelectProps) => {
	// 금액 포맷 함수

	return (
		<BottomContainer>
			<PriceContainer>
				{/** 최저가 일때 해시태그, 후작업 예정 */}
				<Price>₩{formatPrice(totalPrice)}</Price>
			</PriceContainer>
			<SelectButton>
				선택하기
				<ArrowrightIcon />
			</SelectButton>
		</BottomContainer>
	);
};

export default PriceSelect;

const BottomContainer = styled.div`
	border-top: 1px solid ${({ theme }) => theme.colors.grey30};
	display: flex;
	align-items: center;
	gap: 1.2rem;
	justify-content: right;
	padding: 1.15rem 0;
	padding: 1.4rem;
`;

const PriceContainer = styled.div``;

const Price = styled.p`
	${({ theme }) => theme.fonts.e_title_eb_20}
	letter-spacing: 0.07rem;
`;

const SelectButton = styled.button`
	${({ theme }) => theme.fonts.title2_eb_16}
	border: none;
	border-radius: 0.7rem;
	width: 10.4rem;
	height: 3.5rem;
	background-color: ${({ theme }) => theme.colors.darksky};
	color: ${({ theme }) => theme.colors.white};
	display: flex;
	align-items: center;
	justify-content: center;
	cursor: pointer;
`;
