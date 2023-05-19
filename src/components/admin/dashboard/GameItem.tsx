import React from 'react';
import { FaCalendar } from 'react-icons/fa';

type Team = { title: string; city: string };
interface IGameItem {
	teamOne: Team;
	teamTwo: Team;
	date: Date;
}

const GameItem = ({ teamOne, teamTwo, date }: IGameItem) => {
	return (
		<div className='flex w-full items-center gap-4 my-4 border-b border-gray-200 py-2'>
			<div className='w-1/4 bg-slate-50 p-4 hover:bg-black/50 hover:text-white duration-500'>
				<h3 className='font-semibold'>{teamOne.title}</h3>
				<span className='text-sm font-extralight'>{teamOne.city}</span>
			</div>
			<div className='w-12 md:w-1/4 flex justify-center'>
				<span className='bg-slate-50 rounded-full p-4'>vs</span>
			</div>
			<div className='w-1/4 bg-slate-50 p-4 hover:bg-black/50 hover:text-white duration-500'>
				<h3 className='font-semibold'>{teamTwo.title}</h3>
				<span className='text-sm font-extralight'>{teamTwo.city}</span>
			</div>
			<div className='w-1/4 bg-slate-50 p-2 md:p-4 flex items-center gap-4'>
				<FaCalendar className='text-xl sm:text-2xl xl:text-3xl text-black/60' />
				<div className='w-full'>
					<h3 className=''>{date.toLocaleDateString()}</h3>
					<span className='text-sm font-extralight'>
						{date.toLocaleTimeString()}
					</span>
				</div>
			</div>
		</div>
	);
};

export default GameItem;
