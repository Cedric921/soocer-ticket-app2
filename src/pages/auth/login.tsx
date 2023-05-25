import { Button, ConfigProvider, Divider, Input } from 'antd';
import fr from 'antd/locale/fr_FR';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';
import { useSession, signIn, signOut } from 'next-auth/react';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '@/app/auth/auth.service';
import { AppDispatch, RootState } from '@/app/store';

const Login = () => {
	const router = useRouter();
	const dispatch = useDispatch<AppDispatch>();
	const { user, status } = useSelector((state: RootState) => state.auth);
	const [userInput, setUserInput] = React.useState({
		email: '',
		password: '',
	});

	const handleChangeUserInput = (e: React.ChangeEvent<HTMLInputElement>) => {
		setUserInput((prev) => ({ ...prev, [e.target.name]: e.target.value }));
	};

	const handleGoogleLogin = async () => {
		await signIn('google');
	};

	const handleLogin = async (e: React.FormEvent) => {
		e.preventDefault();
		dispatch(login(userInput));
	};

	React.useEffect(() => {
		if (user) router.replace('/admin');
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
				className={`w-full h-screen flex justify-center items-center bg-[url('/images/champios.webp')] bg-black/80 relative text-white/70`}
			>
				<div className='w-full m-2 md:w-2/5 2xl:w-1/4 p-4 md:p-8 bg-white/30 backdrop-blur-md rounded-md'>
					<span className='text-white/50'>Goal go</span>
					<h2 className='text-3xl text-white/70 font-bold'>Connexion</h2>
					<p className='text-xs text-white/50'>
						Bienvenue encore sur notre app, le meilleur vous attend
					</p>
					<form action='' className='pt-8' onSubmit={handleLogin}>
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
								value={userInput.password}
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
							Connexion
						</Button>
					</form>
					<p className='text-sm text-end text-white pb-2 underline'>
						Mot de passe oublié
					</p>

					<Divider className=''>
						<span className='text-white/40'>ou</span>
					</Divider>

					<Button
						className='w-full border-black/60 bg-white/10 text-white'
						size='large'
						onClick={handleGoogleLogin}
					>
						Se connecter avec Google
					</Button>
					<p className='text-sm text-center text-white pb-2 my-6'>
						vous n&apos;avez pas encore un compte{' '}
						<Link
							href='/auth/signup'
							className='text-black/80 hover:text-black/70'
						>
							cliquer ici pour le créer
						</Link>
					</p>
				</div>
			</div>
		</ConfigProvider>
	);
};

export default Login;
