import { logout } from '@/app/auth/auth.slice';
import { AppDispatch, RootState } from '@/app/store';
import Link from 'next/link';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FiLogOut } from 'react-icons/fi';

const Header = () => {
	const { user } = useSelector((state: RootState) => state.auth);
	const dispatch = useDispatch<AppDispatch>();
	return (
		<header className='fixed z-50 top-0 left-0 right-0 bg-primary-700/30 backdrop-blur text-white p-2'>
			<nav className='container mx-auto flex justify-between items-center'>
				<Link
					href={'/'}
					className='font-extrabold text-transparent text-3xl bg-clip-text bg-white from-pink-400 to-white'
				>
					Vente Billets
				</Link>
				{!user ? (
					<Link href={'/auth/login'}>login</Link>
				) : user.role === 'ADMIN' ? (
					<Link href={'/admin'}>Tableau de bord</Link>
				) : (
					<div className='flex items-center'>
						{user?.names}
						<FiLogOut
							className='text-red-500 mx-2 cursor-pointer'
							onClick={() => dispatch(logout())}
						/>
					</div>
				)}
			</nav>
		</header>
	);
};

export default Header;
