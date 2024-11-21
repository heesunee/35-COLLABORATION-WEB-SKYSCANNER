import styled from 'styled-components';

const TopBar = () => {
	return <TopBarContainer></TopBarContainer>;
};

export default TopBar;

const TopBarContainer = styled.section`
	background-color: ${({ theme }) => theme.colors.darksky};
	height: 12rem;
	padding: 1.35rem 2.2rem 0.9rem 2.3rem;
`;
