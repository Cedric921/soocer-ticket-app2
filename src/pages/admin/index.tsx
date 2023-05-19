import React from 'react';
import { FaUserAlt, FaUserFriends } from 'react-icons/fa';
import { Button } from 'antd';
import Card from '@/components/admin/dashboard/Card';
import GamesList from '@/components/admin/dashboard/GamesList';

const Dashboard = () => {
	return (
		<>
			<div className='cards flex flex-wrap'>
				<div className='w-full sm:w-1/2 lg:w-1/4 h-52 p-4'>
					<Card number={12} title='utilisateur' icon={<FaUserAlt />} />
				</div>
				<div className='w-full sm:w-1/2 lg:w-1/4 h-52 p-4'>
					<Card number={23} title='equipes' icon={<FaUserFriends />} />
				</div>
				<div className='w-full sm:w-1/2 lg:w-1/4 h-52 p-4'>
					<Card number={9} title='competitions' icon={<FaUserAlt />} />
				</div>
				<div className='w-full sm:w-1/2 lg:w-1/4 h-52 p-4'>
					<Card number={21} title='rencontres' icon={<FaUserAlt />} />
				</div>
			</div>
			<div className='flex flex-wrap-reverse p-4'>
				<div className='w-full lg:w-2/3 py-2 lg:pr-2'>
					<h2 className='text-xl font-semibold'>Les derniers matchs </h2>
					<div className='w-full'>
						{/* list */}
						<GamesList />
					</div>
				</div>
				<div className='w-full lg:w-1/3 py-2 lg:pl-2'>
					<div className='bg-black/80 hover:bg-black duration-1000 text-white rounded-xl p-6'>
						<h1 className='text-5xl md:text-4xl font-bold'>
							Le moyen le plus facile de suivre les reservations des rencontres
						</h1>
						<p className='text-sm my-4 text-white/80'>
							Enregistrer rapidement une nouvelle rencontre et permettez au
							grand public de faire des reservations
						</p>
						<Button className='text-white'>Nouvelle rencontre</Button>
					</div>
				</div>
			</div>
		</>
	);
};

export default Dashboard;
