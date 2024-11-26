import { DefaultTheme, css } from 'styled-components';

const colors = {
	green: '#00A998',
	orange: '#FF8D00',
	red: '#E33258',
	orange20: '#D75D45',
	green10: '#5FA96F',
	mint: '#4B8289',

	darksky: '#05203C',
	nightblue: '#1E3750',
	darksky85: '#154679',
	skyblue: '#0062E3',
	skyblue85: '#024DAF',
	babyblue40: '#94C3FF',
	babyblue20: '#CFE4FF',
	babyblue: '#E3F0FF',

	black: '#161616',
	grey40: '#626971',
	grey30: '#C1C7CF',
	grey20: '#E0E3E5',
	grey10: '#EFF1F2',
	skygrey: '#EEF3F9',
	white: '#FFFFFF',
	skygrey: '#EEF3F9',
	nightgrey: '#131D28',
	darkscreen: 'rgba(22,22,22,0.77)',
};

const fonts = {
	head1_eb_30: css`
		font-size: 3rem;
		font-family: Apple SD Gothic Neo;
		font-weight: 800;
		line-height: 1.8rem;
		letter-spacing: 0.06rem;
	`,
	head2_eb_26: css`
		font-size: 2.6rem;
		font-family: Apple SD Gothic Neo;
		font-weight: 800;
		line-height: 1.8rem;
		letter-spacing: -0.104rem;
	`,
	head3_eb_24: css`
		font-size: 2.4rem;
		font-family: Apple SD Gothic Neo;
		font-weight: 800;
		line-height: 2rem;
	`,
	title1_eb_20: css`
		font-size: 2rem;
		font-family: Apple SD Gothic Neo;
		font-weight: 800;
		line-height: 2rem;
		letter-spacing: -0.08rem;
	`,
	title2_eb_16: css`
		font-size: 1.6rem;
		font-family: Apple SD Gothic Neo;
		font-weight: 800;
		line-height: 2rem;
	`,
	title3_eb_14: css`
		font-size: 1.4rem;
		font-family: Apple SD Gothic Neo;
		font-weight: 800;
		line-height: 2rem;
		letter-spacing: -0.084rem;
	`,
	title4_h_16: css`
		font-size: 1.6rem;
		font-family: Apple SD Gothic Neo;
		font-weight: 900;
		line-height: 2rem;
	`,
	body1_sb_16: css`
		font-size: 1.6rem;
		font-family: Apple SD Gothic Neo;
		font-weight: 600;
		line-height: 1.5rem;
		letter-spacing: -0.08rem;
	`,
	body2_sb_14: css`
		font-size: 1.4rem;
		font-family: Apple SD Gothic Neo;
		font-weight: 600;
		line-height: 2rem;
		letter-spacing: -0.084rem;
	`,
	body3_sb_12: css`
		font-size: 1.2rem;
		font-family: Apple SD Gothic Neo;
		font-weight: 600;
		line-height: 1.5rem;
		letter-spacing: -0.06rem;
	`,
	body4_r_16: css`
		font-size: 1.6rem;
		font-family: Apple SD Gothic Neo;
		font-weight: 400;
		line-height: 2rem;
		letter-spacing: -0.128rem;
	`,
	body5_r_14: css`
		font-size: 1.4rem;
		font-family: Apple SD Gothic Neo;
		font-weight: 400;
		line-height: 1.7rem;
		letter-spacing: -0.084rem;
	`,
	body6_r_12: css`
		font-size: 1.2rem;
		font-family: Apple SD Gothic Neo;
		font-weight: 400;
		line-height: 1.5rem;
		letter-spacing: -0.06rem;
	`,
	btn1_eb_12: css`
		font-size: 1.2rem;
		font-family: Apple SD Gothic Neo;
		font-weight: 800;
		line-height: 1.6rem;
		letter-spacing: -0.048rem;
	`,
	btn2_eb_10: css`
		font-size: 1rem;
		font-family: Apple SD Gothic Neo;
		font-weight: 800;
		line-height: 2rem;
	`,
	btn3_sb_10: css`
		font-size: 1rem;
		font-family: Apple SD Gothic Neo;
		font-weight: 600;
		line-height: 2rem;
	`,
	btn4_sb_8: css`
		font-size: 0.8rem;
		font-family: Apple SD Gothic Neo;
		font-weight: 600;
		line-height: 2rem;
	`,

	head1_eb_30_new: css`
		font-size: 3rem;
		font-family: Apple SD Gothic Neo;
		font-weight: 800;
		line-height: 1.8rem;
	`,
	title1_eb_20_new: css`
		font-size: 2rem;
		font-family: Apple SD Gothic Neo;
		font-weight: 800;
		line-height: 2.3rem;
		letter-spacing: -0.06rem;
	`,
	title3_eb_14_new: css`
		font-size: 1.4rem;
		font-family: Apple SD Gothic Neo;
		font-weight: 800;
		line-height: 2rem;
		letter-spacing: -0.014rem;
	`,
	body2_sb_14_new: css`
		font-size: 1.4rem;
		font-family: Apple SD Gothic Neo;
		font-weight: 600;
		line-height: 2rem;
		letter-spacing: -0.014rem;
	`,
	body2_sb_14_new2: css`
		font-size: 1.4rem;
		font-family: Apple SD Gothic Neo;
		font-weight: 600;
		line-height: 2.1rem;
		letter-spacing: -0.042rem;
	`,
	body2_r_14_new: css`
		font-size: 1.4rem;
		font-family: Apple SD Gothic Neo;
		font-weight: 400;
		line-height: 1.7rem;
		letter-spacing: -0.014rem;
	`,

	e_heade_eb_22: css`
		font-size: 2.2rem;
		font-family: Inter;
		font-weight: 800;
		line-height: 2rem;
	`,
	e_title_eb_20: css`
		font-size: 2rem;
		font-family: Inter;
		font-weight: 800;
		line-height: 2rem;
	`,
	e_title_eb_16: css`
		font-size: 1.6rem;
		font-family: Inter;
		font-weight: 800;
		line-height: 2rem;
	`,
	e_title_eb_12: css`
		font-size: 1.2rem;
		font-family: Inter;
		font-weight: 800;
		line-height: 2rem;
		letter-spacing: -0.36rem;
	`,
	e_body_b_16: css`
		font-size: 1.6rem;
		font-family: Inter;
		font-weight: 700;
		line-height: 2rem;
		letter-spacing: -0.112rem;
	`,
	e_body_m_16: css`
		font-size: 1.6rem;
		font-family: Inter;
		font-weight: 500;
		line-height: 2rem;
	`,
	e_body_m_14: css`
		font-size: 1.4rem;
		font-family: Inter;
		font-weight: 500;
		line-height: 2rem;
		letter-spacing: -0.07rem;
	`,
	e_body_m_12: css`
		font-size: 1.2rem;
		font-family: Inter;
		font-weight: 500;
		line-height: 2rem;
		letter-spacing: -0.036rem;
	`,
	e_body_m_10: css`
		font-size: 1rem;
		font-family: Inter;
		font-weight: 500;
		line-height: 2rem;
		letter-spacing: -0.08rem;
	`,
	e_body_m_8: css`
		font-size: 0.8rem;
		font-family: Inter;
		font-weight: 500;
		line-height: 2rem;
	`,
	e_title_eb_12_new: css`
		font-size: 1.2rem;
		font-family: Apple SD Gothic Neo;
		font-weight: 800;
		line-height: 1.8rem;
		letter-spacing: -0.048rem;
	`,
	e_body_b_16_new: css`
		font-size: 1.6rem;
		font-family: Inter;
		font-weight: 700;
		line-height: 2rem;
	`,
};

const shadows = {
	card_shadow: css`
		box-shadow: 0rem 0.4rem 0.4rem rgba(0, 0, 0, 0.25);
	`,
};

export type ColorTypes = typeof colors;
export type FontTypes = typeof fonts;
export type ShadowTypes = typeof shadows;

export const theme: DefaultTheme = {
	colors,
	fonts,
	shadows,
};

export default theme;
