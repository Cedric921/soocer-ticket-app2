'use client';

import DetailsTeamCard from '@/components/admin/team/DetailsTeamCard';
import CreateTeamForm from '@/components/admin/team/TeamForm';
import PageHeader from '@/components/global/PageHeader';
import { teams } from '@/data/fakes';
import React from 'react';

interface ITeam {
	id: string;
	title: string;
	town: string;
	sigle: string;
}

const Index = () => {
	const [showAdd, setShowAdd] = React.useState<boolean>(true);
	const [isEdit, setIsEdit] = React.useState<boolean>(false);
	const [selectedTeam, setSelectedTeam] = React.useState<ITeam | null>(null);

	const handleShow = () => {
		setShowAdd((prev) => !prev);
	};

	const handleShowEdit = () => {
		setIsEdit(true);
		setShowAdd((prev) => !prev);
	};

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
					<h4 className='text-2xl font-semibold px-2'>List des utilisateurs</h4>
					<div className='bg-slate-100 rounded-lg p-2 overflow-x-auto'>
						<div className='flex font-bold justify-between bg-white py-4 min-w-[40rem]'>
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
						{teams.map((team, i) => (
							<>
								<div
									className={`flex ${
										i % 2 !== 0 ? 'bg-white' : null
									}  hover:bg-black/70 min-w-[40rem] hover:text-white duration-1000 rounded justify-between py-4 cursor-pointer`}
									onClick={() => {
										setSelectedTeam(team);
										setIsEdit(false);
										setShowAdd(false);
									}}
								>
									<div className='text-center w-12 flex items-center justify-center'>
										<span>{team?.id}</span>
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
						))}
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
