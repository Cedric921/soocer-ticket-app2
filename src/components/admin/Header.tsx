import { Dropdown } from 'antd';
import { useRouter } from 'next/router';
import React from 'react';
import { FaUserAlt } from 'react-icons/fa';

const Header = () => {
	const router = useRouter();
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
	];
	return (
		<header className='w-full h-16 bg-black text-white p-4n flex justify-between'>
			<div></div>
			<div className='p-2'>
				<>
					<Dropdown
						trigger={['hover']}
						menu={{
							items,
						}}
					>
						<div className='w-12 h-12 duration-500 bg-white/20 hover:bg-white/30 flex justify-center items-center rounded-full cursor-pointer'>
							<FaUserAlt />
						</div>
					</Dropdown>
				</>
			</div>
		</header>
	);
};

export default Header;
