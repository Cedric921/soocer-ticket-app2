import { Button } from 'antd';
import Link from 'next/link';
import React from 'react';

interface ICompetiton {
	compet: {
		title: string;
		id: string;
		description: string;
	};
}

const CompetCard = ({ compet }: ICompetiton) => {
	return (
		<div className='border dark:border-black bg-white dark:bg-black/70 hover:border-black hover:bg-black/10 duration-1000 p-4 rounded-lg'>
			<h2 className='text-2xl font-semibold dark:text-white/90'>
				{compet.title}
			</h2>
			<p className='text-justify text-black/80 dark:text-white/60 py-4'>
				{compet.description}
			</p>
			<Link href={`/admin/compet/${compet.id}`}>
				<Button
					size='large'
					className='w-full dark:bg-white/10 dark:border-white/20'
				>
					voir plus
				</Button>
			</Link>
		</div>
	);
};

export default CompetCard;
