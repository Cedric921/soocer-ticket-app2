import { AppDispatch, RootState } from '@/app/store';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import CompetitionItem from './CompetitionItem';
import { getCompets } from '@/app/compet/compets.service';
import { FiLoader } from 'react-icons/fi';

const GameList = () => {
	const { competitons, status } = useSelector(
		(state: RootState) => state.competitions
	);
	const dispatch = useDispatch<AppDispatch>();

	React.useEffect(() => {
		dispatch(getCompets());
	}, []);

	return (
		<div className='bg-white py-8'>
			<div className='container mx-auto flex flex-col items-center'>
				<span>match</span>
				<h1 className='text-2xl md:text-4xl font-semibold'>
					Les rencontres programmées
				</h1>
				<div className='flex items-center flex-wrap w-full my-4'>
					{competitons?.map((compet) => (
						<CompetitionItem competition={compet} key={compet.id} />
					))}
					{status.isLoading ? (
						<div className='bg-primary-500 hover:bg-primary-700 cursor-pointer duration-500 rounded-full p-1 px-3 text-white m-1'>
							<FiLoader className='animate-spin' />
							<span>Chargement</span>
						</div>
					) : null}
				</div>
				<div>match list</div>
			</div>
		</div>
	);
};

export default GameList;
