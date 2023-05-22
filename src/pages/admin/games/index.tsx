'use client';

import React from 'react';
import PageHeader from '@/components/global/PageHeader';
import { Button, DatePicker, Input, Modal, Select } from 'antd';
import { competList, games, teams } from '@/data/fakes';
import GameCard from '@/components/global/games/GameCard';
import Head from 'next/head';

const Index = () => {
	const [gameInput, setGameInput] = React.useState({
		competition: '',
		team1: '',
		team2: '',
		date: '',
	});
	const [visibleAddCompet, setVisibleAddCompet] =
		React.useState<boolean>(false);

	const handleShow = () => {
		setVisibleAddCompet((prev) => !prev);
	};

	const handleChangeForm = (
		e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
	) => {
		setGameInput((prev) => ({ ...prev, [e.target.name]: e.target.value }));
	};

	const handleCreate = () => {
		console.log('hello world');
		handleShow();
	};
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
				{games.map((game, i) => (
					<div key={i} className='w-full md:w-1/3 2xl:w-1/4 p-4'>
						<GameCard game={game} />
					</div>
				))}
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
							options={competList.map((compet) => ({
								value: compet.id,
								label: compet.title,
							}))}
							filterOption={(input, option) =>
								(option?.label ?? '')
									.toLowerCase()
									.includes(input.toLowerCase())
							}
							optionFilterProp='children'
							// value={userInput.email}
							onChange={handleChangeForm}
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
							options={teams.map((team) => ({
								value: team.id,
								label: team.title,
							}))}
							filterOption={(input, option) =>
								(option?.label ?? '')
									.toLowerCase()
									.includes(input.toLowerCase())
							}
							optionFilterProp='children'
							// value={userInput.email}
							onChange={handleChangeForm}
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
							options={teams.map((team) => ({
								value: team.id,
								label: team.title,
							}))}
							filterOption={(input, option) =>
								(option?.label ?? '')
									.toLowerCase()
									.includes(input.toLowerCase())
							}
							optionFilterProp='children'
							// value={userInput.email}
							onChange={handleChangeForm}
						/>
					</div>
					<div className='flex flex-col py-2'>
						<label htmlFor='description' className='text-sm text-black/60'>
							Date de rencontre
						</label>
						<DatePicker allowClear={true} size='large' />
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
