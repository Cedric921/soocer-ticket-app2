import { Dropdown } from 'antd';
import { useRouter } from 'next/router';
import React from 'react';
import { FaUserAlt } from 'react-icons/fa';
import { FiAlignLeft } from 'react-icons/fi';
import { useSession } from 'next-auth/react';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '@/app/store';
import { logout } from '@/app/auth/auth.slice';
import Image from 'next/image';

const Header = ({
	setShowAside,
	darkMode,
	setDarkMode,
}: {
	setShowAside: React.Dispatch<React.SetStateAction<boolean>>;
	setDarkMode: React.Dispatch<React.SetStateAction<boolean>>;
	darkMode: boolean;
}) => {
	const router = useRouter();
	const { user } = useSelector((state: RootState) => state.auth);
	const dispatch = useDispatch<AppDispatch>();
	const { data: session } = useSession();
	const items = [
		// {
		// 	label: 'Compte',
		// 	key: '/account',
		// },
		{
			label: darkMode ? 'Mode Claire' : 'Mode sombre',
			key: '/theme',
			onClick: (e: any) => {
				setDarkMode((prev) => !prev);
				localStorage.setItem('theme', JSON.stringify(!darkMode));
			},
		},
		{
			label: 'Accueil',
			key: '/home',
			onClick: (e: any) => {
				router.replace('/');
			},
		},
		{
			label: 'Deconnexion',
			key: '/deconnect',
			onClick: (e: any) => {
				dispatch(logout());
				router.replace('/');
			},
		},
	];
	return (
		<header className='w-full h-16 bg-black/70 dark:bg-black text-white p-4n flex justify-between'>
			<div className='ml-4'>
				<button
					className='text-2xl py-3'
					onClick={() => setShowAside((prev) => !prev)}
				>
					<FiAlignLeft />
				</button>
			</div>
			<div className='p-2'>
				<>
					<Dropdown
						trigger={['hover']}
						menu={{
							items,
						}}
					>
						<div className='w-12 h-12 duration-500 bg-white/20 hover:bg-white/30 flex justify-center items-center rounded-full cursor-pointer'>
							{session ? (
								<Image
									width={200}
									height={200}
									src={session.user?.image!}
									alt={`image de ${user?.names}`}
									className='object-cover rounded-full w-full h-full'
								/>
							) : user ? (
								<p className='text-xl font-semibold'>
									{user?.names[0].toUpperCase()}
								</p>
							) : (
								<FaUserAlt />
							)}
						</div>
					</Dropdown>
				</>
			</div>
		</header>
	);
};

export default Header;
