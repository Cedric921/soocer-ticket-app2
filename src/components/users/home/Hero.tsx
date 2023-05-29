import React from 'react';
import { FaPlay } from 'react-icons/fa';

const Hero = () => {
	return (
		<div className=' container mx-auto w-full h-screen p-6 md:p-12 pt-24'>
			<div className='relative  h-full mb-12 overflow-hidden shadow-2xl rounded-3xl'>
				<div className='absolute flex flex-col justify-center md:justify-start items-start  top-0 left-0 right-0 bottom-0 z-30 bg-black/60 text-white p-12'>
					<span className='bg-primary-600 p-1 px-6 rounded-full '>Match</span>
					<h1 className='text-5xl md:text-8xl my-2 font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-primary-400 via-pink-600 to-pink-600'>
						Les meilleurs <br /> moments du <br /> football
					</h1>
					<p className='text-xl'>c&apos;est toujours dans le stade</p>
					{/* <p className='bg-white text-black p-2 px-4 rounded-full my-2 '>
						Dixit : Cedric karungu
					</p> */}
				</div>
				<video
					autoPlay
					loop
					muted
					className='absolute z-10 top-0  w-auto min-w-full min-h-full max-w-none'
				>
					<source src='videos/uefa.mp4' type='video/mp4' />
					Your browser does not support the video tag.
				</video>
				<div className='absolute bg-white/30 h-24 w-24 animate-pulse z-30 bottom-2 right-2  p-4 rounded-full'></div>
				<div className='absolute bg-white h-16 w-16 flex items-center justify-center z-30  bottom-6 right-6 p-4 rounded-full'>
					<FaPlay className='text-2xl text-primary-700' />
				</div>
			</div>
		</div>
	);
};

export default Hero;
