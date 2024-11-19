import AndroidIcon from '@/assets/svg/ic_android.svg?react';
import AngledownIcon from '@/assets/svg/ic_angle_down_white.svg?react';
import styled from 'styled-components';

const Footer = () => {
	return (
		<FooterContainer>
			<FooterTop>
				<BtnDownload>
					<AndroidIcon />
					스카이스캐너 앱 받기
				</BtnDownload>
				<BtnKorean>대한민국 • 한국어 • ₩KRW</BtnKorean>

				<ListSection>
					<ListTop>
						<li>도움말</li>
						<li>개인정보 설정</li>
						<li>로그인</li>
						<li>쿠키 정책</li>
						<li>개인정보처리방침</li>
						<li>서비스 약관</li>
						<li>회사 정보</li>
					</ListTop>
					<ListBottom>
						<li>
							탐색
							<AngledownIcon />
						</li>
						<li>
							회사
							<AngledownIcon />
						</li>
						<li>
							파트너
							<AngledownIcon />
						</li>
						<li>
							여행 일정
							<AngledownIcon />
						</li>
					</ListBottom>
				</ListSection>
				<Copyright>ⓒSkyscanner Ltd 2002-2024</Copyright>
			</FooterTop>
			<FooterBottom>
				<p>전세계 사이트</p>
				<select>
					<option>옵션을 선택하세요.</option>
				</select>
			</FooterBottom>
		</FooterContainer>
	);
};

const FooterContainer = styled.footer`
	background-color: ${({ theme }) => theme.colors.darksky};
`;

const FooterTop = styled.div`
	height: 54.2rem;
	padding: 1.9rem 1.4rem;
	display: flex;
	flex-direction: column;
	color: ${({ theme }) => theme.colors.white};
`;

const BaseButton = styled.button`
	color: ${({ theme }) => theme.colors.white};
	background-color: ${({ theme }) => theme.colors.nightblue};
	width: 33.5rem;
	height: 2.8rem;
	padding: 0.3rem 1.1rem;
	border: none;
	border-radius: 0.6rem;
	display: flex;
	align-items: center;
`;

const BtnDownload = styled(BaseButton)`
	${({ theme }) => theme.fonts.btn1_eb_12};
	margin-bottom: 1.2rem;
`;

const BtnKorean = styled(BaseButton)`
	${({ theme }) => theme.fonts.btn2_eb_10};
	margin-bottom: 4.6rem;
`;

const ListSection = styled.div`
	${({ theme }) => theme.fonts.btn1_eb_12}
	display: flex;
	flex-direction: column;
`;

const ListTop = styled.ul`
	display: flex;
	flex-direction: column;
	gap: 0.9rem;
	margin-bottom: 4.9rem;
`;

const ListBottom = styled.ul`
	display: flex;
	flex-direction: column;
	gap: 0.8rem;
	margin-bottom: 3.3rem;

	& li {
		display: flex;
		align-items: center;
		justify-content: space-between;
	}
`;

const Copyright = styled.p`
	${({ theme }) => theme.fonts.e_body_m_12}
`;

const FooterBottom = styled.div`
	height: 125px;
	background-color: ${({ theme }) => theme.colors.white};
	padding: 3rem 0.5rem;

	& p {
		${({ theme }) => theme.fonts.title2_eb_16};
		margin-bottom: 1.2rem;
	}

	& select {
		${({ theme }) => theme.fonts.body5_r_14};
		width: 100%;
		padding: 0.2rem 0.3rem;
		border-color: ${({ theme }) => theme.colors.grey20};
	}
`;
export default Footer;
