import Image from 'next/image';
import React from 'react';

const Testimonials = () => {
	return (
		<div className='bg-white  relative'>
			{/* <div className='absolute  md:right-0 md:top-5 bottom-5 w-full md:w-3/4 h-1/2 md:h-full bg-primary-600/20'></div> */}
			<div className='container  pb-96 z-30 mx-auto flex flex-wrap items-center py-24 md:p-24'>
				<div className='w-full md:translate-x-24 z-30 md:w-1/3 flex items-center justify-center'>
					<div className='rounded-3xl w-96 h-96 bg-white' data-aos='zoom-out'>
						<Image
							width={500}
							height={500}
							src='/images/wcup.webp'
							alt='worldcup'
							className='object-cover w-full h-full z-30 rounded-3xl shadow-lg'
						/>
					</div>
				</div>
				<div
					data-aos='zoom-out'
					data-aos-anchor='#example-anchor'
					data-aos-offset='500'
					data-aos-duration='500'
					className='absolute right-0 md:top-0 bottom-0 md:bottom-0  w-full h-full md:w-2/3 p-2 flex justify-center items-end md:items-center bg-primary-200/50'
				>
					<div className='w-full md:w-2/3 px-4'>
						<div>about</div>
						<h2 className='text-5xl font-bold py-2'>
							Le football c&apos;est ouf.
						</h2>
						<p className='text-gray-600'>
							Iure et reiciendis hic doloremque quos perspiciatis iste quod quis
							ratione, nostrum praesentium perferendis tempore iusto vero error
							nesciunt fugiat eum animi.
						</p>
						<button className='bg-primary-600/40 hover:bg-primary-600 duration-500 cursor-pointer hover:text-white text-primary-800 font-bold my-2 rounded-full p-2 px-4'>
							Explorer
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Testimonials;
