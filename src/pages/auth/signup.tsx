import { signup } from '@/app/auth/auth.service';
import { AppDispatch, RootState } from '@/app/store';
import { Button, ConfigProvider, Divider, Input } from 'antd';
import fr from 'antd/locale/fr_FR';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

const Signup = () => {
	const router = useRouter();
	const dispatch = useDispatch<AppDispatch>();
	const { user, status } = useSelector((state: RootState) => state.auth);
	const [userInput, setUserInput] = React.useState({
		email: '',
		password: '',
		confirm: '',
		names: '',
	});
	const [error, setError] = React.useState('');

	const handleChangeUserInput = (e: React.ChangeEvent<HTMLInputElement>) => {
		setUserInput((prev) => ({ ...prev, [e.target.name]: e.target.value }));
		setError('');
	};
	const handleSignup = (e: React.FormEvent) => {
		e.preventDefault();
		if (/^w+([.-]?w+)*@w+([.-]?w+)*(.w{2,3})+$/.test(userInput.email)) {
			setError('email invalide');
			return;
		}
		if (userInput.password !== userInput.confirm) {
			setError('les mot de passe doivent correspondre');
			return;
		}

		dispatch(
			signup({
				email: userInput.email,
				password: userInput.password,
				names: userInput.names,
			})
		);
	};

	React.useEffect(() => {
		if (user) {
			switch (user.role) {
				case 'ADMIN':
					router.replace('/admin');
					break;
				case 'USER':
					router.replace('/');
					break;
				default:
					router.replace('/');
			}
		}
	}, [user, router]);

	return (
		<ConfigProvider
			theme={{
				token: {
					colorPrimary: '#000',
					fontFamily: '',
					colorText: '#494949',
				},
			}}
			locale={fr}
		>
			<div
				className={` fixed top-0 bottom-0 w-full z-50 h-screen flex justify-center items-center bg-[url('/images/wcup.webp')] bg-black/80  text-white/70`}
			>
				<div className='w-1/2 md:w-2/5 2xl:w-1/4 p-4 md:p-8 bg-white/30 backdrop-blur-md rounded-md overflow-auto'>
					<Link
						href={'/'}
						className='absolute top-8 right-8 bg-white/30 hover:bg-white/50 hover:text-black duration-500 cursor-pointer p-1 px-2 rounded-md'
					>
						Revenir a l&apos;accueil
					</Link>
					<span className='text-white/50'>Goal go</span>
					<h2 className='text-3xl text-white/70 font-bold'>
						Creation de compte
					</h2>
					<p className='text-xs text-white/50'>
						Bienvenue sur notre app, les meilleurs vous attendent
					</p>
					<form action='' className='pt-8' onSubmit={handleSignup}>
						<div className='flex flex-col py-2'>
							<label htmlFor='names' className='text-sm text-slate-300'>
								Noms
							</label>
							<Input
								className='bg-slate-300'
								type='texte'
								name='names'
								id='names'
								size='large'
								placeholder='albert Einstein'
								value={userInput.names}
								onChange={handleChangeUserInput}
							/>
						</div>
						<div className='flex flex-col py-2'>
							<label htmlFor='email' className='text-sm text-slate-300'>
								email
							</label>
							<Input
								className='bg-slate-300'
								type='email'
								name='email'
								id='email'
								size='large'
								placeholder='albert@mail.cm'
								value={userInput.email}
								onChange={handleChangeUserInput}
							/>
						</div>
						<div className='flex flex-col py-2'>
							<label htmlFor='password' className='text-sm text-slate-300'>
								Mot de passe
							</label>
							<Input
								className='bg-slate-300'
								type='password'
								name='password'
								id='password'
								size='large'
								placeholder='*** *** ***'
								value={userInput.password}
								onChange={handleChangeUserInput}
							/>
						</div>
						<div className='flex flex-col py-2'>
							<label htmlFor='confirm' className='text-sm text-slate-300'>
								Confirmer le mot de passe
							</label>
							<Input
								className='bg-slate-300'
								type='password'
								name='confirm'
								id='confirm'
								size='large'
								value={userInput.confirm}
								placeholder='*** *** ***'
								onChange={handleChangeUserInput}
							/>
						</div>
						<Button
							// className='bg-primary-700 w-full mt-3 text-white'
							htmlType='submit'
							size='large'
							type='primary'
							className='my-3 bg-black/80 text-white font-medium flex justify-center items-center gap-2 border w-full py-[10px] rounded-lg'
						>
							Créer le compte
						</Button>
					</form>
					<p className='text-sm text-end text-white pb-2 underline'>
						Mot de passe oublié
					</p>

					<p className='text-red-300 text-xs'>{error ?? null}</p>

					<Divider className=''>
						<span className='text-white/40'>ou</span>
					</Divider>

					{/* <Button
						className='w-full border-black/60 bg-white/10 text-white'
						size='large'
					>
						Se connecter avec Google
					</Button> */}
					<p className='text-sm text-center text-white pb-2 my-6'>
						Avez-vous déjà un compte ?{' '}
						<Link
							href={'/auth/login'}
							className='text-black/80 hover:text-black-70'
						>
							connecter vous
						</Link>
					</p>
				</div>
			</div>
		</ConfigProvider>
	);
};

export default Signup;
