import { Button } from 'antd';
import React from 'react';
import { FaBook, FaLock, FaMailBulk, FaPhone } from 'react-icons/fa';

const DetailsUserCard = ({
	handleShowEdit,
	user,
}: {
	handleShowEdit: () => void;
	user: IUser;
}) => {
	const showEdit = () => {
		handleShowEdit();
	};
	return (
		<div className='bg-white dark:bg-black/80 duration-1000 text-black rounded-xl p-6'>
			<h1 className='text-2xl md:text-4xl font-bold dark:text-white/90'>
				Détails utilisateur
			</h1>
			<div className='my-4 flex items-center gap-2'>
				<div className='w-12 y-12 bg-black/10 dark:bg-white/20 hover:bg-black/20 dark:hover:bg-white/40 duration-1000 p-4 rounded'>
					<FaBook className='dark:text-white' />
				</div>
				<div>
					<label className='font-light text-sm dark:text-white/60'>Noms</label>
					<p className='font-semibold dark:text-white/90'>{user?.names}</p>
				</div>
			</div>
			<div className='my-4 flex items-center gap-2'>
				<div className='w-12 y-12 bg-black/10 dark:bg-white/20 hover:bg-black/20 dark:hover:bg-white/40 duration-1000 p-4 rounded'>
					<FaMailBulk className='dark:text-white' />
				</div>
				<div>
					<label className='font-light text-sm dark:text-white/60'>Email</label>
					<p className='font-semibold dark:text-white/90'>{user?.email}</p>
				</div>
			</div>
			<div className='my-4 flex items-center gap-2'>
				<div className='w-12 y-12 bg-black/10 dark:bg-white/20 hover:bg-black/20 dark:hover:bg-white/40 duration-1000 p-4 rounded'>
					<FaLock className='dark:text-white' />
				</div>
				<div>
					<label className='font-light text-sm dark:text-white/60'>Role</label>
					<p className='font-semibold dark:text-white/90'>{user?.role}</p>
				</div>
			</div>
			<Button
				size='large'
				className='w-full dark:text-white'
				onClick={showEdit}
			>
				Modifier
			</Button>
		</div>
	);
};

export default DetailsUserCard;
