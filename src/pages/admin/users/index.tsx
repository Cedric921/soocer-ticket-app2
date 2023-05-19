import PageHeader from '@/components/global/PageHeader';
import { Button, Input } from 'antd';
import React from 'react';

const Index = () => {
	const [showAdd, setShowAdd] = React.useState<boolean>(false);

	const handleShowUser = () => {
		setShowAdd((prev) => !prev);
	};
	const handleCreateUser = () => {
		setShowAdd((prev) => !prev);
	};
	return (
		<div className='flex flex-wrap-reverse '>
			<div className='w-full md:w-2/3'>
				<PageHeader
					title='Utilisateurs'
					sub='tous les administrateurs de la plateforme'
					showCreate={!showAdd}
					handleClick={handleShowUser}
				/>
			</div>
			<div className='w-full md:w-1/3 p-4 duration-1000'>
				{showAdd ? (
					<div className='bg-white  duration-1000 text-black rounded-xl p-6'>
						<h1 className='text-5xl md:text-4xl font-bold'>
							Ajouter un utilisateur
						</h1>
						<form className='text-sm my-4 text-black/80'>
							<div className='flex flex-col py-2'>
								<label htmlFor='title' className='text-sm text-black/80'>
									Designation
								</label>
								<Input
									className='bg-white/80 text-black/80 border-black/10'
									type='text'
									name='title'
									id='title'
									size='large'
									// value={userInput.email}
									// onChange={handleChangeUserInput}
								/>
							</div>
							<div className='flex flex-col py-2'>
								<label htmlFor='description' className='text-sm text-black/80'>
									Description
								</label>
								<Input
									className='bg-white/80 text-black/80 border-black/10'
									type='text'
									name='title'
									id='title'
									size='large'
									// value={userInput.email}
									// onChange={handleChangeUserInput}
								/>
							</div>
						</form>
						<Button
							className='text-black/80 w-full border-black/50'
							size='large'
							onClick={handleCreateUser}
						>
							Enregistrer
						</Button>
					</div>
				) : (
					<div className='bg-white  duration-1000 text-black rounded-xl p-6'>
						<h1 className='text-2xl md:text-4xl font-bold'>
							Details utilisateur
						</h1>
					</div>
				)}
			</div>
		</div>
	);
};

export default Index;
