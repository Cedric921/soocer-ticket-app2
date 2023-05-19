import { Button, ConfigProvider, Divider, Input } from 'antd';
import fr from 'antd/locale/fr_FR';
import Link from 'next/link';
import React from 'react';

const Login = () => {
	const [userInput, setUserInput] = React.useState({
		email: '',
		password: '',
	});

	const handleChangeUserInput = (e: React.ChangeEvent<HTMLInputElement>) => {
		setUserInput((prev) => ({ ...prev, [e.target.name]: e.target.value }));
	};
	const handleLogin = (e: React.FormEvent) => {
		e.preventDefault();
		console.log(userInput);
	};
	return (
		<ConfigProvider
			theme={{
				token: {
					colorPrimary: '#09899a',
					fontFamily: '',
					colorText: '#494949',
				},
			}}
			locale={fr}
		>
			<div
				className={`w-full h-screen flex justify-center items-center bg-[url('/images/champios.webp')] bg-blue-300 relative text-white/70`}
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
							size='large'
							type='primary'
							className='my-3 bg-primary-800 text-white font-medium flex justify-center items-center gap-2 border w-full py-[10px] rounded-lg'
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
						className='w-full border-primary-600 bg-white/10 text-white'
						size='large'
					>
						Se connecter avec Google
					</Button>
					<p className='text-sm text-center text-white pb-2 my-6'>
						vous n&apos;avez pas encore un compte{' '}
						<Link
							href='/auth/signup'
							className='text-primary-800 hover:text-primary-700'
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
