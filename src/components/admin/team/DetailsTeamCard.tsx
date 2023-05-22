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
		<div className='bg-white  duration-1000 text-black rounded-xl p-6'>
			<h1 className='text-2xl md:text-4xl font-bold'>Détails utilisateur</h1>
			<div className='my-4 flex items-center gap-2'>
				<div className='w-12 y-12 bg-black/10 hover:bg-black/20 duration-1000 p-4 rounded'>
					<FaAngular />
				</div>
				<div>
					<label className='font-light text-sm'>Designation</label>
					<p className='font-semibold'>{team?.title}</p>
				</div>
			</div>
			<div className='my-4 flex items-center gap-2'>
				<div className='w-12 y-12 bg-black/10 hover:bg-black/20 duration-1000 p-4 rounded'>
					<FaGlobeAfrica />
				</div>
				<div>
					<label className='font-light text-sm'>Ville</label>
					<p className='font-semibold'>{team?.town}</p>
				</div>
			</div>
			<div className='my-4 flex items-center gap-2'>
				<div className='w-12 y-12 bg-black/10 hover:bg-black/20 duration-1000 p-4 rounded'>
					<FaAt />
				</div>
				<div>
					<label className='font-light text-sm'>Sigle</label>
					<p className='font-semibold'>{team?.sigle}</p>
				</div>
			</div>
			<Button size='large' className='w-full' onClick={showEdit}>
				Modifier
			</Button>
		</div>
	);
};

export default DetailsTeamCard;
