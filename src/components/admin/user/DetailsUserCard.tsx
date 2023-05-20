import { Button } from 'antd';
import React from 'react';
import { FaBook, FaMailBulk, FaPhone } from 'react-icons/fa';

const DetailsUserCard = ({
	handleShowEdit,
	user,
}: {
	handleShowEdit: () => void;
	user: {
		id: string;
		names: string;
		email: string;
		tel: string;
	};
}) => {
	const showEdit = () => {
		handleShowEdit();
	};
	return (
		<div className='bg-white  duration-1000 text-black rounded-xl p-6'>
			<h1 className='text-2xl md:text-4xl font-bold'>Détails utilisateur</h1>
			<div className='my-4 flex items-center gap-2'>
				<div className='w-12 y-12 bg-black/10 hover:bg-black/20 duration-1000 p-4 rounded'>
					<FaBook />
				</div>
				<div>
					<label className='font-light text-sm'>Noms</label>
					<p className='font-semibold'>{user?.names}</p>
				</div>
			</div>
			<div className='my-4 flex items-center gap-2'>
				<div className='w-12 y-12 bg-black/10 hover:bg-black/20 duration-1000 p-4 rounded'>
					<FaMailBulk />
				</div>
				<div>
					<label className='font-light text-sm'>Email</label>
					<p className='font-semibold'>{user?.email}</p>
				</div>
			</div>
			<div className='my-4 flex items-center gap-2'>
				<div className='w-12 y-12 bg-black/10 hover:bg-black/20 duration-1000 p-4 rounded'>
					<FaPhone />
				</div>
				<div>
					<label className='font-light text-sm'>Telephone</label>
					<p className='font-semibold'>+{user?.tel}</p>
				</div>
			</div>
			<Button size='large' className='w-full' onClick={showEdit}>
				Modifier
			</Button>
		</div>
	);
};

export default DetailsUserCard;
