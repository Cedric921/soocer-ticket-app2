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
		<div className='w-full flex justify-between items-center p-4'>
			<div>
				<h3 className='text-2xl lg:text-3xl font-bold'>{title}</h3>
				<p>{sub}</p>
			</div>
			{showCreate ? (
				<Button
					className='border-black text-gray-700  px-4'
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
