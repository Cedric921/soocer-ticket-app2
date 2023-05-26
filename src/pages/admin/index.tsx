import React from 'react';
import {
	FaFootballBall,
	FaPlaystation,
	FaUserAlt,
	FaUserFriends,
} from 'react-icons/fa';
import { Button, Input } from 'antd';
import Card from '@/components/admin/dashboard/Card';
import GameCard from '@/components/global/games/GameCard';
import Head from 'next/head';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '@/app/store';
import { getUsers } from '@/app/users/users.service';
import { getCompets } from '@/app/compet/compets.service';
import { getTeams } from '@/app/teams/teams.service';
import { getGames } from '@/app/games/games.service';
import { getReservations } from '@/app/reservations/reservations.service';
import { selectOneReservation } from '@/app/reservations/reservations.slice';

const Dashboard = () => {
	const dispatch = useDispatch<AppDispatch>();
	const [searchContent, setSearchContent] = React.useState<string>('');
	const { users } = useSelector((state: RootState) => state.users);
	const { competitons } = useSelector((state: RootState) => state.competitions);
	const { games } = useSelector((state: RootState) => state.games);
	const { teams } = useSelector((state: RootState) => state.teams);
	const { selected: selectedReservation } = useSelector(
		(state: RootState) => state.reservations
	);

	React.useEffect(() => {
		const fetch = async () => {
			users?.length! < 1 ? dispatch(getUsers()) : null;
			competitons?.length! < 1 ? dispatch(getCompets()) : null;
			teams?.length! < 1 ? dispatch(getTeams()) : null;
			games?.length! < 1 ? dispatch(getGames()) : null;

			dispatch(getReservations());
		};

		fetch();
	}, []);
	return (
		<>
			<Head>
				<title>Goal Go - administration</title>
			</Head>
			<div className='cards flex flex-wrap'>
				<div className='w-full sm:w-1/2 lg:w-1/4 h-52 p-2 md:p-4'>
					<Card
						number={users?.length}
						title='utilisateurs'
						icon={<FaUserAlt />}
					/>
				</div>
				<div className='w-full sm:w-1/2 lg:w-1/4 h-52 p-2 md:p-4'>
					<Card
						number={teams?.length}
						title='equipes'
						icon={<FaUserFriends />}
					/>
				</div>
				<div className='w-full sm:w-1/2 lg:w-1/4 h-52 p-2 md:p-4'>
					<Card
						number={competitons?.length}
						title='competitions'
						icon={<FaPlaystation />}
					/>
				</div>
				<div className='w-full sm:w-1/2 lg:w-1/4 h-52 p-2 md:p-4'>
					<Card
						number={games?.length}
						title='rencontres'
						icon={<FaFootballBall />}
					/>
				</div>
			</div>
			<div className='flex flex-wrap-reverse p-4'>
				<div className='w-full lg:w-2/3 py-2 lg:pr-2'>
					<div className='h-full bg-white dark:bg-white/20 rounded-xl border-2 dark:border-black/50 dark:text-white/80 duration-1000 p-1'>
						<div className='flex justify-between flex-wrap h-full'>
							<div className='w-full md:w-1/2 md:h-full p-4'>
								<h2 className='text-xl'>Verifer une reservation</h2>
								<div className='w-full h-full flex flex-col justify-center'>
									<label htmlFor='search'>
										Saisissez le code de la reservation
									</label>
									<Input
										id='search'
										name='search'
										type='text'
										size='large'
										placeholder='2737477ryrhfh83948'
										className='dark:bg-white/75 dark:focus:ring-4 ring-black/80'
										onChange={(e) => {
											setSearchContent(e.target.value);
											dispatch(selectOneReservation(e.target.value));
										}}
									/>
									<Button
										className='bg-black/70 dark:border dark:border-black/70 text-white w-full my-4'
										size='large'
										onClick={() =>
											dispatch(selectOneReservation(searchContent))
										}
									>
										Chercher
									</Button>
								</div>
							</div>
							<div className='w-full md:w-1/2 min-h-[20rem] p-2'>
								<div className='rounded-2xl shadow-[0px_5px_10px_5px_#00000024] h-full border-black/70 dark:text-white/80 border-2 p-2 relative'>
									{selectedReservation ? (
										<>
											<span className='bg-black/60 min-w-[20rem] text-white p-1 text-xs rounded'>
												{selectedReservation
													? new Date(
															selectedReservation?.date
													  )?.toLocaleDateString()
													: null}
											</span>
											<h3 className='text-2xl text-center font-semibold  text-black/80 dark:text-white/80'>
												{selectedReservation?.Game?.TeamOne.title ?? '...'}
											</h3>
											<p className='text-center text-xs text-black/50 dark:text-white/50'>
												{selectedReservation?.Game?.TeamOne?.town ?? '...'}
											</p>
											<div className='w-8 h-8 rounded-full mx-auto bg-black/10 flex justify-center items-center my-4'>
												<span>vs</span>
											</div>
											<h3 className='text-2xl text-center font-semibold text-black/80 dark:text-white/80'>
												{selectedReservation?.Game?.TeamTwo?.title ?? '...'}
											</h3>
											<p className='text-center text-xs text-black/50 dark:text-white/50'>
												{selectedReservation?.Game?.TeamTwo?.town ?? '...'}
											</p>
											<div className='bg-black/70 rounded-b-xl text-white text-center mx-auto absolute bottom-0 left-0 right-0'>
												<h4 className='text-center pt-2 '>
													{selectedReservation?.User?.names}
												</h4>
												<span className='text-xl font-bold'>253</span>
											</div>
										</>
									) : (
										<div className='w-full h-full flex text-center justify-center items-center'>
											<p className='text-lg'>
												Enterer un code <br /> pour voir la reservation
											</p>
										</div>
									)}
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
					{games
						?.filter((el) => new Date(el.date) >= new Date())
						.map((game, i) => (
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
