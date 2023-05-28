import { RootState } from '@/app/store';
import Link from 'next/link';
import React from 'react';
import { useSelector } from 'react-redux';

const Header = () => {
	const { user } = useSelector((state: RootState) => state.auth);
	return (
		<header className='fixed z-50 top-0 left-0 right-0 bg-primary-700/30 backdrop-blur text-white p-2'>
			<nav className='container mx-auto flex justify-between items-center'>
				<Link
					href={'/'}
					className='font-extrabold text-transparent text-3xl bg-clip-text bg-gradient-to-r from-pink-400 to-white'
				>
					Soccer ticket
				</Link>
				{!user ? (
					<Link href={'/auth/login'}>login</Link>
				) : user.role === 'ADMIN' ? (
					<Link href={'/admin'}>Tableau de bord</Link>
				) : null}
			</nav>
		</header>
	);
};

export default Header;
