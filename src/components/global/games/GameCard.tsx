import React from 'react';

interface ITeam {
	title: string;
	town: string;
	sigle?: string;
}

interface IGame {
	team1: ITeam;
	team2: ITeam;
	date: Date;
}

const GameCard = ({ game }: { game: IGame }) => {
	return (
		<div className='border rounded bg-white hover:bg-black/10 duration-1000 hover:border-black p-4 '>
			<span className='bg-black text-white p-1 text-xs rounded'>
				{game.date.toLocaleDateString()}
			</span>
			<h3 className='text-2xl text-center font-semibold  text-black/80'>
				{game.team1?.title}
			</h3>
			<p className='text-center text-xs text-black/50'>{game.team1.town}</p>
			<div className='w-12 h-12 rounded-full mx-auto bg-black/10 flex justify-center items-center my-4'>
				<span>vs</span>
			</div>
			<h3 className='text-2xl text-center font-semibold text-black/80'>
				{game.team2?.title}
			</h3>
			<p className='text-center text-xs text-black/50'>{game.team2.town}</p>
		</div>
	);
};

export default GameCard;
