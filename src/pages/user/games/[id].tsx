import { GAMES } from '@/app/routes';
import { Button } from 'antd';
import axios from 'axios';
import React from 'react';

const DetailsGame = ({ game }: { game: IGame }) => {
	const d = game ? new Date(game?.date).toISOString() : '';
	return (
		<div className=' min-h-screen md:p-12 pt-32'>
			<div className='bg-white w-full p-8 rounded mt-8 flex flex-col items-center'>
				<p className='border p-2 rounded-md mx-auto inline-block'>
					{d?.split('T')[0] + ' ' + d?.split('T')[1]}
				</p>
				<div className='flex flex-col md:flex-row justify-center items-center w-full my-8 md:px-16'>
					<div className='w-full md:w-1/2 p-4'>
						<div className='border-2 shadow-[0px_1px_5px_0px_#00424b] w-full flex items-center justify-center flex-col p-4 py-8 rounded-2xl hover:bg-slate-100 duration-500'>
							<span>{game?.TeamOne?.sigle}</span>
							<h3 className='text-4xl pb-2 font-bold text-primary-600 text-center'>
								{game?.TeamOne?.title}
							</h3>
							<span>de</span>
							<p className='font-semibold'>{game?.TeamOne?.town}</p>
						</div>
					</div>

					<div className='w-full md:w-1/2 p-4'>
						<div className='border-2 shadow-[0px_1px_5px_0px_#00424b] w-full flex items-center justify-center flex-col p-4 py-8 rounded-2xl hover:bg-slate-100 duration-500'>
							<span>{game?.TeamTwo?.sigle}</span>
							<h3 className='text-4xl pb-2 font-bold text-primary-600 text-center'>
								{game?.TeamTwo?.title}
							</h3>
							<span>de</span>
							<p className='font-semibold'>{game?.TeamTwo?.town}</p>
						</div>
					</div>
				</div>
				<Button size='large'>Reserver une place</Button>
			</div>
		</div>
	);
};

export async function getStaticPaths() {
	const res = await axios.get(`${GAMES}`);
	const ids = res.data?.data?.map((el: IGame) => ({ params: { id: el.id } }));
	return {
		paths: ids,
		fallback: false,
	};
}

export async function getStaticProps({ params }: { params: { id: string } }) {
	const res = await axios.get(`${GAMES}/${params.id}`);
	const game = await res?.data?.data;

	return { props: { game } };
}

export default DetailsGame;
