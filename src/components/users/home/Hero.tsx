import React from 'react';
import { useRouter } from 'next/router';
import { FaPlay } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '@/app/store';
import { createReservation } from '@/app/reservations/reservations.service';
import { Modal } from 'antd';
import { resetResStatus } from '@/app/reservations/reservations.slice';

const Hero = () => {
	const router = useRouter();
	const dispatch = useDispatch<AppDispatch>();
	const [open, setOpen] = React.useState(false);
	const { query } = router;
	const { status } = useSelector((state: RootState) => state.reservations);

	const handleOpenModal = () => {
		setOpen(true);
		setTimeout(() => {
			setOpen(false);
			dispatch(resetResStatus());
			router.replace('/');
		}, 6000);
	};

	React.useEffect(() => {
		if (query.game)
			dispatch(createReservation({ gameId: query.game as string }));
	}, [query.game]);

	React.useEffect(() => {
		if (status.isSuccess === true || query?.game?.length! > 1)
			handleOpenModal();
	}, [status.isSuccess]);
	return (
		<div className=' container mx-auto w-full h-screen p-6 md:p-12 pt-28'>
			<div className='relative  h-full mb-12 overflow-hidden  rounded-3xl flex items-center'>
				<div className='w-1/2 p-4 text-white'>
					<span className='text-2xl'>
						Venez vivre le moments de folie avec{' '}
					</span>
					<h1 className='text-white text-6xl md:text-7xl font-bold'>
						les rencontres du football
					</h1>
				</div>
				<div className='w-1/2'>
					<img
						src='images/champios.webp'
						alt=''
						className='object-cover rounded shadow-2xl'
					/>
				</div>
			</div>
			<Modal
				centered
				open={open}
				onCancel={() => {
					setOpen(false);
					router.replace('/');
				}}
				footer={[]}
			>
				<p>Confirmation reservation</p>
				<p className='text-center mt-4'>
					Felicitations, vous venez d&apos;effectuer une reservation pour match,
					verifier votre adresse mail pour voir plus des details
				</p>
			</Modal>
		</div>
	);
};

export default Hero;
