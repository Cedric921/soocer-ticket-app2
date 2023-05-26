'use client';
import CompetCard from '@/components/admin/compet/CompetCard';
import PageHeader from '@/components/global/PageHeader';
import { Button, Input, Modal } from 'antd';
import React from 'react';
import { competList } from '@/data/fakes';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '@/app/store';
import { createCompet, getCompets } from '@/app/compet/compets.service';

const Index = () => {
	const [visibleAddCompet, setVisibleAddCompet] =
		React.useState<boolean>(false);
	const { competitons } = useSelector((state: RootState) => state.competitions);
	const dispatch = useDispatch<AppDispatch>();

	const [competInput, setCompetInput] = React.useState({
		title: '',
		description: '',
	});

	const handleShow = () => {
		setVisibleAddCompet((prev) => !prev);
	};

	const handleChangeForm = (
		e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
	) => {
		setCompetInput((p) => ({ ...p, [e.target.name]: e.target.value }));
	};

	const handleCreate = () => {
		if (competInput.title.length > 5 && competInput.description.length > 5) {
			dispatch(createCompet(competInput));
		}
		handleShow();
	};

	React.useEffect(() => {
		dispatch(getCompets());
	}, [dispatch]);
	return (
		<div>
			<PageHeader
				title='Competitions'
				sub='Gere facilements les championants'
				showCreate
				handleClick={handleShow}
			/>
			<div className='flex flex-wrap items-stretch'>
				{competitons?.length! > 0 ? (
					competitons?.map((el, i) => (
						<div key={i} className='w-full  md:w-1/3 2xl:w-1/4 p-4'>
							<CompetCard compet={el} />
						</div>
					))
				) : (
					<div className='dark:text-white min-h-[20rem] w-full justify-center text-center h-full flex items-center'>
						<p>Pas des competitions enregostrées</p>
					</div>
				)}
			</div>
			<Modal
				open={visibleAddCompet}
				onCancel={handleShow}
				onOk={handleCreate}
				centered
				className='dark:bg-black'
				footer={[]}
			>
				<div>
					<h3 className='text-lg font-semibold '>
						Enregistrer une competition
					</h3>
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
							value={competInput.title}
							onChange={handleChangeForm}
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
							value={competInput.description}
							onChange={handleChangeForm}
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
