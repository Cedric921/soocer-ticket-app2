import { createReservation } from '@/app/reservations/reservations.service';
import { GAMES } from '@/app/routes';
import { AppDispatch, RootState } from '@/app/store';
import { Button, Modal, message } from 'antd';
import axios from 'axios';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FaPlay } from 'react-icons/fa';
import { resetResStatus } from '@/app/reservations/reservations.slice';
import { GetServerSideProps } from 'next';
import Stripe from 'stripe';
import getStripe from '@/lib/getStripe';

const DetailsGame = ({ game }: { game: IGame }) => {
	const { user } = useSelector((state: RootState) => state.auth);
	const { reservations, message, status } = useSelector(
		(state: RootState) => state.reservations
	);
	const dispatch = useDispatch<AppDispatch>();
	const [open, setOpen] = React.useState(false);

	const handleOpenModal = () => {
		setOpen(true);
		setTimeout(() => {
			setOpen(false);
			dispatch(resetResStatus());
		}, 6000);
	};

	const handleBook = async () => {
		const stripe = await getStripe();

		const res = await axios.post('/api/stripe', game);

		if (res.status == 500) return;

		const data = res.data;

		stripe.redirectToCheckout({ sessionId: data.id });
	};

	const d = game ? new Date(game?.date).toISOString() : '';
	return (
		<>
			<div className='min-h-screen flex items-center flex-col justify-center gap-4'>
				<Button className='text-white' onClick={handleBook}>
					Reserver à {game.price} $
				</Button>
				<div className='w-full relative flex items-center justify-center gap-2'>
					<div className=' p-8 bg-black/50 text-white w-1/3 shadow-2xl rounded-md'>
						<span>{game?.TeamOne?.sigle}</span>
						<h3 className='text-4xl font-bold'>{game?.TeamOne?.title}</h3>
						<span>{game?.TeamOne?.town}</span>
					</div>
					<div className='absolute bg-white p-6 rounded-full w-14 h-14 flex justify-center items-center'>
						<span className='text-2xl font-bold'>vs</span>
					</div>
					<div className=' p-8 bg-black/50 text-white w-1/3 text-end shadow-2xl rounded-md'>
						<span>{game?.TeamTwo?.sigle}</span>
						<h3 className='text-4xl font-bold'>{game?.TeamTwo?.title}</h3>
						<span>{game?.TeamTwo?.town}</span>
					</div>
				</div>
			</div>
			<Modal centered open={open} onCancel={() => setOpen(false)} footer={[]}>
				<p>Confirmation reservation</p>
				<p className='text-center mt-4'>
					Felicitations, vous venez d&apos;effectuer une reservation pour match,
					verifier votre adresse mail pour voir plus des details
				</p>
				<div className='flex flex-col items-center'>
					<h3 className='text-2xl font-extrabold mt-4'>
						{game?.TeamOne?.title}
					</h3>
					<div className='bg-black/40 text-white rounded-full text-center w-8 h-8 flex items-center justify-center'>
						vs
					</div>
					<h3 className='text-2xl font-extrabold'>{game?.TeamTwo?.title}</h3>
				</div>
			</Modal>
		</>
	);
};

export async function getStaticPaths() {
	let ids = [];
	try {
		const res = await axios.get(`${GAMES}`);
		ids = res.data?.data?.map((el: IGame) => ({ params: { id: el.id } }));
	} catch (error) {}
	return {
		paths: ids,
		fallback: 'blocking',
	};
}

export async function getStaticProps({ params }: { params: { id: string } }) {
	let game = null;
	try {
		const res = await axios.get(`${GAMES}/${params.id}`);
		game = await res?.data?.data;
	} catch (error) {}

	return { props: { game } };
}

export default DetailsGame;
