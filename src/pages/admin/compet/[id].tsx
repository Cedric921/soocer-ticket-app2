import GameCard from '@/components/global/games/GameCard';
import { Button } from 'antd';
import Link from 'next/link';
import React from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';
import { COMPETITIONS } from '@/app/routes';

const Competition = ({ id }: { id: string }) => {
	const router = useRouter();

	const [loading, setIsLoading] = React.useState<boolean>(false);
	const [detailsCompet, setDetailsCompet] =
		React.useState<IDetailsCompetition>();

	React.useEffect(() => {
		const fetch = async () => {
			try {
				setIsLoading(true);
				const res = await axios.get(`${COMPETITIONS}/${id}`);
				setIsLoading(false);
				const { data } = res;
				setDetailsCompet(data?.data);
			} catch (error) {}
		};
		fetch();
	}, []);

	console.log(detailsCompet);

	return (
		<div className='p-4'>
			<div className='w-full flex justify-between'>
				<h1 className='text-2xl md:text-4xl font-semibold dark:text-white'>
					{detailsCompet?.title}
				</h1>
				<Link href='/admin/compet'>
					<Button size='large' className='dark:text-white'>
						Retour a la liste
					</Button>
				</Link>
			</div>
			<div className='p-2 md:p-8 text-black/70 dark:text-white/80 duration-1000 bg-white dark:bg-black/80 dark:hover:bg-black dark:hover:border-white hover:bg-black/70 hover:text-white border border-black/20 rounded-lg my-4 md:my-8'>
				{detailsCompet?.description}
			</div>
			{/* <div className='my-4 md:my-8'>
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
					{teams?.map((team, i) => (
						<>
							<div
								className={`flex ${
									i % 2 !== 0 ? 'bg-white dark:bg-black/50' : null
								}  hover:bg-black/90 dark:hover:bg-white/40 min-w-[40rem] hover:text-white dark:text-white/70 duration-1000 rounded justify-between py-4 cursor-pointer`}
							>
								<div className='text-center w-12 flex items-center justify-center'>
									<span>{+i + 1}</span>
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
			</div> */}
			<div className='my-4 md:my-8'>
				<h3 className='text-xl font-semibold dark:text-white'>
					Rencontres de cette competition
				</h3>
				<div className='flex justify-center flex-wrap'>
					{detailsCompet?.games?.length! > 0 ? (
						detailsCompet?.games?.map((game: IGame, i) => (
							<div key={i} className='w-full md:w-1/3 2xl:w-1/4 p-4'>
								<GameCard game={game} />
							</div>
						))
					) : (
						<div className='h-36 flex justify-center items-center'>
							<p className='dark:text-white my-8'>
								Pas des rencontres prevuées pour {detailsCompet?.title}
							</p>
						</div>
					)}
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
