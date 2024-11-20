import React, { createContext, useContext, useState } from 'react';
import styled, { css } from 'styled-components';

// Tab Context 타입 정의
interface TabContextProps {
	activeTab: number;
	setActiveTab: (index: number) => void;
}

const TabContext = createContext<TabContextProps | undefined>(undefined);

// useTabContext: Tabs 컴포넌트 외부에서 서브 컴포넌트들이 사용 됐을 때 에러 처리
const useTabContext = (): TabContextProps => {
	const context = useContext(TabContext);
	if (!context) {
		throw new Error('Tabs의 모든 하위 컴포넌트는 Tab.Root 내에서 사용되어야 합니다.');
	}
	return context;
};

// Tab Root 컴포넌트
interface TabsProps {
	children: React.ReactNode;
	defaultActiveTab?: number;
}
const TabRoot = ({ children, defaultActiveTab = 0 }: TabsProps) => {
	const [activeTab, setActiveTab] = useState(defaultActiveTab);

	return (
		<TabContext.Provider value={{ activeTab, setActiveTab }}>
			<TabsContainer>{children}</TabsContainer>
		</TabContext.Provider>
	);
};

// Tab의 아이템 리스트를 렌더링 하는 컨테이너 컴포넌트
const TabList = ({ children }: { children: React.ReactNode }) => {
	return <TabListContainer>{children}</TabListContainer>;
};

// Tabs의 리스트 아이템 컴포넌트
interface TabProps {
	index: number;
	children: React.ReactNode;
}
const TabItem = ({ index, children }: TabProps) => {
	const { activeTab, setActiveTab } = useTabContext();
	const isActive = activeTab === index;

	return (
		<TabButton isActive={isActive} onClick={() => setActiveTab(index)}>
			{children}
		</TabButton>
	);
};

// 활성화된 인덱스의 패널만 렌더링하는 컴포넌트
const TabPanels = ({ children }: { children: React.ReactNode }) => {
	const { activeTab } = useTabContext();
	const childrenArray = React.Children.toArray(children);
	return <TabPanelsContainer>{childrenArray[activeTab]}</TabPanelsContainer>;
};

// 각각의 탭 콘텐츠를 렌더링
const TabPanel = ({ children }: { children: React.ReactNode }) => {
	return <TabPanelContainer>{children}</TabPanelContainer>;
};

const Tabs = {
	Root: TabRoot,
	List: TabList,
	Item: TabItem,
	Panels: TabPanels,
	Panel: TabPanel,
};

export default Tabs;

const TabsContainer = styled.div`
	display: flex;
	flex-direction: column;
	gap: 2.5rem;
`;

const TabListContainer = styled.div`
	display: flex;
	gap: 3.5rem;
`;

const TabButton = styled.button<{ isActive: boolean }>`
	background: none;
	border: none;
	color: ${({ theme }) => theme.colors.grey30};
	${({ theme }) => theme.fonts.title3_eb_14};
	cursor: pointer;

	${({ isActive }) =>
		isActive &&
		css`
			color: ${({ theme }) => theme.colors.skyblue};
			border-bottom: 1px solid ${({ theme }) => theme.colors.skyblue};
		`}
`;

const TabPanelsContainer = styled.div``;

const TabPanelContainer = styled.div``;
