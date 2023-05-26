import React from 'react';
import { FiLoader } from 'react-icons/fi';

const LoadingToast = ({ isShow }: { isShow: boolean }) => {
	return isShow ? (
		<div
			className='
		bg-white/25 dark:bg-white/40 text-white font-bold backdrop-blur rounded-md p-4 
		flex items-center gap-2 absolute bottom-5 right-5 z-[99] hover:shadow-2xl cursor-wait'
		>
			<FiLoader className='text-xl animate-spin' />
			<p>Chargement</p>
		</div>
	) : null;
};

export default LoadingToast;
