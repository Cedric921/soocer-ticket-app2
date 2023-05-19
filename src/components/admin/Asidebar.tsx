import { checkActiveRoute } from '@/utils/checkers';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';
import { AiFillDashboard, AiOutlineTeam } from 'react-icons/ai';
import { FaPlayCircle, FaPlaystation, FaUserFriends } from 'react-icons/fa';

const links = [
	{
		label: 'Tableau de bord',
		icon: <AiFillDashboard />,
		link: '/admin',
	},
	{
		label: 'Competitions',
		icon: <FaPlaystation />,
		link: '/admin/compet',
	},
	{
		label: 'Rencontres',
		icon: <FaPlayCircle />,
		link: '/admin/games',
	},
	{
		label: 'Equipes',
		icon: <AiOutlineTeam />,
		link: '/admin/teams',
	},
	{
		label: 'Utilisateurs',
		icon: <FaUserFriends />,
		link: '/admin/users',
	},
];
const Asidebar = ({
	onMobile,
	showAside,
}: {
	onMobile: boolean;
	showAside: boolean;
}) => {
	const router = useRouter();

	return (
		<>
			{showAside ? (
				<>
					<div className='p-4 px-2 flex flex-col'>
						<Link href={'/'} className='text-3xl font-bold text-primary-700'>
							Goal Go
						</Link>
						<span>gooooli</span>
					</div>
					<div className='my-4'>
						{links.map((link, i) => (
							<Link key={i} href={link.link}>
								<div
									className={`flex gap-2 p-2 items-center rounded duration-1000 text-gray-700 hover:text-white hover:bg-black/60 ${
										checkActiveRoute(router.pathname, link.link)
											? `text-white bg-black/80`
											: null
									}`}
								>
									<span className='text-xl '>{link.icon}</span>
									{link.label}
								</div>
							</Link>
						))}
					</div>
				</>
			) : null}
		</>
	);
};

export default Asidebar;
