import { ReactNode, Suspense } from 'react';
import styled from 'styled-components';

interface WithSuspenseProps {
	children: ReactNode;
	fallback?: ReactNode;
}

const WithSuspense = ({ children, fallback }: WithSuspenseProps) => {
	return <Suspense fallback={fallback || <DefaultLoadingSpinner />}>{children}</Suspense>;
};

export default WithSuspense;

const DefaultLoadingSpinner = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	font-size: 1.2rem;
	color: #555;
	height: 5rem;
`;
