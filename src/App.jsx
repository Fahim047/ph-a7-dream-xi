import { useEffect, useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Banner from './components/Banner';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import NewsLetter from './components/NewsLetter';
import PlayersList from './components/PlayersList';
const App = () => {
	const [credits, setCredits] = useState(10);
	const [data, setData] = useState([]);
	useEffect(() => {
		fetch('/fake-data.json')
			.then((res) => res.json())
			.then((data) => setData(data.players));
	}, []);
	const handleGetCredits = () => {
		setCredits(credits + 10);
		toast.success('10 credits added!');
	};
	return (
		<>
			<div className="px-2">
				<Navbar balance={credits} />
				<Banner onGetCredits={handleGetCredits} />
				<PlayersList
					balance={credits}
					setBalance={setCredits}
					playersData={data}
				/>
			</div>
			<div className="relative">
				<NewsLetter />
				<Footer />
			</div>
			<ToastContainer position="top-center" autoClose={2000} />
		</>
	);
};

export default App;
