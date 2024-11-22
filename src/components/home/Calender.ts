import styled from 'styled-components';

export const CustomCalender = styled.main`
	.react-calendar {
		width: 33.7rem;
		margin: 20px auto;
		background: white;
		border: none !important;
	}

	.react-calendar__tile {
		padding: 0;
		display: flex;
		flex-direction: column;
		justify-content: flex-start;
		align-items: center;
		border: none;
		transition: all 0.2s ease;

		& > abbr {
			display: none !important;
		}
	}

	.react-calendar__tile:hover {
		background: rgba(0, 0, 0, 0.1);
	}

	.react-calendar__tile--now {
		background: none;
	}

	.react-calendar__tile--range {
		background: white !important;

		& > div {
			color: black;
			& > div:nth-child(2) {
				width: 52px;
				color: black;
				border-radius: 0 !important;
				background: #e3f0ff !important;
			}
		}
	}
	.react-calendar__tile--rangeEnd {
		color: white;

		& > div {
			& > div:first-child {
				display: block;
				border-radius: 0 50% 50% 0;
			}
			& > div:nth-child(2) {
				${({ theme }) => theme.fonts.e_title_eb_12}
				letter-spacing: 0px;
				background-color: ${({ theme }) => theme.colors.skyblue} !important;
				border-radius: 50% !important;
				padding: 5px;
				color: white;
				font-size: 14px;
				display: inline-block;
				width: 35px;
				height: 35px;
				align-content: center;
				text-align: center;
				z-index: 100;
			}
		}
	}
	.react-calendar__tile--rangeStart {
		color: white;

		& > div {
			& > div:first-child {
				display: block;
				border-radius: 50% 0 0 50%;
			}
			& > div:nth-child(2) {
				${({ theme }) => theme.fonts.e_title_eb_12}
				letter-spacing: 0px;
				background-color: ${({ theme }) => theme.colors.skyblue} !important;
				border-radius: 50% !important;
				padding: 5px;
				color: white;
				font-size: 14px;
				display: inline-block;
				width: 35px;
				height: 35px;
				align-content: center;
				text-align: center;
				z-index: 100;
			}
		}
	}

	/* 요일 숨기기 */
	.react-calendar__month-view__weekdays {
		display: none !important;
	}

	.react-calendar__navigation {
		display: none;
	}
`;
