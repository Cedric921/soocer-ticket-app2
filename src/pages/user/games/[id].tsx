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

		// handleCheckout(game);
		// dispatch(createReservation({ gameId: game?.id }));
	};

	React.useEffect(() => {
		if (status.isSuccess) handleOpenModal();
	}, [status.isSuccess]);

	const d = game ? new Date(game?.date).toISOString() : '';
	return (
		<div className='w-full h-screen flex items-center justify-center'>
			<div className=' container mx-auto w-full h-[80vh] p-6 md:p-12 pt-24'>
				<div
					data-aos='zoom-in'
					className='relative  h-full mb-12 overflow-hidden shadow-2xl rounded-3xl'
				>
					<div className='absolute flex flex-col md:flex-row gap-1 justify-center  items-start  top-0 left-0 right-0 bottom-0 z-30 bg-black/60 text-white p-12'>
						<div className='w-full h-full md:w-1/2 p-4 md:p-5 text-center md:text-start bg-black/80 rounded-t-3xl  md:rounded-tr-none md:rounded-l-3xl'>
							<span>{game?.TeamOne?.sigle}</span>
							<h3 className='text-4xl md:text-7xl text-center md:text-start my-2 font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-primary-400 via-pink-600 to-pink-600'>
								{game?.TeamOne?.title}
							</h3>
							<span>de</span>
							<p className='font-semibold'>{game?.TeamOne?.town}</p>
						</div>
						<div className='w-full h-full md:w-1/2 pt-12 md:pt-2 p-4 md:p-5 text-center md:text-end bg-black/80 rounded-b-3xl  md:rounded-bl-none md:rounded-r-3xl'>
							<span>{game?.TeamTwo?.sigle}</span>
							<h3 className='text-4xl md:text-7xl text-center md:text-end my-2 font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-pink-600 via-pink-600 to-primary-400'>
								{game?.TeamTwo?.title}
							</h3>
							<span>de</span>
							<p className='font-semibold'>{game?.TeamTwo?.town}</p>
						</div>
					</div>
					<video
						autoPlay
						loop
						muted
						className='absolute z-10 top-0  w-auto min-w-full min-h-full max-w-none'
					>
						<source src='/videos/uefa.mp4' type='video/mp4' />
						Your browser does not support the video tag.
					</video>
					<div className='absolute bg-white/30 h-24 w-24 animate-pulse z-30 left-0 right-0 top-0 bottom-0 m-auto  p-4 rounded-full'></div>
					<div className='absolute bg-white h-16 w-16 flex items-center justify-center z-30  left-0 right-0 top-0 bottom-0 m-auto p-4 rounded-full'>
						<FaPlay className='text-2xl text-primary-700' />
					</div>
				</div>
				<div className='flex justify-center'>
					{user ? (
						<Button size='large' onClick={handleBook} className='text-white'>
							Reserver une place
						</Button>
					) : null}
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
		</div>
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
		fallback: false,
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

// export const getServerSideProps: GetServerSideProps = async (ctx) => {
// 	const stripe = new Stripe(process.env.STRIPE_SECRET_KEY ?? '', {
// 		apiVersion: '2022-11-15',
// 	});

// 	const response = await stripe.prices.list({
// 		limit: 10,
// 		expand: ['data.product'],
// 	});

// 	const prices = response.data.filter((p) => p.active);

// 	return {
// 		props: {
// 			prices,
// 		},
// 	};
// };
