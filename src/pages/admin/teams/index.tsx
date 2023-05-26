'use client';

import { AppDispatch, RootState } from '@/app/store';
import { getTeams } from '@/app/teams/teams.service';
import DetailsTeamCard from '@/components/admin/team/DetailsTeamCard';
import CreateTeamForm from '@/components/admin/team/TeamForm';
import PageHeader from '@/components/global/PageHeader';
import { teams } from '@/data/fakes';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

const Index = () => {
	const [showAdd, setShowAdd] = React.useState<boolean>(true);
	const [isEdit, setIsEdit] = React.useState<boolean>(false);
	const [selectedTeam, setSelectedTeam] = React.useState<ITeam | null>(null);

	const { teams } = useSelector((state: RootState) => state.teams);
	const dispatch = useDispatch<AppDispatch>();

	const handleShow = () => {
		setShowAdd((prev) => !prev);
	};

	const handleShowEdit = () => {
		setIsEdit(true);
		setShowAdd((prev) => !prev);
	};

	React.useEffect(() => {
		dispatch(getTeams());
	}, [dispatch]);

	return (
		<div>
			<PageHeader
				title='Equipes'
				sub='Gerer toutes les equipes'
				showCreate
				handleClick={handleShow}
			/>
			<div className='flex flex-wrap-reverse items-end'>
				<div className='w-full  md:w-2/3 p-4 '>
					<h4 className='text-2xl font-semibold px-2 dark:text-white/80'>
						List des equipes
					</h4>
					<div className='bg-slate-100 dark:bg-inherit rounded-lg p-2 overflow-x-auto'>
						<div className='flex font-bold justify-between bg-white dark:bg-black/50 dark:text-white/70 py-4 min-w-[40rem]'>
							<div className='text-center w-12 flex items-center justify-center'>
								<span>#</span>
							</div>
							<div className='text-center w-1/4 flex items-center justify-center'>
								<span>Designation</span>
							</div>
							<div className='text-center w-1/4 flex items-center justify-center'>
								<span>Ville</span>
							</div>
							<div className='text-center w-1/4 flex items-center justify-center'>
								<span>Sigle</span>
							</div>
						</div>
						{teams?.length! > 0 ? (
							teams?.map((team, i) => (
								<>
									<div
										className={`flex ${
											i % 2 !== 0 ? 'bg-white dark:bg-black/50' : null
										}  hover:bg-black/70 dark:hover:bg-white/40 min-w-[40rem] hover:text-white dark:text-white/70  duration-1000 rounded justify-between py-4 cursor-pointer`}
										onClick={() => {
											setSelectedTeam(team);
											setIsEdit(false);
											setShowAdd(false);
										}}
									>
										<div className='text-center w-12 flex items-center justify-center'>
											<span>{+i + 1}</span>
										</div>
										<div className='text-center w-1/4 flex items-center justify-center'>
											<span>{team?.title}</span>
										</div>
										<div className='text-center w-1/4 flex items-center justify-center'>
											<span>{team?.town}</span>
										</div>
										<div className='text-center w-1/4 flex items-center justify-center'>
											<span>{team?.sigle}</span>
										</div>
									</div>
								</>
							))
						) : (
							<div className='dark:text-white min-h-[20rem] w-full justify-center text-center h-full flex items-center'>
								<p>Pas d&apos;equipes enregistrées</p>
							</div>
						)}
					</div>
				</div>
				<div className='w-full md:fixed right-5 md:w-[28%] p-4 duration-1000'>
					{showAdd ? (
						<CreateTeamForm
							handleShow={handleShowEdit}
							isEdit={isEdit}
							team={selectedTeam!}
						/>
					) : (
						<DetailsTeamCard
							handleShowEdit={handleShowEdit}
							team={selectedTeam!}
						/>
					)}
				</div>
			</div>
		</div>
	);
};

export default Index;
