import React from 'react';
import SelectedPlayerCard from './SelectedPlayerCard';

const SelectedPlayers = ({ playersData }) => {
	if (playersData.length === 0) {
		return <div className="my-6 text-center">You didn't select any player</div>;
	}
	return (
		<div className="my-6">
			{playersData.map((player) => (
				<SelectedPlayerCard key={player.id} player={player} />
			))}
		</div>
	);
};

export default SelectedPlayers;
