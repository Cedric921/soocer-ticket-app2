import React from 'react';

const Header = () => {
	return (
		<header className='fixed z-50 top-0 left-0 right-0 bg-primary-700/30 backdrop-blur text-white p-2'>
			<nav className='container mx-auto flex justify-between items-center'>
				<h1 className='font-extrabold text-transparent text-3xl bg-clip-text bg-gradient-to-r from-pink-400 to-white'>
					Soccer ticket
				</h1>
				<div>login</div>
			</nav>
		</header>
	);
};

export default Header;
