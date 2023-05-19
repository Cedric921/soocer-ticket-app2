'use client';
import CompetCard from '@/components/admin/compet/CompetCard';
import PageHeader from '@/components/global/PageHeader';
import { Button, Input, Modal } from 'antd';
import React from 'react';

const competList = [
	{
		id: '123',
		title: 'champios league',
		description: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Autem placeat
				saepe officiis facilis laboriosam doloribus quisquam voluptatibus minima
				cum vitae illo neque beatae aperiam, libero ipsum ducimus modi est
				obcaecati!`,
	},
	{
		id: '123',
		title: 'Europa league',
		description: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Autem placeat
				saepe officiis facilis laboriosam doloribus quisquam voluptatibus minima
				cum vitae illo neque beatae aperiam, libero ipsum ducimus modi est
				obcaecati!`,
	},
	{
		id: '123',
		title: 'La liga BBVA',
		description: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Autem placeat
				saepe officiis facilis laboriosam doloribus quisquam voluptatibus minima
				cum vitae illo neque beatae aperiam, libero ipsum ducimus modi est
				obcaecati!`,
	},
	{
		id: '123',
		title: 'Provincial',
		description: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Autem placeat
				saepe officiis facilis laboriosam doloribus quisquam voluptatibus minima
				cum vitae illo neque beatae aperiam, libero ipsum ducimus modi est
				obcaecati!`,
	},
	{
		id: '123',
		title: 'league 1',
		description: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Autem placeat
				saepe officiis facilis laboriosam doloribus quisquam voluptatibus minima
				cum vitae illo neque beatae aperiam, libero ipsum ducimus modi est
				obcaecati!`,
	},
	{
		id: '123',
		title: 'league nationnale',
		description: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Autem placeat
				saepe officiis facilis laboriosam doloribus quisquam voluptatibus minima
				cum vitae illo neque beatae aperiam, libero ipsum ducimus modi est
				obcaecati!`,
	},
	{
		id: '123',
		title: 'champios league',
		description: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Autem placeat
				saepe officiis facilis laboriosam doloribus quisquam voluptatibus minima
				cum vitae illo neque beatae aperiam, libero ipsum ducimus modi est
				obcaecati!`,
	},
	{
		id: '123',
		title: 'champios league',
		description: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Autem placeat
				saepe officiis facilis laboriosam doloribus quisquam voluptatibus minima
				cum vitae illo neque beatae aperiam, libero ipsum ducimus modi est
				obcaecati!`,
	},
];

const Index = () => {
	const [visibleAddCompet, setVisibleAddCompet] =
		React.useState<boolean>(false);

	const handleShow = () => {
		setVisibleAddCompet((prev) => !prev);
	};

	const handleCreate = () => {
		console.log('hello world');
		handleShow();
	};
	return (
		<div>
			<PageHeader
				title='Competitions'
				sub='Gere facilements les championants'
				showCreate
				handleClick={handleShow}
			/>
			<div className='flex flex-wrap'>
				{competList.map((el, i) => (
					<div key={i} className='w-full md:w-1/3 2xl:w-1/4 p-4'>
						<CompetCard compet={el} />
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
							Designation
						</label>
						<Input
							className='bg-slate-100'
							type='text'
							name='title'
							id='title'
							size='large'
							// value={userInput.email}
							// onChange={handleChangeUserInput}
						/>
					</div>
					<div className='flex flex-col py-2'>
						<label htmlFor='description' className='text-sm text-black/60'>
							Description
						</label>
						<Input.TextArea
							className='bg-slate-100'
							name='description'
							id='description'
							size='large'

							// value={userInput.description}
							// onChange={handleChangeUserInput}
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
		</div>
	);
};

export default Index;
