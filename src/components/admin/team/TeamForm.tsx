import { AppDispatch } from '@/app/store';
import { createTeam, updateTeam } from '@/app/teams/teams.service';
import { Button, Input } from 'antd';
import React from 'react';
import { useDispatch } from 'react-redux';

const CreateTeamForm = ({
	handleShow,
	isEdit,
	team,
}: {
	handleShow: () => void;
	isEdit?: boolean;
	team?: ITeam;
}) => {
	const dispatch = useDispatch<AppDispatch>();
	const [teamInput, setTeamInput] = React.useState({
		title: '',
		town: '',
		sigle: '',
	});
	const [errorLog, setErrorLog] = React.useState({
		title: false,
		town: false,
	});

	const handleChangeTeamInput = (e: React.ChangeEvent<HTMLInputElement>) => {
		setTeamInput((prev) => ({ ...prev, [e.target.name]: e.target.value }));
		setErrorLog((prev) => ({ ...prev, [e.target.name]: false }));
	};

	const validate = () => {
		let notError = true;
		if (teamInput.title.length < 4) {
			setErrorLog((prev) => ({ ...prev, title: true }));
			notError = false;
		}
		if (teamInput.town.length < 4) {
			setErrorLog((prev) => ({ ...prev, town: true }));
			notError = false;
		}

		return notError;
	};

	const handleCreateTeam = () => {
		console.log(isEdit, teamInput);
		if (validate()) {
			!isEdit
				? dispatch(createTeam(teamInput))
				: dispatch(updateTeam({ id: team?.id! }));
		}
		setTeamInput({ sigle: '', title: '', town: '' });
	};

	React.useEffect(() => {
		if (isEdit) {
			setTeamInput(team!);
		}
	}, [isEdit, team]);
	return (
		<div className='bg-white dark:bg-black/80  duration-1000 text-black rounded-xl p-6'>
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
						className={`bg-white/80 dark:bg-white/40 text-black/80 dark:text-white/70 dark:text-white dark:font-semibold dark:focus:ring-white dark:focus:ring-2 ${
							errorLog.title ? 'border-red-500' : 'border-black/10 '
						} `}
						type='text'
						name='title'
						id='title'
						size='large'
						value={teamInput?.title}
						onChange={handleChangeTeamInput}
					/>
					{errorLog.title ? (
						<span className='text-red-600 text-xs'>contenu invalide</span>
					) : null}
				</div>
				<div className='flex flex-col py-2'>
					<label
						htmlFor='town'
						className='text-sm text-black/80 dark:text-white/70'
					>
						Ville
					</label>
					<Input
						className={`bg-white/80 dark:bg-white/40 text-black/80 dark:text-white/70 dark:text-white dark:font-semibold dark:focus:ring-white dark:focus:ring-2 ${
							errorLog.town ? 'border-red-500' : 'border-black/10 '
						} `}
						type='text'
						name='town'
						id='town'
						size='large'
						value={teamInput?.town}
						onChange={handleChangeTeamInput}
					/>
					{errorLog.town ? (
						<span className='text-red-600 text-xs'>contenu invalide</span>
					) : null}
				</div>
				<div className='flex flex-col py-2'>
					<label
						htmlFor='sigle'
						className='text-sm text-black/80 dark:text-white/70'
					>
						Sigle
					</label>
					<Input
						className='bg-white/80 dark:bg-white/40 text-black/80 dark:text-white/70 dark:text-white dark:font-semibold dark:focus:ring-white dark:focus:ring-2 border-black/10'
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
				className='text-black/80 dark:text-white w-full dark:bg-black/90  border-black/50 dark:border-white'
				size='large'
				onClick={handleCreateTeam}
			>
				Enregistrer
			</Button>
		</div>
	);
};

export default CreateTeamForm;
