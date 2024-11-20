import Tab from '@/components/wish/Tab';

const App = () => {
	return (
		<Tab.Root defaultActiveTab={0}>
			<Tab.List>
				<Tab.Item index={0}>전체</Tab.Item>
				<Tab.Item index={1}>항공권</Tab.Item>
				<Tab.Item index={2}>호텔</Tab.Item>
				<Tab.Item index={3}>렌터카</Tab.Item>
			</Tab.List>
			<Tab.Panels>
				<Tab.Panel>전체 내용</Tab.Panel>
				<Tab.Panel>항공권 내용</Tab.Panel>
				<Tab.Panel>호텔 내용</Tab.Panel>
				<Tab.Panel>렌터카 내용</Tab.Panel>
			</Tab.Panels>
		</Tab.Root>
	);
};

export default App;
