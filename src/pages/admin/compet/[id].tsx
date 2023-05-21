import { Button } from 'antd';
import Link from 'next/link';
import React from 'react';

const teams = [
	{
		id: '123',
		title: 'TP Mazembe',
		town: 'Lubumbashi',
	},
	{
		id: '253',
		title: 'OC Bukavu Dawa',
		town: 'Bukavu',
	},
];

const games = [
	{
		id: '2',
		team1: { title: 'TP Mazembe', town: 'Lubumbashi' },
		team2: { title: 'Oc Bukavu Dawa', town: 'Bukavu' },
		date: new Date(),
	},
	{
		id: '2',
		team1: { title: 'TP Mazembe', town: 'Lubumbashi' },
		team2: { title: 'Oc Bukavu Dawa', town: 'Bukavu' },
		date: new Date(),
	},
	{
		id: '2',
		team1: { title: 'TP Mazembe', town: 'Lubumbashi' },
		team2: { title: 'Oc Bukavu Dawa', town: 'Bukavu' },
		date: new Date(),
	},
	{
		id: '2',
		team1: { title: 'TP Mazembe', town: 'Lubumbashi' },
		team2: { title: 'Oc Bukavu Dawa', town: 'Bukavu' },
		date: new Date(),
	},
];

const competition = () => {
	return (
		<div className='p-4'>
			<div className='w-full flex justify-between'>
				<h1 className='text-2xl md:text-4xl font-semibold'>Champios League</h1>
				<Link href='/admin/compet'>
					<Button size='large'>Retour a la liste</Button>
				</Link>
			</div>
			<div className='p-2 md:p-8 text-white duration-1000 bg-black/60 hover:bg-black rounded-lg my-4 md:my-8'>
				Lorem ipsum dolor sit amet consectetur, adipisicing elit. Blanditiis
				error quae itaque enim dolor dolorem, nemo est deleniti aperiam ad,
				mollitia inventore necessitatibus similique a maiores voluptates
				suscipit voluptas eaque.
			</div>
			{/* <div className='flex justify-between flex-wrap my-4'> */}
			{/* <div className='w-full md:w-1/2'> */}
			<div className='my-4 md:my-8'>
				<h3 className='text-xl font-semibold'>Equpies de cette competition</h3>
				<div className='bg-slate-100 rounded-lg py-2 '>
					<div className='flex font-semibold justify-between py-4'>
						<div className='text-center w-12 flex items-center justify-center'>
							<span>#</span>
						</div>
						<div className='text-center w-1/4 flex items-center justify-center'>
							<span>Nom</span>
						</div>
						<div className='text-center w-1/4 flex items-center justify-center'>
							<span>Ville</span>
						</div>
					</div>
					{teams.map((team, i) => (
						<>
							<div
								className={`flex ${
									i % 2 == 0 ? 'bg-white' : null
								}  hover:bg-black/90 hover:text-white duration-1000 rounded justify-between py-4 cursor-pointer`}
							>
								<div className='text-center w-12 flex items-center justify-center'>
									<span>{team?.id}</span>
								</div>
								<div className='text-center w-1/4 flex items-center justify-center'>
									<span>{team?.title}</span>
								</div>
								<div className='text-center w-1/4 flex items-center justify-center'>
									<span>{team?.town}</span>
								</div>
							</div>
						</>
					))}
				</div>
			</div>
			{/* </div> */}
			{/* <div className='w-full md:w-1/2'> */}
			<div className='my-4 md:my-8'>
				<h3 className='text-xl font-semibold'>
					Rencontres de cette competition
				</h3>
				<div className='flex flex-wrap'>
					{games.map((game, i) => (
						<div key={i} className='w-full md:w-1/3 2xl:w-1/4 p-4'>
							<div className='border rounded bg-white hover:bg-black/10 duration-1000 hover:border-black p-4 '>
								<span className='bg-black text-white p-1 text-xs rounded'>
									{game.date.toLocaleDateString()}
								</span>
								<h3 className='text-2xl text-center font-semibold  text-black/80'>
									{game.team1?.title}
								</h3>
								<p className='text-center text-xs text-black/50'>
									{game.team1.town}
								</p>
								<div className='w-12 h-12 rounded-full mx-auto bg-black/10 flex justify-center items-center my-4'>
									<span>vs</span>
								</div>
								<h3 className='text-2xl text-center font-semibold text-black/80'>
									{game.team2?.title}
								</h3>
								<p className='text-center text-xs text-black/50'>
									{game.team2.town}
								</p>
							</div>
						</div>
					))}
				</div>
			</div>
			{/* </div> */}
			{/* </div> */}
		</div>
	);
};

export default competition;
