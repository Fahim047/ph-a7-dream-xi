import Banner from './components/Banner';
import Navbar from './components/Navbar';
import PlayersList from './components/PlayersList';

const App = () => {
	return (
		<div className="px-2">
			<Navbar />
			<Banner />
			<PlayersList />
		</div>
	);
};

export default App;
