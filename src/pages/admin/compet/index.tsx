'use client';
import PageHeader from '@/components/global/PageHeader';
import React from 'react';

const index = () => {
	return (
		<div>
			<PageHeader title='Competitions' sub='' showCreate />
			<div className='flex'>
				<div className='w-full sm:w-1/3 md:w-1/4 p-4'>
					<div className='border'>Hello</div>
				</div>
			</div>
		</div>
	);
};

export default index;
