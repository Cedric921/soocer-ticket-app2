import React from 'react';
import { FiLoader } from 'react-icons/fi';

const LoadingToast = ({ isShow }: { isShow: boolean }) => {
	return isShow ? (
		<div className='bg-white/25 text-white font-bold backdrop-blur rounded-md p-4 flex items-center gap-2 absolute top-5 right-5'>
			<FiLoader className='text-xl animate-spin' />
			<p>Chargement</p>
		</div>
	) : null;
};

export default LoadingToast;
