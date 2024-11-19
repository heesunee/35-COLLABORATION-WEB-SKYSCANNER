import Layout from './Layout.tsx';
import Home from './pages/home';
import Reservation from './pages/reservation';
import Wish from './pages/wish';
import { createBrowserRouter } from 'react-router-dom';

export const router = createBrowserRouter([
	{
		path: '/',
		element: <Layout />, // 아울렛
		children: [
			{ index: true, element: <Home /> },
			{ path: '/reservation', element: <Reservation /> },
			{ path: '/wish', element: <Wish /> },
		],
	},
]);
