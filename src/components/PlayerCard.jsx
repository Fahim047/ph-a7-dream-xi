const PlayerCard = () => {
	// Sample player data
	const player = {
		name: 'Tanzim Sakib',
		country: 'Bangladesh',
		role: 'Bowler',
		battingStyle: 'Right Handed',
		bowlingStyle: 'Right-arm medium',
		biddingPrice: '1.00 Cr',
	};

	return (
		<div className="card bg-white rounded-xl shadow-lg overflow-hidden">
			{/* Player Image */}
			<figure>
				<img src="https://api.bdcrictime.com/players/94960.png" alt="player" />
			</figure>

			{/* Player Info */}
			<div className="p-6 space-y-4">
				{/* Name and Country */}
				<div className="space-y-2">
					<h2 className="text-2xl font-bold text-gray-800">{player.name}</h2>
					<div className="flex items-center justify-between space-x-2 text-gray-500">
						<span>🏳️ {player.country}</span>
						<span className="badge badge-lg border text-gray-500">
							{player.role}
						</span>
					</div>
				</div>

				{/* Role and Playing Style */}
				<div className="space-y-2">
					<div className="flex items-center space-x-2 text-gray-600">
						<span>Batting: {player.battingStyle}</span>
					</div>
					<div className="flex items-center space-x-2 text-gray-600">
						<span>Bowling: {player.bowlingStyle}</span>
					</div>
				</div>

				{/* Bidding Price */}
				<div className="flex items-center space-x-2 font-semibold text-xl">
					<span>💲 {player.biddingPrice}</span>
				</div>

				{/* Choose Player Button */}
				<button className="w-full py-2 px-4 bg-lime-400 text-black rounded-lg hover:bg-lime-500 transition duration-200 font-semibold">
					Choose Player
				</button>
			</div>
		</div>
	);
};

export default PlayerCard;
