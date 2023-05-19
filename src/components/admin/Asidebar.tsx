import Link from 'next/link';
import React from 'react';
import { AiFillDashboard, AiOutlineTeam } from 'react-icons/ai';
import { FaPlayCircle, FaPlaystation } from 'react-icons/fa';

const links = [
	{
		label: 'Tableau de bord',
		icon: <AiFillDashboard />,
		link: '/admin',
	},
	{
		label: 'Competitions',
		icon: <FaPlaystation />,
		link: '/compet',
	},
	{
		label: 'Rencontres',
		icon: <FaPlayCircle />,
		link: '/games',
	},
	{
		label: 'Equipes',
		icon: <AiOutlineTeam />,
		link: '/teams',
	},
	{
		label: 'Utilisateurs',
		icon: <AiFillDashboard />,
		link: '/users',
	},
];
const Asidebar = () => {
	return (
		<>
			<div className='p-4 px-2 flex flex-col'>
				<Link href={'/'} className='text-3xl font-bold text-primary-700'>
					Goal go
				</Link>
				<span>gooooli</span>
			</div>
			<div className='my-4'>
				{links.map((link, i) => (
					<Link key={i} href={link.link}>
						<div className='flex gap-2 p-2 items-center rounded duration-1000 text-gray-700 hover:text-white hover:bg-primary-600'>
							<span className='text-xl '>{link.icon}</span>
							{link.label}
						</div>
					</Link>
				))}
			</div>
		</>
	);
};

export default Asidebar;
