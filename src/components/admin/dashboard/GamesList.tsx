import React from 'react';
import { FaCalendar } from 'react-icons/fa';
import GameItem from './GameItem';

const fakeGames = [
	{
		teamOne: { title: 'Paris SG', city: 'paris' },
		teamTwo: { title: 'Real Madrid', city: 'Madrid' },
		date: new Date(),
	},
	{
		teamOne: { title: 'Barcelona Fc', city: 'Barcelona ' },
		teamTwo: { title: 'Real Madrid', city: 'Madrid' },
		date: new Date(),
	},
	{
		teamOne: { title: 'Paris SG', city: 'paris' },
		teamTwo: { title: 'Real Madrid', city: 'Madrid' },
		date: new Date(),
	},
	{
		teamOne: { title: 'Paris SG', city: 'paris' },
		teamTwo: { title: 'Real Madrid', city: 'Madrid' },
		date: new Date(),
	},
	{
		teamOne: { title: 'Paris SG', city: 'paris' },
		teamTwo: { title: 'Real Madrid', city: 'Madrid' },
		date: new Date(),
	},
];

const GamesList = () => {
	return (
		<div className='w-full flex flex-col '>
			{fakeGames.map((el, i) => (
				<GameItem
					teamOne={el.teamOne}
					teamTwo={el.teamTwo}
					date={el.date}
					key={i}
				/>
			))}
		</div>
	);
};

export default GamesList;
