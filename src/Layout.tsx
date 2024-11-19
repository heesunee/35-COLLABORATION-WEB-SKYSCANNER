import Footer from '@/components/common/Footer';
import { Outlet } from 'react-router-dom';

const Layout = () => {
	return (
		<>
			<Outlet />
			<Footer />
		</>
	);
};

export default Layout;
