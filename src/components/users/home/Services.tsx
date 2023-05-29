import React from 'react';
import { FaChair, FaPlaystation } from 'react-icons/fa';

const Services = () => {
	return (
		<div className='w-full bg-white'>
			<div className='container mx-auto flex flex-wrap justify-between py-12 '>
				<div className='w-full md:w-1/3 p-8'>
					<div className='w-full h-full'>
						<div className='bg-primary-700/20 p-4 h-16 w-16 rounded-full flex items-center justify-center'>
							<FaPlaystation className='text-2xl text-primary-700' />
						</div>
						<h4 className='font-semibold my-4'>Programes des rencontres</h4>
						<p className='font-light text-sm text-gray-500'>
							Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolor
							molestias,{' '}
						</p>
					</div>
				</div>
				<div className='w-full md:w-1/3 p-8'>
					<div className='w-full h-full'>
						<div className='bg-pink-700/20 p-4 h-16 w-16 rounded-full flex items-center justify-center'>
							<FaChair className='text-2xl text-pink-700' />
						</div>
						<h4 className='font-semibold my-4'>Reservation des places</h4>
						<p className='font-light text-sm text-gray-500'>
							Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolor
							molestias,{' '}
						</p>
					</div>
				</div>
				<div className='w-full md:w-1/3 p-8'>
					<div className='w-full h-full'>
						<div className='bg-primary-700/20 p-4 h-16 w-16 rounded-full flex items-center justify-center'>
							<FaPlaystation className='text-2xl text-primary-700' />
						</div>
						<h4 className='font-semibold my-4'>Programes des rencontres</h4>
						<p className='font-light text-sm text-gray-500'>
							Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolor
							molestias,{' '}
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Services;
