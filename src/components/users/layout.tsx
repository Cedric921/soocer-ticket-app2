import React from 'react';
import Header from './Header';
import Footer from './Footer';

interface ILayout {
	children: React.ReactNode;
}

const Layout = ({ children }: ILayout) => {
	return (
		<div className='min-h-screen h-auto relative bg-primary-600'>
			<Header />
			{children}
			<Footer />
		</div>
	);
};

export default Layout;
