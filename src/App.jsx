import { useState } from 'react';
import Banner from './components/Banner';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import NewsLetter from './components/NewsLetter';
import PlayersList from './components/PlayersList';

const App = () => {
	const [credits, setCredits] = useState(50000);
	const handleGetCredits = () => {
		setCredits(credits + 1000);
	};
	return (
		<>
			<div className="px-2">
				<Navbar balance={credits} />
				<Banner onGetCredits={handleGetCredits} />
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
