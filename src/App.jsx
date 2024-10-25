import Banner from './components/Banner';
import Navbar from './components/Navbar';
import NewsLetter from './components/NewsLetter';
import PlayersList from './components/PlayersList';

const App = () => {
	return (
		<div className="px-2">
			<Navbar />
			<Banner />
			<PlayersList />
			<NewsLetter />
		</div>
	);
};

export default App;
