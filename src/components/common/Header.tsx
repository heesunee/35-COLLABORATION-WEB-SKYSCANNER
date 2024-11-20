import { IcCarWhite, IcFlagKorea, IcFlightWhite, IcHotelWhite, IcLikePage, IcMainLogo, IcMy } from '@/assets/svg';
import FilterButton from '@/components/common/FilterButton.tsx';
import { PATH } from '@/router/path.ts';
import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const Header = () => {
	const navigate = useNavigate();
	const location = useLocation();

	const pathsWithFilter = [PATH.HOME, PATH.WISH];
	const isFilter = pathsWithFilter.includes(location.pathname);
	const [selectedFilter, setSelectedFilter] = useState<string | null>(null);
	const handleFilterClick = (filter: string) => {
		setSelectedFilter(filter === selectedFilter ? null : filter);
	};

	return (
		<HeaderContainer>
			<HeaderTop>
				<MainLogo onClick={() => navigate(PATH.HOME)} />
				<Menu>
					<NationWrap>
						<NationItem>KO</NationItem>
						<IcFlagKorea />
						<NationItem>KRW(₩)</NationItem>
					</NationWrap>
					<IcLikePage onClick={() => navigate(PATH.WISH)} />
					<IcMy />
				</Menu>
			</HeaderTop>
			{isFilter && (
				<HeaderFilter>
					<FilterButton
						content={'항공권'}
						Icon={IcFlightWhite}
						isClicked={selectedFilter === '항공권'}
						onClick={() => handleFilterClick('항공권')}
					/>
					<FilterButton
						content={'호텔'}
						Icon={IcHotelWhite}
						isClicked={selectedFilter === '호텔'}
						onClick={() => handleFilterClick('호텔')}
					/>
					<FilterButton
						content={'렌터카'}
						Icon={IcCarWhite}
						isClicked={selectedFilter === '렌터카'}
						onClick={() => handleFilterClick('렌터카')}
					/>
				</HeaderFilter>
			)}
		</HeaderContainer>
	);
};

const HeaderContainer = styled.div`
	background-color: ${({ theme }) => theme.colors.darksky};
`;

const HeaderFilter = styled.div`
	display: flex;
	width: 100%;
	padding: 0.7rem 0.6rem;
	align-items: center;
	gap: 0.3rem;
`;

const HeaderTop = styled.header`
	width: 100%;
	display: flex;
	height: 4.1rem;
	padding: 0.8rem 0.7rem;
	justify-content: space-between;
	align-items: center;
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
