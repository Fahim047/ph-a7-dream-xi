import React from 'react';
import PlayerCard from './PlayerCard';

const AvailablePlayers = ({ playersData, onSelect }) => {
	return (
		<div className="my-6 grid sm:grid-cols-2 md:grid-cols-3 justify-center gap-2">
			{playersData.map((player) => (
				<PlayerCard key={player.id} player={player} onSelect={onSelect} />
			))}
		</div>
	);
};

export default AvailablePlayers;
