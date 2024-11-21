import Tab from '@/components/wish/Tab';
import styled from 'styled-components';

const Wish = () => {
	return (
		<WishPageContainer>
			<WishPageTitle>위시리스트</WishPageTitle>
			<Tab.Root defaultActiveTab={0}>
				<Tab.List>
					<Tab.Item index={0}>전체</Tab.Item>
					<Tab.Item index={1}>항공권</Tab.Item>
					<Tab.Item index={2}>호텔</Tab.Item>
					<Tab.Item index={3}>렌터카</Tab.Item>
					<ArrayText>정렬</ArrayText>
				</Tab.List>
				<Tab.Panels>
					<Tab.Panel>전체 내용</Tab.Panel>
					<Tab.Panel>항공권 내용</Tab.Panel>
					<Tab.Panel>호텔 내용</Tab.Panel>
					<Tab.Panel>렌터카 내용</Tab.Panel>
				</Tab.Panels>
			</Tab.Root>
		</WishPageContainer>
	);
};

export default Wish;

const WishPageContainer = styled.main`
	display: flex;
	flex-direction: column;
	padding: 4.8rem 2.1rem 3.4rem;
`;

const WishPageTitle = styled.h1`
	${({ theme }) => theme.fonts.head1_eb_30_new};
	margin-bottom: 2.8rem;
`;

const ArrayText = styled.p`
	${({ theme }) => theme.fonts.title2_eb_16};
	color: ${({ theme }) => theme.colors.skyblue};
	margin-left: 4.5rem;
`;
