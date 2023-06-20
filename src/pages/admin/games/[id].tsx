import { GAMES, RESERVATION_ROUTE } from '@/app/routes';
import PageHeader from '@/components/global/PageHeader';
import GameCard from '@/components/global/games/GameCard';
import axios from 'axios';
import Head from 'next/head';
import React from 'react';

const game = ({ game }: { game: any }) => {
	console.log(game);
	return (
		<div>
			<Head>
				<title>Googl go - admin rencontres</title>
			</Head>
			<PageHeader
				title={`Details d'une rencontre`}
				sub='Gerer toutes les rencontres, matchs '
			/>
			<div className='flex justify-center items-center'>
				<div className='w-1/2 m-4'>
					<GameCard game={game} />
				</div>
			</div>
			<div>
				<div className='flex font-semibold justify-between bg-white dark:bg-black/50 dark:text-white/70 py-4 min-w-[40rem]'>
					<div className='text-center w-12 flex items-center justify-center'>
						<span>#</span>
					</div>
					<div className='text-center w-1/4 flex items-center justify-center'>
						<span>Noms</span>
					</div>
					<div className='text-center w-1/4 flex items-center justify-center'>
						<span>Date </span>
					</div>
					<div className='text-center w-1/4 flex items-center justify-center'>
						<span>Code Unique</span>
					</div>
					<div className='text-center w-1/4 flex items-center justify-center'>
						<span>Placele</span>
					</div>
				</div>
				{game?.Reservation.map((reservation: IReservation, i: number) => (
					<>
						<div
							className={`flex ${
								i % 2 !== 0 ? 'bg-white dark:bg-black/50' : null
							}  hover:bg-black/70 dark:hover:bg-white/40 min-w-[40rem]  hover:text-white dark:text-white/70 duration-1000 rounded justify-between py-4 cursor-pointer`}
						>
							<div className='text-center w-12 flex items-center justify-center'>
								<span>{+i + 1}</span>
							</div>
							<div className='text-center w-1/4 flex items-center justify-center'>
								<span>{reservation?.User?.names}</span>
							</div>
							<div className='text-center w-1/4 flex items-center justify-center'>
								<span>{new Date(reservation?.date).toLocaleDateString()}</span>
							</div>
							<div className='text-center w-1/4 flex items-center justify-center'>
								<span>{reservation?.uniqueCode}</span>
							</div>
							<div className='text-center w-1/4 flex items-center justify-center'>
								<span>{reservation?.place}</span>
							</div>
						</div>
					</>
				))}
				{game?.Reservation?.length < 1 ? (
					<div className='text-center py-12 text-black dark:text-white'>
						<p>Pas de reservation pour cette rencontre </p>
					</div>
				) : null}
			</div>
		</div>
	);
};

export async function getStaticProps({ params }: { params: { id: string } }) {
	let game = null;
	try {
		const res = await axios.get(`${GAMES}/${params.id}`);
		game = await res?.data;
		console.log(res.data);
	} catch (error) {}

	return { props: { game: game.data }, revalidate: 5 };
}

export async function getStaticPaths() {
	let ids = [];
	try {
		const res = await axios.get(GAMES);
		ids = res.data?.data?.map((el: IGame) => ({ params: { id: el.id } }));
	} catch (error) {}
	return {
		paths: ids,
		fallback: 'blocking',
	};
}

export default game;
