import Layout from '../Layout.tsx';
import Home from '../pages/home';
import Reservation from '../pages/reservation';
import Wish from '../pages/wish';
import { PATH } from '@/router/path.ts';
import { createBrowserRouter } from 'react-router-dom';

export const router = createBrowserRouter([
	{
		path: PATH.HOME,
		element: <Layout />, // 아울렛
		children: [
			{ index: true, element: <Home /> },
			{ path: PATH.RESERVATION, element: <Reservation /> },
			{ path: PATH.WISH, element: <Wish /> },
		],
	},
]);
