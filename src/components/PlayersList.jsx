import { useState } from 'react';
import AvailablePlayers from './AvailablePlayers';
import SelectedPlayers from './SelectedPlayers';
const PlayersList = ({ playersData, balance, setBalance }) => {
	const [active, setActive] = useState('available');
	const [selectedPlayers, setSelectedPlayers] = useState([]);
	const sectionTitle =
		active === 'available'
			? 'Available Players'
			: `Selected Players(${selectedPlayers.length}/6)`;

	const handleSelectedPlayer = (player) => {
		const price = parseInt(player.biddingPrice);
		if (balance < price) {
			alert('Insufficient balance!');
			return;
		}
		const isExist = selectedPlayers.find((p) => p.id === player.id);
		if (isExist) {
			alert('Player already selected!');
			return;
		}
		setSelectedPlayers([...selectedPlayers, player]);
		setBalance(balance - price);
	};
	return (
		<section className="max-w-6xl mx-auto pb-24">
			<div className="flex items-center justify-between">
				<h1 className="text-2xl font-bold">{sectionTitle}</h1>
				<div>
					<button
						className={`btn border-r-0 rounded-r-none ${
							active === 'available' ? 'bg-lime-400' : 'bg-transparent'
						}`}
						onClick={() => setActive('available')}
					>
						Available
					</button>
					<button
						className={`btn border-r-0 rounded-l-none  ${
							active === 'selected' ? 'bg-lime-400' : 'bg-transparent'
						}`}
						onClick={() => setActive('selected')}
					>
						Selected
					</button>
				</div>
			</div>
			{active === 'available' ? (
				<AvailablePlayers
					playersData={playersData}
					selectedPlayers={selectedPlayers}
					onSelect={handleSelectedPlayer}
				/>
			) : (
				<SelectedPlayers playersData={selectedPlayers} />
			)}
		</section>
	);
};

export default PlayersList;
