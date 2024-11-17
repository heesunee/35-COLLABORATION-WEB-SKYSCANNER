import { css } from "styled-components";

const colors = {
  green: "#00A998",
  orange: "#FF8D00",
  red: "#E33258",
  orange20: "#D75D45",
  green10: "#5FA96F",
  mint: "#4B8289",

  darksky: "#05203C",
  nightblue: "#1E3750",
  darksky85: "#154679",
  skyblue: "#0062E3",
  skyblue85: "#024DAF",
  babyblue40: "#94C3FF",
  babyblue20: "#CFE4FF",
  babyblue: "#E3F0FF",

  black: "#161616",
  grey40: "#626971",
  grey30: "#C1C7CF",
  grey20: "#E0E3E5",
  grey10: "#EFF1F2",
  white: "#FFFFFF",

  nightgrey: "#131D28",
  darkscreen: "rgba(22,22,22,0.77)",
};

// const baseFontStyle = css`
// 	font-family: Pretendard;
// 	font-style: normal;
// 	line-height: normal;
// `;

// const fonts = {
// 	Pretendard_Bold_70px: css`
// 		${baseFontStyle}
// 		font-size: 70px;
// 		font-weight: 700;
// 	`,

const fonts = {
  head1_eb_30: css`
    font-size: 30px;
    font-family: Apple SD Gothic Neo;
    font-weight: 800;
    line-height: 18px;
    letter-spacing: 0.6px;
  `,
  head2_eb_26: css`
    font-size: 26px;
    font-family: Apple SD Gothic Neo;
    font-weight: 800;
    line-height: 18px;
  `,
  head3_eb_24: css`
    font-size: 24px;
    font-family: Apple SD Gothic Neo;
    font-weight: 800;
    line-height: 20px;
  `,
  title1_eb_20: css`
    font-size: 20px;
    font-family: Apple SD Gothic Neo;
    font-weight: 800;
    line-height: 20px;
  `,
  title2_eb_16: css`
    font-size: 16px;
    font-family: Apple SD Gothic Neo;
    font-weight: 800;
    line-height: 20px;
  `,
  title3_eb_14: css`
    font-size: 14px;
    font-family: Apple SD Gothic Neo;
    font-weight: 800;
    line-height: 20px;
  `,
  title4_h_16: css`
    font-size: 16px;
    font-family: Apple SD Gothic Neo;
    font-weight: 900;
    line-height: 20px;
  `,
  body1_sb_16: css`
    font-size: 16px;
    font-family: Apple SD Gothic Neo;
    font-weight: 600;
    line-height: 15px;
  `,
  body2_sb_14: css`
    font-size: 14px;
    font-family: Apple SD Gothic Neo;
    font-weight: 600;
    line-height: 20px;
  `,
  body3_sb_12: css`
    font-size: 12px;
    font-family: Apple SD Gothic Neo;
    font-weight: 600;
    line-height: 15px;
  `,
  body4_r_16: css`
    font-size: 16px;
    font-family: Apple SD Gothic Neo;
    font-weight: 400;
    line-height: 20px;
  `,
  body5_r_14: css`
    font-size: 14px;
    font-family: Apple SD Gothic Neo;
    font-weight: 400;
    line-height: 17px;
  `,
  body6_r_12: css`
    font-size: 12px;
    font-family: Apple SD Gothic Neo;
    font-weight: 400;
    line-height: 15px;
  `,
  btn1_eb_12: css`
    font-size: 12px;
    font-family: Apple SD Gothic Neo;
    font-weight: 800;
    line-height: 16px;
  `,
  btn2_eb_10: css`
    font-size: 10px;
    font-family: Apple SD Gothic Neo;
    font-weight: 800;
    line-height: 20px;
  `,
  btn3_sb_10: css`
    font-size: 10px;
    font-family: Apple SD Gothic Neo;
    font-weight: 600;
    line-height: 20px;
  `,
  btn4_sb_8: css`
    font-size: 8px;
    font-family: Apple SD Gothic Neo;
    font-weight: 600;
    line-height: 20px;
  `,
  head1_e_30_new: css`
    font-size: 30px;
    font-family: Apple SD Gothic Neo;
    font-weight: 800;
    line-height: 18px;
  `,
  title1_eb_20_new: css`
    font-size: 20px;
    font-family: Apple SD Gothic Neo;
    font-weight: 800;
    line-height: 23px;
  `,
  title3_eb_14_new: css`
    font-size: 14px;
    font-family: Apple SD Gothic Neo;
    font-weight: 800;
    line-height: 20px;
  `,
  body2_sb_14_new: css`
    font-size: 14px;
    font-family: Apple SD Gothic Neo;
    font-weight: 600;
    line-height: 20px;
  `,
  body2_sb_14_new2: css`
    font-size: 14px;
    font-family: Apple SD Gothic Neo;
    font-weight: 600;
    line-height: 21px;
  `,
  body2_r_14_new: css`
    font-size: 14px;
    font-family: Apple SD Gothic Neo;
    font-weight: 400;
    line-height: 17px;
  `,

  e_heade_eb_22: css`
    font-size: 22px;
    font-family: Inter;
    font-weight: 800;
    line-height: 20px;
  `,
  e_title_eb_20: css`
    font-size: 20px;
    font-family: Inter;
    font-weight: 800;
    line-height: 20px;
  `,
  e_title_eb_16: css`
    font-size: 16px;
    font-family: Inter;
    font-weight: 800;
    line-height: 20px;
  `,
  e_title_eb_12: css`
    font-size: 12px;
    font-family: Inter;
    font-weight: 800;
    line-height: 20px;
  `,
  e_body_b_16: css`
    font-size: 16px;
    font-family: Inter;
    font-weight: 700;
    line-height: 20px;
  `,
  e_body_m_16: css`
    font-size: 16px;
    font-family: Inter;
    font-weight: 500;
    line-height: 20px;
  `,
  e_body_m_14: css`
    font-size: 14px;
    font-family: Inter;
    font-weight: 500;
    line-height: 20px;
  `,
  e_body_m_12: css`
    font-size: 12px;
    font-family: Inter;
    font-weight: 500;
    line-height: 20px;
  `,
  e_body_m_10: css`
    font-size: 10px;
    font-family: Inter;
    font-weight: 500;
    line-height: 20px;
  `,
  e_body_m_8: css`
    font-size: 8px;
    font-family: Inter;
    font-weight: 500;
    line-height: 20px;
  `,
  e_title_eb_12_new: css`
    font-size: 12px;
    font-family: Apple SD Gothic Neo;
    font-weight: 800;
    line-height: 18px;
  `,
  e_body_b_16_new: css`
    font-size: 16px;
    font-family: Inter;
    font-weight: 700;
    line-height: 20px;
  `,
};

const shadows = {
  card_shadow: css`
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  `,
};

const theme = {
  colors,
  fonts,
  shadows,
};

export default theme;
