import { DownBlackIcon } from '@/assets/svg';
import { flexCssGenerator } from '@/styles/customStyle.ts';
import styled from 'styled-components';

interface FAQBoxProps {
	question: string;
}

const FAQBox = ({ question }: FAQBoxProps) => {
	return (
		<Box>
			<h3>{question}</h3>
			<DownBlackIcon />
		</Box>
	);
};

export default FAQBox;

const Box = styled.div`
	${flexCssGenerator('flex', 'space-between', 'center', 'row')}
	padding: 1rem 0;
	border-bottom: 1px solid ${({ theme }) => theme.colors.grey30};

	h3 {
		${({ theme }) => theme.fonts.body2_sb_14}
		color: ${({ theme }) => theme.colors.black}
	}
`;
