import { flexCssGenerator } from '@/styles/customStyle.ts';
import styled from 'styled-components';

interface ContentsProps {
	Icon: any;
	Title: string;
	content: string[];
}

const PlanContents = ({ Icon, Title, content }: ContentsProps) => {
	return (
		<Contents>
			<div className="Title">
				{Icon}
				<h2>{Title}</h2>
			</div>
			<div className="content">
				{content.map((line, index) => (
					<p key={index}>{line}</p> // content 배열의 각 요소를 줄바꿈하여 렌더링
				))}
			</div>
		</Contents>
	);
};

export default PlanContents;

const Contents = styled.div`
	.Title {
		${flexCssGenerator('flex', '', 'center', 'row')}
		gap: 1.4rem;
		padding-bottom: 0.5rem;
	}
	.content {
		${flexCssGenerator('flex', '', 'start', 'column')}
		gap: 0 rem;
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
