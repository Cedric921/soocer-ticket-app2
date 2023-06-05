import { AppDispatch, RootState } from '@/app/store';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import CompetitionItem from './CompetitionItem';
import { getCompets } from '@/app/compet/compets.service';
import { FiLoader } from 'react-icons/fi';
import GameCard from '@/components/global/games/GameCardUser';
import { getGames } from '@/app/games/games.service';
import GameCardSqueleton from '@/components/global/loaders/GameCardSqueleton';
import { Button } from 'antd';
import Link from 'next/link';

const GameList = ({ max }: { max?: number }) => {
	const { competitons, status } = useSelector(
		(state: RootState) => state.competitions
	);
	const { games, status: gameStatus } = useSelector(
		(state: RootState) => state.games
	);
	const dispatch = useDispatch<AppDispatch>();

	const userGames = max ? games?.slice(0, max) : games;

	React.useEffect(() => {
		dispatch(getCompets());
		dispatch(getGames());
	}, []);

	return (
		<div className='bg-white py-24'>
			<div className='container bg-white mx-auto flex flex-col items-center'>
				<span>match</span>
				<h1 className='text-2xl md:text-4xl font-semibold'>
					Les rencontres programmées
				</h1>
				<div className='flex items-center justify-center flex-wrap w-full my-4'>
					{competitons?.map((compet) => (
						<CompetitionItem competition={compet} key={compet.id} />
					))}
					{status.isLoading ? (
						<div className='bg-primary-500 hover:bg-primary-700 cursor-pointer duration-500 rounded-full p-1 px-3 text-white m-1 flex items-center'>
							<FiLoader className='animate-spin' />
							<span>Chargement</span>
						</div>
					) : null}
				</div>

				<div className='w-full flex items-center flex-wrap my-4'>
					{userGames ? (
						userGames?.map((game: IGame) => (
							<div
								key={game.id}
								className='w-full sm:w-1/2 lg:w-1/3 2xl:w-1/4 p-4'
							>
								<GameCard game={game} />
							</div>
						))
					) : gameStatus.isLoading ? (
						<>
							<div className='w-full sm:w-1/2 lg:w-1/3 2xl:w-1/4 p-4'>
								<GameCardSqueleton />
							</div>
							<div className='w-full sm:w-1/2 lg:w-1/3 2xl:w-1/4 p-4'>
								<GameCardSqueleton />
							</div>
							<div className='w-full sm:w-1/2 lg:w-1/3 2xl:w-1/4 p-4'>
								<GameCardSqueleton />
							</div>
						</>
					) : (
						<div className='w-full flex justify-center items-center h-56'>
							<p>Erreur d&apos;internet</p>
						</div>
					)}
				</div>
				<div className='py-6'>
					{max ? (
						<Link
							href={'/user/games'}
							className=' border-primary-500 rounded-full text-primary-500 bg-primary-500/20 hover:bg-primary-500 hover:text-white duration-500 p-3 px-5'
						>
							voir plus
						</Link>
					) : null}
				</div>
			</div>
		</div>
	);
};

export default GameList;
