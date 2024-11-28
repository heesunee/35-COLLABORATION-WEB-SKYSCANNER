import { flexCssGenerator } from '@/styles/customStyle.ts';
import styled from 'styled-components';

interface RecommendCommentsProps {
	title: string;
	content: string[];
}

const RecommendComments = ({ title, content }: RecommendCommentsProps) => {
	return (
		<CommentsDiv>
			<h3>{title}</h3>
			{content.map((line, index) => (
				<p key={index}>{line}</p> // 각 줄을 개별 <p>로 렌더링
			))}
		</CommentsDiv>
	);
};

export default RecommendComments;

const CommentsDiv = styled.div`
	border: 1px solid ${({ theme }) => theme.colors.grey20};
	border-radius: 8px;
	padding: 0.7rem 1.2rem 0.5rem 1.3rem;
	${flexCssGenerator('flex', '', '', 'column')}
	gap: 0.2rem;

	h3 {
		${({ theme }) => theme.fonts.body2_sb_14}
		color: ${({ theme }) => theme.colors.black}
	}

	p {
		${({ theme }) => theme.fonts.body5_r_14}
		color: ${({ theme }) => theme.colors.black}
	}
`;
