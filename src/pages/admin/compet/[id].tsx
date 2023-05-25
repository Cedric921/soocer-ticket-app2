import GameCard from '@/components/global/games/GameCard';
import { Button } from 'antd';
import Link from 'next/link';
import React from 'react';
import { games, teams } from '@/data/fakes';
import { useRouter } from 'next/router';

const Competition = ({ id }: { id: string }) => {
	const router = useRouter();

	return (
		<div className='p-4'>
			<div className='w-full flex justify-between'>
				<h1 className='text-2xl md:text-4xl font-semibold dark:text-white'>
					Champios League
				</h1>
				<Link href='/admin/compet'>
					<Button size='large'>Retour a la liste</Button>
				</Link>
			</div>
			<div className='p-2 md:p-8 text-white dark:text-white/80 duration-1000 bg-black/60 hover:bg-black rounded-lg my-4 md:my-8'>
				Lorem ipsum dolor sit amet consectetur, adipisicing elit. Blanditiis
				error quae itaque enim dolor dolorem, nemo est deleniti aperiam ad,
				mollitia inventore necessitatibus similique a maiores voluptates
				suscipit voluptas eaque.
			</div>
			<div className='my-4 md:my-8'>
				<h3 className='text-xl font-semibold dark:text-white/80'>
					Equpies de cette competition
				</h3>
				<div className='bg-slate-100 dark:bg-inherit rounded-lg py-2 overflow-x-auto'>
					<div className='flex font-semibold justify-between bg-white dark:bg-black/50 dark:text-white/70 py-4 min-w-[40rem]'>
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
									i % 2 !== 0 ? 'bg-white dark:bg-black/50' : null
								}  hover:bg-black/90 dark:hover:bg-white/40 min-w-[40rem] hover:text-white dark:text-white/70 duration-1000 rounded justify-between py-4 cursor-pointer`}
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
			<div className='my-4 md:my-8'>
				<h3 className='text-xl font-semibold'>
					Rencontres de cette competition
				</h3>
				<div className='flex flex-wrap'>
					{games.map((game, i) => (
						<div key={i} className='w-full md:w-1/3 2xl:w-1/4 p-4'>
							<GameCard game={game} />
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

Competition.getInitialProps = async ({ query }: { query: { id: string } }) => {
	const { id } = query;

	return { id };
};

export default Competition;
