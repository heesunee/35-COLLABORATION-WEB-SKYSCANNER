import { flexCssGenerator } from '@/styles/customStyle.ts';
import styled from 'styled-components';

interface ContentsProps {
	Icon: any;
	content: string[];
}

const ContentsTop = ({ Icon, content }: ContentsProps) => {
	return (
		<Contents>
			{Icon}
			<div>
				{content.map((line, index) => (
					<p key={index}>{line}</p> // content 배열의 각 요소를 줄바꿈하여 렌더링
				))}
			</div>
		</Contents>
	);
};

export default ContentsTop;

const Contents = styled.div`
	${flexCssGenerator('flex', '', '', 'row')}
	gap:0.7rem;
	div {
		${flexCssGenerator('flex', '', '', 'column')}
	}
	p {
		${({ theme }) => theme.fonts.e_title_eb_12_new}
	}
`;
