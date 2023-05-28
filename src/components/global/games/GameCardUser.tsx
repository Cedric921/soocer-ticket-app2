import Link from 'next/link';
import React from 'react';

const GameCard = ({ game }: { game: IGame }) => {
	return (
		<div
			data-aos='zoom-in'
			className='border-0  dark:border-white/20 rounded bg-white dark:bg-black/70 hover:border-black shadow-[0px_0px_15px_0px_#00000024] hover:shadow-[0px_0px_20px_10px_#00000024] dark:hover:bg-white/20 duration-1000 dark:text-white/60  p-4 py-6 relative'
		>
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
			<div className='flex items-center justify-center p-4'>
				<span className='bg-primary-500 dark:bg-white/40 text-white p-1 text-xs rounded mx-auto'>
					{new Date(game.date).toUTCString()}
				</span>
			</div>
			<Link
				href={`/user/games/${game.id}`}
				className='absolute top-0 bottom-0 left-0 right-0'
			></Link>
		</div>
	);
};

export default GameCard;
