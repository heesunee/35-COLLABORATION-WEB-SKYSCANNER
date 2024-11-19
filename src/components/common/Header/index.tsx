import { IcFlagKorea, IcLikePage, IcMainLogo, IcMy } from '@/assets/svg';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const Header = () => {
	const navigate = useNavigate();
	return (
		<HeaderContainer>
			<MainLogo onClick={() => navigate('/')} />
			<Menu>
				<NationWrap>
					<NationItem>KO</NationItem>
					<IcFlagKorea />
					<NationItem>KRW(₩)</NationItem>
				</NationWrap>
				<IcLikePage onClick={() => navigate('/wish')} />
				<IcMy />
			</Menu>
		</HeaderContainer>
	);
};

const HeaderContainer = styled.header`
	background-color: ${({ theme }) => theme.colors.darksky};
	width: 100%;
	display: flex;
	height: 4.1rem;
	padding: 0.8rem 0.7rem;
	justify-content: space-between;
	align-items: center;
	align-self: stretch;
`;

const MainLogo = styled(IcMainLogo)`
	width: 9.5rem;
	height: 1.6rem;
	cursor: pointer;
`;

const Menu = styled.div`
	display: flex;
	align-items: center;
`;

const NationWrap = styled.div`
	color: ${({ theme }) => theme.colors.white};
	display: flex;
	align-items: center;
	gap: 0.5rem;
	margin-right: 0.2rem;
`;

const NationItem = styled.span`
	padding-top: 0.2rem;
	font-size: 1rem;
	font-weight: 500;
	line-height: 2rem;
	letter-spacing: -0.08rem;
`;

export default Header;
