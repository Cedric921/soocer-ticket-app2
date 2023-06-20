'use client';

import React from 'react';
import PageHeader from '@/components/global/PageHeader';
import { Button, DatePicker, Input, InputNumber, Modal, Select } from 'antd';
import GameCard from '@/components/global/games/GameCard';
import Head from 'next/head';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '@/app/store';
import { createGame, getGames } from '@/app/games/games.service';
import { getCompets } from '@/app/compet/compets.service';
import { getTeams } from '@/app/teams/teams.service';

const Index = () => {
	const dispatch = useDispatch<AppDispatch>();
	const { games } = useSelector((state: RootState) => state.games);
	const { teams } = useSelector((state: RootState) => state.teams);
	const { competitons } = useSelector((state: RootState) => state.competitions);
	const [gameInput, setGameInput] = React.useState({
		competition: '',
		teamOneId: '',
		teamTwoId: '',
		date: '',
		places: 100,
		price: 10,
	});
	const [visibleAddCompet, setVisibleAddCompet] =
		React.useState<boolean>(false);

	const handleShow = () => {
		setVisibleAddCompet((prev) => !prev);
	};

	const handleCreate = () => {
		dispatch(createGame(gameInput));
		handleShow();
		dispatch(getGames());
	};

	React.useEffect(() => {
		if (competitons?.length! < 1) dispatch(getCompets());
		if (teams?.length! < 1) dispatch(getTeams());
		dispatch(getGames());
	}, [dispatch, teams?.length, competitons?.length]);

	return (
		<>
			<Head>
				<title>Googl go - admin rencontres</title>
			</Head>
			<PageHeader
				title='Rencontres'
				sub='Gerer toutes les rencontres, matchs '
				showCreate
				handleClick={handleShow}
			/>
			<div className='flex flex-wrap'>
				{games?.length! > 0 ? (
					games?.map((game, i) => (
						<div key={i} className='w-full md:w-1/3 2xl:w-1/4 p-4'>
							<GameCard game={game} />
						</div>
					))
				) : (
					<div className='dark:text-white min-h-[20rem] w-full justify-center text-center h-full flex items-center'>
						<p>Pas des rencontres enregistrées</p>
					</div>
				)}
			</div>
			<Modal
				open={visibleAddCompet}
				onCancel={handleShow}
				onOk={handleCreate}
				centered
				footer={[]}
			>
				<div>
					<h3 className='text-lg font-semibold'>Enregistrer une competition</h3>
					<div className='flex flex-col py-2'>
						<label htmlFor='title' className='text-sm text-black/60'>
							Competition
						</label>
						<Select
							className='bg-slate-100'
							id='title'
							size='large'
							placeholder='Selectionner la competition'
							options={competitons?.map((compet) => ({
								value: compet.id,
								label: compet.title,
							}))}
							filterOption={(input, option) =>
								(option?.label ?? '')
									.toLowerCase()
									.includes(input.toLowerCase())
							}
							optionFilterProp='children'
							onChange={(e) =>
								setGameInput((p) => ({ ...p, competitionId: e }))
							}
						/>
					</div>
					<div className='flex flex-col py-2'>
						<label htmlFor='description' className='text-sm text-black/60'>
							Equipe 1
						</label>
						<Select
							className='bg-slate-100'
							id='title'
							size='large'
							placeholder='Selectionner une equipe'
							options={teams?.map((team) => ({
								value: team.id,
								label: team.title,
							}))}
							filterOption={(input, option) =>
								(option?.label ?? '')
									.toLowerCase()
									.includes(input.toLowerCase())
							}
							optionFilterProp='children'
							onChange={(e) => setGameInput((p) => ({ ...p, teamOneId: e }))}
						/>
					</div>
					<div className='flex flex-col py-2'>
						<label htmlFor='description' className='text-sm text-black/60'>
							Equipe 2
						</label>
						<Select
							className='bg-slate-100'
							id='title'
							size='large'
							placeholder='Selectionner une equipe'
							options={teams?.map((team) => ({
								value: team.id,
								label: team.title,
							}))}
							filterOption={(input, option) =>
								(option?.label ?? '')
									.toLowerCase()
									.includes(input.toLowerCase())
							}
							optionFilterProp='children'
							onChange={(e) => setGameInput((p) => ({ ...p, teamTwoId: e }))}
						/>
					</div>
					<div className='flex flex-col py-2'>
						<label htmlFor='description' className='text-sm text-black/60'>
							Date de rencontre
						</label>
						<DatePicker
							allowClear={true}
							size='large'
							onChange={(e) =>
								setGameInput((prev) => ({
									...prev,
									date: e?.format('YYYY-MM-DDTHH:mm:ssZ')!,
								}))
							}
						/>
					</div>
					<div className='flex flex-col py-2'>
						<label htmlFor='description' className='text-sm text-black/60'>
							Prix
						</label>
						<Input
							size='large'
							onChange={(e) =>
								setGameInput((prev) => ({
									...prev,
									price: +e.target.value,
								}))
							}
						/>
					</div>

					<div className='flex flex-col py-2'>
						<label htmlFor='description' className='text-sm text-black/60'>
							Nombre des places
						</label>
						<Input
							size='large'
							onChange={(e) =>
								setGameInput((prev) => ({
									...prev,
									places: +e.target.value,
								}))
							}
						/>
					</div>
				</div>
				<div className='w-full flex justify-end gap-2 mt-4'>
					<Button onClick={handleShow} size='large' className=''>
						Annuler
					</Button>
					<Button
						onClick={handleCreate}
						size='large'
						className='bg-black/80 text-white'
					>
						Valider
					</Button>
				</div>
			</Modal>
		</>
	);
};

export default Index;
