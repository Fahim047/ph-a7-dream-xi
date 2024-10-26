import React from 'react';
import Trash from '../icons/Trash';

const SelectedPlayerCard = ({ player, handleDelete }) => {
	return (
		<div className="flex items-center gap-2 p-2 border rounded-xl">
			<img
				src={player.imageUrl}
				alt={player.name}
				className="size-20 rounded-xl object-cover"
			/>
			<div className="flex flex-1 justify-between items-center">
				<div className="space-y-2">
					<h2 className="font-bold text-xl">{player.name}</h2>
					<p className="text-gray-500">{player.role}</p>
				</div>
				<button
					className="text-red-500"
					onClick={() => handleDelete(player.id)}
				>
					<Trash />
				</button>
			</div>
		</div>
	);
};

export default SelectedPlayerCard;
