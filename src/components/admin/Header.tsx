import { Dropdown } from 'antd';
import { useRouter } from 'next/router';
import React from 'react';
import { FaUserAlt } from 'react-icons/fa';
import { FiAlignLeft } from 'react-icons/fi';
import { useSession } from 'next-auth/react';

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
	const { data: session } = useSession();
	const items = [
		{
			label: 'Compte',
			key: '/account',
		},
		{
			label: 'Deconnexion',
			key: '/deconnect',
			onClick: (e: any) => router.replace('/auth/login'),
		},
		{
			label: darkMode ? 'Mode Claire' : 'Mode sombre',
			key: '/theme',
			onClick: (e: any) => setDarkMode((prev) => !prev),
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
								<img
									src={session.user?.image!}
									className='object-cover rounded-full w-full h-full'
								/>
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
