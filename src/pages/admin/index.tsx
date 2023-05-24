import React from 'react';
import { FaUserAlt, FaUserFriends } from 'react-icons/fa';
import { Button, Input } from 'antd';
import Card from '@/components/admin/dashboard/Card';
import { games } from '@/data/fakes';
import GameCard from '@/components/global/games/GameCard';
import Head from 'next/head';

const Dashboard = () => {
	return (
		<>
			<Head>
				<title>Goal Go - administration</title>
			</Head>
			<div className='cards flex flex-wrap'>
				<div className='w-full sm:w-1/2 lg:w-1/4 h-52 p-4'>
					<Card number={12} title='utilisateur' icon={<FaUserAlt />} />
				</div>
				<div className='w-full sm:w-1/2 lg:w-1/4 h-52 p-4'>
					<Card number={23} title='equipes' icon={<FaUserFriends />} />
				</div>
				<div className='w-full sm:w-1/2 lg:w-1/4 h-52 p-4'>
					<Card number={9} title='competitions' icon={<FaUserAlt />} />
				</div>
				<div className='w-full sm:w-1/2 lg:w-1/4 h-52 p-4'>
					<Card number={21} title='rencontres' icon={<FaUserAlt />} />
				</div>
			</div>
			<div className='flex flex-wrap-reverse p-4'>
				<div className='w-full lg:w-2/3 py-2 lg:pr-2'>
					<div className='h-full bg-white dark:bg-white/20 rounded-xl border-2 dark:border-black/50 dark:text-white/80 duration-1000 p-1'>
						<div className='flex justify-between h-full'>
							<div className='w-1/2 h-full p-4'>
								<h2 className='text-xl'>Verifer une reservation</h2>
								<div className='w-full h-full flex flex-col justify-center'>
									<label>Saisissez le code de la reservation</label>
									<Input
										name='search'
										type='text'
										size='large'
										placeholder='2737477ryrhfh83948'
										className='dark:bg-white/75'
									/>
									<Button
										className='bg-black/70 dark:border dark:border-black/70 text-white w-full my-4'
										size='large'
									>
										Chercher
									</Button>
								</div>
							</div>
							<div className='w-1/2 p-2'>
								<div className='rounded-2xl shadow-[0px_5px_10px_5px_#00000024] h-full border-black/70 dark:text-white/80 border-2 p-2 relative'>
									<span className='bg-black/60 text-white p-1 text-xs rounded'>
										{games[0].date.toLocaleDateString()}
									</span>
									<h3 className='text-2xl text-center font-semibold  text-black/80 dark:text-white/80'>
										{games[0].team1?.title}
									</h3>
									<p className='text-center text-xs text-black/50 dark:text-white/50'>
										{games[0].team1.town}
									</p>
									<div className='w-8 h-8 rounded-full mx-auto bg-black/10 flex justify-center items-center my-4'>
										<span>vs</span>
									</div>
									<h3 className='text-2xl text-center font-semibold text-black/80 dark:text-white/80'>
										{games[0].team2?.title}
									</h3>
									<p className='text-center text-xs text-black/50 dark:text-white/50'>
										{games[0].team2.town}
									</p>
									<div className='bg-black/70 rounded-b-xl text-white text-center mx-auto absolute bottom-0 left-0 right-0'>
										<h4 className='text-center pt-2 '>{'Cedric karungu'}</h4>
										<span className='text-xl font-bold'>253</span>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className='w-full lg:w-1/3 py-2 lg:pl-2'>
					<div className='bg-black/60 hover:bg-black duration-1000 text-white dark:text-white/80 rounded-xl p-6'>
						<h1 className='text-5xl md:text-4xl font-bold'>
							Le moyen le plus facile de suivre les reservations des rencontres
						</h1>
						<p className='text-sm my-4 text-white/80'>
							Enregistrer rapidement une nouvelle rencontre et permettez au
							grand public de faire des reservations
						</p>
						<Button className='text-white'>Nouvelle rencontre</Button>
					</div>
				</div>
			</div>
			<div className='my-4 md:my-8'>
				<h3 className='text-xl font-semibold px-4 dark:text-white'>
					Rencontres planifiées
				</h3>
				<div className='flex flex-wrap'>
					{games.map((game, i) => (
						<div key={i} className='w-full md:w-1/3 2xl:w-1/4 p-4'>
							<GameCard game={game} />
						</div>
					))}
				</div>
			</div>
		</>
	);
};

export default Dashboard;
