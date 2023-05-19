import { ConfigProvider } from 'antd';
import React from 'react';
import fr from 'antd/locale/fr_FR';
import Asidebar from './Asidebar';

interface ILayout {
	children: React.ReactNode;
}

const layout = ({ children }: ILayout) => {
	return (
		<ConfigProvider
			theme={{
				token: {
					colorPrimary: '#09899a',
					fontFamily: '',
					colorText: '#494949',
				},
			}}
			locale={fr}
		>
			<div className='w-full h-screen max-h-screen flex '>
				<aside className='w-1/6 max-w-[300px] bg-slate-50 shadow-md p-2'>
					<Asidebar />
				</aside>
				<main className='w-full'>
					<header className='w-full h-20 bg-primary-600 text-white p-4'></header>
					<div className='w-full p-4 h-[calc(100vh-5rem)] overflow-x-hidden overflow-y-auto'>
						<div className='w-full min-h-full bg-white shadow-[0px_20px_20px_10px_#00000024] rounded-xl p-4'>
							{children}
						</div>
					</div>
				</main>
			</div>
		</ConfigProvider>
	);
};

export default layout;
