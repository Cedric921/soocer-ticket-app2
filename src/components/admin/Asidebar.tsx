import { checkActiveRoute } from '@/utils/checkers';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';
import { AiFillDashboard, AiOutlineTeam } from 'react-icons/ai';
import {
	FaMoon,
	FaPlayCircle,
	FaPlaystation,
	FaRegWindowClose,
	FaSun,
	FaUserFriends,
} from 'react-icons/fa';

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
	darkMode,
	setDarkMode,
	setShowAside,
}: {
	onMobile: boolean;
	showAside: boolean;
	setShowAside: React.Dispatch<React.SetStateAction<boolean>>;
	setDarkMode: React.Dispatch<React.SetStateAction<boolean>>;
	darkMode: boolean;
}) => {
	const router = useRouter();

	return (
		<>
			{showAside ? (
				<div className='relative h-full'>
					{onMobile && (
						<span
							className='absolute text-xl top-2 right-2'
							onClick={() => setShowAside(false)}
						>
							<FaRegWindowClose />
						</span>
					)}
					<div className='p-4 px-2 flex flex-col'>
						<h2 className='text-3xl font-bold text-primary-700'>
							Vente Billets Admin
						</h2>
						<span>coolceda</span>
					</div>
					<div className='my-4 '>
						{links.map((link, i) => (
							<Link key={i} href={link.link}>
								<div
									className={`flex gap-2 p-2 items-center rounded duration-1000 text-gray-700 dark:text-white/80 hover:text-white hover:bg-black/60 dark:hover:bg-white/20 ${checkActiveRoute(router.pathname, link.link)
										? ` bg-white border  dark:bg-black`
										: null
										}`}
								>
									<span className='text-xl '>{link.icon}</span>
									{link.label}
								</div>
							</Link>
						))}
					</div>
					<div
					// className='absolute bottom-2 bg-black/50 dark:bg-white/80  text-white dark:text-black/70  p-2 px-4 w-full rounded-md cursor-pointer'
					// onClick={() => {
					// 	setDarkMode(!darkMode);
					// 	localStorage.setItem('theme', JSON.stringify(!darkMode));
					// }}
					>
						{/* {darkMode ? (
							<div className='flex items-center gap-2 '>
								<FaSun /> Mode Claire
							</div>
						) : (
							<div className='flex items-center gap-2'>
								<FaMoon /> Mode Sombre
							</div>
						)} */}
					</div>
				</div>
			) : null}
		</>
	);
};

export default Asidebar;
