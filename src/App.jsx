import Banner from './components/Banner';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import NewsLetter from './components/NewsLetter';
import PlayersList from './components/PlayersList';

const App = () => {
	return (
		<>
			<div className="px-2">
				<Navbar />
				<Banner />
				<PlayersList />
			</div>
			<div className="relative">
				<NewsLetter />
				<Footer />
			</div>
		</>
	);
};

export default App;
