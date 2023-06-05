import React from 'react';

const GameCardSqueleton = () => {
	return (
		<div className='w-full border-0  dark:border-white/20 rounded bg-white dark:bg-black/70 hover:border-black shadow-[0px_0px_15px_0px_#00000024] hover:shadow-[0px_0px_20px_10px_#00000024] dark:hover:bg-white/20 duration-1000 dark:text-white/60  p-4 py-6 relative flex flex-col items-center animate-pulse'>
			<h3 className='text-2xl text-center font-semibold  text-black/80 dark:text-white/70 p-3 rounded bg-slate-300/50 w-full animate-pulse'></h3>
			<span className='text-center text-xs text-black/50 dark:text-white/50 p-3  rounded-lg bg-slate-200/50 my-2 w-1/2 animate-pulse'></span>
			<div className='w-12 h-12 rounded-full mx-auto bg-black/10 dark:bg-white/25 flex justify-center items-center my-4 animate-pulse'>
				<span>vs</span>
			</div>
			<h3 className='text-2xl text-center font-semibold  text-black/80 dark:text-white/70 p-3 rounded bg-slate-300/50 w-full animate-pulse'></h3>
			<span className='text-center text-xs text-black/50 dark:text-white/50 p-3  rounded-lg bg-slate-200/50 my-2 w-1/2 animate-pulse'></span>
			<div className='flex items-center justify-center p-4'>
				<span className='bg-primary-500/50 dark:bg-white/40 text-white  text-xs rounded mx-auto p-3 w-40'></span>
			</div>
		</div>
	);
};

export default GameCardSqueleton;
