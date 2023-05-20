import { Button, Input } from 'antd';
import React from 'react';

const CreateUserForm = ({
	handleShow,
	isEdit,
	user,
}: {
	handleShow: () => void;
	isEdit?: boolean;
	user?: any;
}) => {
	const [userInput, setUserInput] = React.useState({
		names: '',
		email: '',
		tel: '',
	});

	const handleChangeUserInput = (e: React.ChangeEvent<HTMLInputElement>) => {
		setUserInput((prev) => ({ ...prev, [e.target.name]: e.target.value }));
	};
	const handleCreateUser = () => {
		handleShow();
	};

	React.useEffect(() => {
		if (isEdit) {
			setUserInput(user);
		}
	}, []);
	return (
		<div className='bg-white  duration-1000 text-black rounded-xl p-6'>
			<h1 className='text-5xl md:text-4xl font-bold'>
				{!isEdit ? 'Ajouter un utilisateur' : 'Modifier informations'}
			</h1>
			<form className='text-sm my-4 text-black/80'>
				<div className='flex flex-col py-2'>
					<label htmlFor='title' className='text-sm text-black/80'>
						Noms
					</label>
					<Input
						className='bg-white/80 text-black/80 border-black/10'
						type='text'
						name='names'
						id='names'
						size='large'
						value={userInput?.names}
						onChange={handleChangeUserInput}
					/>
				</div>
				<div className='flex flex-col py-2'>
					<label htmlFor='email' className='text-sm text-black/80'>
						Email
					</label>
					<Input
						className='bg-white/80 text-black/80 border-black/10'
						type='email'
						name='email'
						id='email'
						size='large'
						value={userInput?.email}
						onChange={handleChangeUserInput}
					/>
				</div>
				<div className='flex flex-col py-2'>
					<label htmlFor='email' className='text-sm text-black/80'>
						Numero de telephone
					</label>
					<Input
						className='bg-white/80 text-black/80 border-black/10'
						type='tel'
						name='tel'
						id='tel'
						size='large'
						value={userInput?.tel}
						onChange={handleChangeUserInput}
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
	);
};

export default CreateUserForm;
