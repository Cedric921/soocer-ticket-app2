import React from 'react';
import { FaPlay } from 'react-icons/fa';

const Hero = () => {
	return (
		<div className=' container mx-auto w-full h-screen p-6 md:p-12 pt-24'>
			<div
				data-aos='zoom-in'
				className='relative  h-full mb-12 overflow-hidden shadow-2xl rounded-3xl'
			>
				<div className='absolute flex flex-col justify-center md:justify-center items-center  top-0 left-0 right-0 bottom-0 z-30 bg-white/20 text-white p-12'>
					{/* <span className='bg-primary-600 p-1 px-6 rounded-full '>Match</span> */}

					<h1 className='text-5xl md:text-8xl my-2 font-extrabold text-transparent bg-clip-text bg-white from-primary-400 via-pink-600 to-pink-600'>
						Les meilleurs  moments du <br />  football
					</h1>

				</div>


			</div>
		</div>
	);
};

export default Hero;
