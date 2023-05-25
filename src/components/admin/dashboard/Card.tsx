import React from 'react';

const Card = ({
	title,
	number,
	icon,
}: {
	title: string;
	number?: number;
	icon: React.ReactNode;
}) => {
	return (
		<div className='cursor-pointer bg-white dark:bg-black dark:hover:bg-white/10 dark:text-white hover:bg-black/60  hover:text-white rounded-md p-4 h-full shadow-[0_3px_10px_rgb(0,0,0,0.2)] duration-500 hover:shadow-[0px_25px_50px_10px_#00000024]'>
			<div className='flex justify-between'>
				<h4 className='text-3xl font-bold'>{number ?? '...'}</h4>
				<p className='border border-gray-400 rounded-lg p-2 h-12 w-12 flex justify-center items-center'>
					{icon}
				</p>
			</div>
			<h4>{title}</h4>
		</div>
	);
};

export default Card;
