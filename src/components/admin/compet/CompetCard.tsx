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
		<div className='border bg-white hover:border-black hover:bg-black/10 duration-1000 p-4 rounded-lg'>
			<h2 className='text-2xl font-semibold'>{compet.title}</h2>
			<p className='text-justify text-black/80 py-4'>{compet.description}</p>
			<Link href={`/admin/compet/${compet.id}`}>
				<Button size='large' className='w-full'>
					voir plus
				</Button>
			</Link>
		</div>
	);
};

export default CompetCard;
