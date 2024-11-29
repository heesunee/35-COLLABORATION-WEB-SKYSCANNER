import Header from '@/components/common/Header.tsx';
import WithSuspense from '@/components/common/WithSuspense';
import { lazy } from 'react';
import { Outlet } from 'react-router-dom';

const Footer = lazy(() => import('@/components/common/Footer'));

const Layout = () => {
	return (
		<>
			<Header />
			<Outlet />
			<WithSuspense fallback={<div>Loading Footer...</div>}>
				<Footer />
			</WithSuspense>
		</>
	);
};

export default Layout;
