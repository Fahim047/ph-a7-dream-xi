import React from 'react';
import SelectedPlayerCard from './SelectedPlayerCard';

const SelectedPlayers = ({ playersData, setActive, handleDelete }) => {
	if (playersData.length === 0) {
		return <div className="my-6 text-center">You didn't select any player</div>;
	}
	return (
		<div className="my-6 space-y-4">
			{playersData.map((player) => (
				<SelectedPlayerCard
					key={player.id}
					player={player}
					handleDelete={handleDelete}
				/>
			))}
			<div className="p-1 w-fit border rounded-xl">
				<button
					className="btn bg-lime-400"
					onClick={() => setActive('available')}
				>
					Add Players
				</button>
			</div>
		</div>
	);
};

export default SelectedPlayers;
