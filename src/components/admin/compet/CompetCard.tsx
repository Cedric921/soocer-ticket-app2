import { Button } from 'antd';
import Link from 'next/link';
import React from 'react';

const CompetCard = ({ compet }: { compet: ICompetition }) => {
	return (
		<div className='border-2 dark:border-black bg-white dark:bg-black/70 hover:border-black dark:hover:border-white  dark:hover:bg-black duration-1000 p-4 rounded-lg'>
			<h2 className='text-2xl font-semibold dark:text-white/90'>
				{compet.title}
			</h2>
			<p className='text-justify text-black/80 dark:text-white/40 text-sm py-4'>
				{compet.description}
			</p>
			<Link href={`/admin/compet/${compet.id}`}>
				<Button
					size='large'
					className='w-full dark:bg-white/10 dark:border-white/20 dark:border-2 dark:hover:border-white/80 dark:hover:text-white/80 dark:text-white'
				>
					voir plus
				</Button>
			</Link>
		</div>
	);
};

export default CompetCard;
