import { Button } from 'antd';
import React from 'react';
import {
	FaAngular,
	FaAt,
	FaBook,
	FaGlobeAfrica,
	FaMailBulk,
	FaPhone,
} from 'react-icons/fa';

const DetailsTeamCard = ({
	handleShowEdit,
	team,
}: {
	handleShowEdit: () => void;
	team: {
		id: string;
		title: string;
		town: string;
		sigle: string;
	};
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
					<FaAngular className='dark:text-white' />
				</div>
				<div>
					<label className='font-light text-sm dark:text-white/60'>
						Designation
					</label>
					<p className='font-semibold dark:text-white/90'>{team?.title}</p>
				</div>
			</div>
			<div className='my-4 flex items-center gap-2'>
				<div className='w-12 y-12 bg-black/10 dark:bg-white/20 hover:bg-black/20 dark:hover:bg-white/40 duration-1000 p-4 rounded'>
					<FaGlobeAfrica className='dark:text-white' />
				</div>
				<div>
					<label className='font-light text-sm dark:text-white/60'>Ville</label>
					<p className='font-semibold dark:text-white/90'>{team?.town}</p>
				</div>
			</div>
			<div className='my-4 flex items-center gap-2'>
				<div className='w-12 y-12 bg-black/10 dark:bg-white/20 hover:bg-black/20 dark:hover:bg-white/40 duration-1000 p-4 rounded'>
					<FaAt className='dark:text-white' />
				</div>
				<div>
					<label className='font-light text-sm dark:text-white/60'>Sigle</label>
					<p className='font-semibold dark:text-white/90'>{team?.sigle}</p>
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

export default DetailsTeamCard;
