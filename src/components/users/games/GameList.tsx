import { AppDispatch, RootState } from '@/app/store';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import CompetitionItem from './CompetitionItem';
import { getCompets } from '@/app/compet/compets.service';
import { FiLoader } from 'react-icons/fi';
import GameCard from '@/components/global/games/GameCardUser';
import { getGames } from '@/app/games/games.service';

const GameList = () => {
	const { competitons, status } = useSelector(
		(state: RootState) => state.competitions
	);
	const { games, status: gameStatus } = useSelector(
		(state: RootState) => state.games
	);
	const dispatch = useDispatch<AppDispatch>();

	React.useEffect(() => {
		dispatch(getCompets());
		dispatch(getGames());
	}, []);

	return (
		<div className='bg-white py-24'>
			<div className='container mx-auto flex flex-col items-center'>
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
				<div>match list</div>
				<div className='flex flex-wrap'>
					{games?.map((game: IGame) => (
						<div key={game.id} className='w-full md:w-1/3 2xl:w-1/4 p-4'>
							<GameCard game={game} />
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default GameList;
