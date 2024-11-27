import Layout from '@/Layout';
import CalenderModal from '@/pages/calender/CalenderModal.tsx';
import Home from '@/pages/home/home';
import Reservation from '@/pages/reservation/Reservation';
import Wish from '@/pages/wish/Wish';
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
	{
		path: PATH.CALENDER,
		element: <CalenderModal />,
	},
]);
