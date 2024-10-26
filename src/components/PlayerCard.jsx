const PlayerCard = ({ player, onSelect }) => {
	return (
		<div className="w-full p-4 bg-white rounded-xl shadow-lg overflow-hidden">
			{/* Player Image */}
			<figure className="mb-4">
				<img
					className="w-full h-[200px] object-fill rounded-xl"
					src={player.imageUrl}
					alt="player"
				/>
			</figure>

			{/* Player Info */}
			<div className="space-y-4">
				{/* Name and Country */}
				<div className="space-y-2">
					<h2 className="text-2xl font-bold text-gray-800">{player.name}</h2>
					<div className="flex flex-wrap items-center justify-between space-x-2 text-gray-500">
						<p>🏳️ {player.country}</p>
						<p className="badge badge-lg border text-gray-500">{player.role}</p>
					</div>
				</div>

				{/* Role and Playing Style */}
				<div className="space-y-2">
					<p className="text-gray-500">Category: {player.category}</p>
					<div className="flex items-center space-x-2 text-gray-500">
						<span>🏏 {player.battingStyle}</span>
					</div>
					<div className="flex items-center space-x-2 text-gray-500">
						<span>🥎 {player.bowlingStyle}</span>
					</div>
				</div>

				{/* Bidding Price */}
				<div className="flex items-center space-x-2 font-semibold text-xl">
					<span>💲 {player.biddingPrice}</span>
				</div>

				{/* Choose Player Button */}
				<button
					className="w-full py-2 px-4 bg-lime-400 text-black rounded-lg hover:bg-lime-500 transition duration-200 font-semibold"
					onClick={() => onSelect(player)}
				>
					Choose Player
				</button>
			</div>
		</div>
	);
};

export default PlayerCard;
