import { Button } from 'antd';
import React from 'react';

const PageHeader = ({
	title,
	sub,
	showCreate,
	handleClick,
}: {
	title: string;
	sub: string;
	showCreate?: boolean;
	handleClick?: () => void;
}) => {
	return (
		<div className='w-full flex justify-between items-center p-2 px-4'>
			<div>
				<h3 className='text-2xl lg:text-3xl font-bold dark:text-white/90'>
					{title}
				</h3>
				<p className='dark:text-white/60'>{sub}</p>
			</div>
			{showCreate ? (
				<Button
					className='border-black dark:border-white/70 text-gray-700  dark:text-white/90 dark:bg-white/10 px-4'
					size='large'
					onClick={handleClick}
				>
					Ajouter
				</Button>
			) : null}
		</div>
	);
};

export default PageHeader;
