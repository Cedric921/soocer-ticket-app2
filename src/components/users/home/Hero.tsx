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
		if (status.isSuccess === true || query.game) handleOpenModal();
	}, [status.isSuccess]);
	return (
		<div className=' container mx-auto w-full h-screen p-6 md:p-12 pt-24'>
			<div
				data-aos='zoom-in'
				className='relative  h-full mb-12 overflow-hidden shadow-2xl rounded-3xl'
			>
				<div className='absolute flex flex-col justify-center md:justify-center items-center  top-0 left-0 right-0 bottom-0 z-30 bg-white/20 text-white p-12'>
					{/* <span className='bg-primary-600 p-1 px-6 rounded-full '>Match</span> */}

					<h1 className='text-5xl md:text-8xl my-2 font-extrabold text-transparent bg-clip-text bg-white from-primary-400 via-pink-600 to-pink-600'>
						Les meilleurs  moments du <br />  football
					</h1>

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
