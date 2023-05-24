import { Button, Input } from 'antd';
import React from 'react';

const CreateTeamForm = ({
	handleShow,
	isEdit,
	team,
}: {
	handleShow: () => void;
	isEdit?: boolean;
	team?: {
		title: string;
		town: string;
		sigle: string;
	};
}) => {
	const [teamInput, setTeamInput] = React.useState({
		title: '',
		town: '',
		sigle: '',
	});

	const handleChangeTeamInput = (e: React.ChangeEvent<HTMLInputElement>) => {
		setTeamInput((prev) => ({ ...prev, [e.target.name]: e.target.value }));
	};
	const handleCreateTeam = () => {
		handleShow();
	};

	React.useEffect(() => {
		if (isEdit) {
			setTeamInput(team!);
		}
	}, [isEdit, team]);
	return (
		<div className='bg-white dark:bg-white/20  duration-1000 text-black rounded-xl p-6'>
			<h1 className='text-5xl md:text-4xl font-bold dark:text-white/70'>
				{!isEdit ? 'Ajouter une equipe' : 'Modifier informations'}
			</h1>
			<form className='text-sm my-4 mt-3 text-black/80 dark:text-white/70'>
				<div className='flex flex-col py-2'>
					<label
						htmlFor='title'
						className='text-sm text-black/80 dark:text-white/70'
					>
						Designation
					</label>
					<Input
						className='bg-white/80 dark:bg-white/40 text-black/80 dark:text-white/70 border-black/10'
						type='text'
						name='title'
						id='title'
						size='large'
						value={teamInput?.title}
						onChange={handleChangeTeamInput}
					/>
				</div>
				<div className='flex flex-col py-2'>
					<label
						htmlFor='town'
						className='text-sm text-black/80 dark:text-white/70'
					>
						Ville
					</label>
					<Input
						className='bg-white/80 dark:bg-white/40 text-black/80 dark:text-white/70 border-black/10'
						type='text'
						name='town'
						id='town'
						size='large'
						value={teamInput?.town}
						onChange={handleChangeTeamInput}
					/>
				</div>
				<div className='flex flex-col py-2'>
					<label
						htmlFor='sigle'
						className='text-sm text-black/80 dark:text-white/70'
					>
						Sigle
					</label>
					<Input
						className='bg-white/80 dark:bg-white/40 text-black/80 dark:text-white/70 border-black/10'
						type='text'
						name='sigle'
						id='sigle'
						size='large'
						value={teamInput?.sigle}
						onChange={handleChangeTeamInput}
					/>
				</div>
			</form>
			<Button
				className='text-black/80 dark:text-white/70 w-full dark:bg-black/90  border-black/50'
				size='large'
				onClick={handleCreateTeam}
			>
				Enregistrer
			</Button>
		</div>
	);
};

export default CreateTeamForm;
