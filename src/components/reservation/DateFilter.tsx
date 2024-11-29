import { formatDate } from '@/utils/dateUtils';
import styled from 'styled-components';

interface DateFilterProps {
	startDate: string | null;
	finishDate: string | null;
}

const DateFilter = ({ startDate, finishDate }: DateFilterProps) => {
	const startFormatted = startDate ? formatDate(startDate) : { month: '', day: '', weekday: '' };
	const finishFormatted = finishDate ? formatDate(finishDate) : { month: '', day: '', weekday: '' };

	const { month: startMonth, day: startDay, weekday: startWeekday } = startFormatted;
	const { month: finishMonth, day: finishDay, weekday: finishWeekday } = finishFormatted;
	return (
		<DateFilterContainer>
			<DateButton>
				<TextDiv>
					<StyledSpan isNumber>{startMonth}</StyledSpan>
					<StyledSpan>월</StyledSpan>
				</TextDiv>
				<TextDiv>
					<StyledSpan isNumber>{startDay}</StyledSpan>
					<StyledSpan>일</StyledSpan>
				</TextDiv>
				<StyledSpan>({startWeekday})</StyledSpan>
			</DateButton>
			<span>-</span>
			<DateButton>
				<TextDiv>
					<StyledSpan isNumber>{finishMonth}</StyledSpan>
					<StyledSpan>월</StyledSpan>
				</TextDiv>
				<TextDiv>
					<StyledSpan isNumber>{finishDay}</StyledSpan>
					<StyledSpan>일</StyledSpan>
				</TextDiv>
				<StyledSpan>({finishWeekday})</StyledSpan>
			</DateButton>
		</DateFilterContainer>
	);
};

export default DateFilter;

const DateFilterContainer = styled.section`
	width: 17.7rem;
	height: 3rem;
	padding: 0.5rem 1rem;
	color: ${({ theme }) => theme.colors.white};
	display: flex;
	align-items: center;
	justify-content: center;
	border-radius: 0.7rem;
	border: 0.1rem solid ${({ theme }) => theme.colors.white};
	& span {
		${({ theme }) => theme.fonts.e_body_m_14};
	}
`;

const DateButton = styled.button`
	color: ${({ theme }) => theme.colors.white};
	background-color: inherit;
	border: none;
	display: flex;

	& {
		display: flex;
	}
`;

const StyledSpan = styled.span<{ isNumber?: boolean }>`
	${({ theme, isNumber }) => (isNumber ? theme.fonts.e_body_m_14 : theme.fonts.body5_r_14)};
`;

const TextDiv = styled.div`
	display: flex;
	align-items: center;
`;
