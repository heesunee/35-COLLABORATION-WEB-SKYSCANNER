import RecommendCard from '@/components/home/RecommendCard';
import CalenderModal from '@/components/home/calender-modal.tsx';
import { mockRecommendList } from '@/mocks/mockRecommendList';

const Home = () => {
	return (
		<>
			<CalenderModal />
			<>
				{mockRecommendList.map((item) => (
					<RecommendCard key={item.id} {...item} />
				))}
			</>
		</>
	);
};

export default Home;
