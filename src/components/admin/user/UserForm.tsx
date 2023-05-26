import { AppDispatch } from '@/app/store';
import { createUser, updateUser } from '@/app/users/users.service';
import { Button, Input, Select } from 'antd';
import React from 'react';
import { useDispatch } from 'react-redux';

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
	const dispatch = useDispatch<AppDispatch>();
	const handleChangeUserInput = (e: React.ChangeEvent<HTMLInputElement>) => {
		setUserInput((prev) => ({ ...prev, [e.target.name]: e.target.value }));
	};
	const handleCreateUser = () => {
		isEdit
			? dispatch(updateUser({ id: user?.id, data: userInput }))
			: dispatch(createUser(userInput));
		handleShow();

		setUserInput({ names: '', email: '', role: '' });
	};

	React.useEffect(() => {
		if (isEdit) {
			setUserInput(user!);
		}
	}, []);
	return (
		<div className='bg-white dark:bg-black/80 duration-1000 text-black rounded-xl p-6'>
			<h1 className='text-5xl md:text-4xl font-bold dark:text-white/90'>
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
						className='bg-white/80 dark:bg-white/40 text-black/80 border-black/10 dark:text-white dark:font-semibold dark:focus:ring-white dark:focus:ring-2'
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
						className='bg-white/80 dark:bg-white/40 text-black/80 border-black/10 dark:text-white dark:font-semibold dark:focus:ring-white dark:focus:ring-2'
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
						className='bg-white/80  text-black/80 border-black/10 dark:text-white dark:font-semibold'
						id='role'
						size='large'
						placeholder='Selectionner un role'
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
				className='text-black/80 dark:text-white w-full dark:bg-black/90  border-black/50 dark:border-white'
				size='large'
				onClick={handleCreateUser}
			>
				Enregistrer
			</Button>
		</div>
	);
};

export default CreateUserForm;
