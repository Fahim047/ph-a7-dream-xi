import PlayerCard from './PlayerCard';

const PlayersList = ({ playersData }) => {
	return (
		<section className="max-w-6xl mx-auto pb-24">
			<div className="flex items-center justify-between">
				<h1 className="text-2xl font-bold">Available Players</h1>
				<div>
					<button className="btn border-r-0 rounded-r-none bg-lime-400">
						Available
					</button>
					<button className="btn border-r-0 rounded-l-none bg-transparent">
						Selected
					</button>
				</div>
			</div>
			<div className="my-6 grid sm:grid-cols-2 md:grid-cols-3 justify-center gap-6">
				{playersData.map((player) => (
					<PlayerCard key={player.id} player={player} />
				))}
			</div>
		</section>
	);
};

export default PlayersList;
