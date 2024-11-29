import PriceImage from '@/components/home/PriceImage.tsx';
import { flexCssGenerator } from '@/styles/customStyle.ts';
import styled from 'styled-components';

interface props {
	contents: '₩' | '₩₩' | '₩₩₩';
	price: '저렴' | '중간' | '비쌈';
	detail: string;
	color: 'green' | 'orange' | 'red';
}

const PriceInfoItem = ({ contents, price, detail, color }: props) => {
	return (
		<PriceItem>
			<PriceImage contents={contents} color={color} />
			<PriceTitle>{price}</PriceTitle>
			<PriceValue>{detail}</PriceValue>
		</PriceItem>
	);
};

const PriceItem = styled.div`
	${flexCssGenerator('flex', 'flex-start', 'center', 'row')}
	gap: 0.7rem;
`;

const PriceTitle = styled.div`
	${({ theme }) => theme.fonts.body1_sb_16}
`;

const PriceValue = styled.div`
	color: ${({ theme }) => theme.colors.grey40};
	${({ theme }) => theme.fonts.body3_sb_12}
`;

export default PriceInfoItem;
