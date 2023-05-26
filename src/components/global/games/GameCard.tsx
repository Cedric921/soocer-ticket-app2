import Link from 'next/link';
import React from 'react';

const GameCard = ({ game }: { game: IGame }) => {
	return (
		<div className='border dark:border-2 dark:border-white/20 rounded bg-white dark:bg-black/70 hover:bg-black/10 dark:hover:bg-white/20 duration-1000 hover:border-black dark:text-white/60  p-4 py-6 relative'>
			<span className='bg-black/70 dark:bg-white/40 text-white p-1 text-xs rounded absolute -top-2'>
				{new Date(game.date).toUTCString()}
			</span>
			<h3 className='text-2xl text-center font-semibold  text-black/80 dark:text-white/70'>
				{game.TeamOne?.title}
			</h3>
			<p className='text-center text-xs text-black/50 dark:text-white/50'>
				{game.TeamOne?.town}
			</p>
			<div className='w-12 h-12 rounded-full mx-auto bg-black/10 dark:bg-white/25 flex justify-center items-center my-4'>
				<span>vs</span>
			</div>
			<h3 className='text-2xl text-center font-semibold text-black/80 dark:text-white/70'>
				{game.TeamTwo?.title}
			</h3>
			<p className='text-center text-xs text-black/50 dark:text-white/50'>
				{game.TeamTwo?.town}
			</p>
			<Link
				href={`/admin/games/${game.id}`}
				className='absolute top-0 bottom-0 left-0 right-0'
			></Link>
		</div>
	);
};

export default GameCard;
