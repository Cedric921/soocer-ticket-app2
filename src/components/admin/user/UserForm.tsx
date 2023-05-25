import { Button, Input, Select } from 'antd';
import React from 'react';

const CreateUserForm = ({
	handleShow,
	isEdit,
	user,
}: {
	handleShow: () => void;
	isEdit?: boolean;
	user?: IUser;
}) => {
	const [userInput, setUserInput] = React.useState<
		| {
				names: string;
				email: string;
				role: string;
		  }
		| IUser
	>({
		names: '',
		email: '',
		role: '',
	});

	const handleChangeUserInput = (e: React.ChangeEvent<HTMLInputElement>) => {
		setUserInput((prev) => ({ ...prev, [e.target.name]: e.target.value }));
	};
	const handleCreateUser = () => {
		handleShow();
	};

	React.useEffect(() => {
		if (isEdit) {
			setUserInput(user!);
		}
	}, []);
	return (
		<div className='bg-white dark:bg-white/20 duration-1000 text-black rounded-xl p-6'>
			<h1 className='text-5xl md:text-4xl font-bold dark:text-white/70'>
				{!isEdit ? 'Ajouter un utilisateur' : 'Modifier informations'}
			</h1>
			<form className='text-sm my-4 mt-3 text-black/80'>
				<div className='flex flex-col py-2'>
					<label
						htmlFor='title'
						className='text-sm text-black/80  dark:text-white/70'
					>
						Noms
					</label>
					<Input
						className='bg-white/80 dark:bg-white/40 text-black/80 dark:text-white/70 border-black/10'
						type='text'
						name='names'
						id='names'
						size='large'
						value={userInput?.names}
						onChange={handleChangeUserInput}
					/>
				</div>
				<div className='flex flex-col py-2'>
					<label
						htmlFor='email'
						className='text-sm text-black/80  dark:text-white/70'
					>
						Email
					</label>
					<Input
						className='bg-white/80 dark:bg-white/40 text-black/80 dark:text-white/70 border-black/10'
						type='email'
						name='email'
						id='email'
						size='large'
						value={userInput?.email}
						onChange={handleChangeUserInput}
					/>
				</div>
				<div className='flex flex-col py-2'>
					<label
						htmlFor='email'
						className='text-sm text-black/80  dark:text-white/70'
					>
						Role
					</label>
					<Select
						className='bg-slate-100'
						id='role'
						size='large'
						placeholder='Selectionner une equipe'
						options={['ADMIN', 'USER'].map((team) => ({
							value: team,
							label: team,
						}))}
						filterOption={(input, option) =>
							(option?.label ?? '').toLowerCase().includes(input.toLowerCase())
						}
						optionFilterProp='children'
						onChange={(e) => setUserInput((prev) => ({ ...prev, role: e }))}
					/>
				</div>
			</form>
			<Button
				className='text-black/80 dark:text-white/70 w-full dark:bg-black/90  border-black/50'
				size='large'
				onClick={handleCreateUser}
			>
				Enregistrer
			</Button>
		</div>
	);
};

export default CreateUserForm;
