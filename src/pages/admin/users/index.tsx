import CreateUserForm from '@/components/admin/user/UserForm';
import DetailsUserCard from '@/components/admin/user/DetailsUserCard';
import PageHeader from '@/components/global/PageHeader';
import React from 'react';
import { Table } from 'antd';
import Head from 'next/head';

const users = [
	{
		id: '1',
		names: 'cedric karungu',
		email: 'cedric@gmail.com',
		tel: '255343434',
	},
	{
		id: '2',
		names: 'Gloire Mutaliko',
		email: 'gloire@gmail.com',
		tel: '6635353',
	},
	{
		id: '3',
		names: 'Jonas Nasibu',
		email: 'jonas@gmail.com',
		tel: '988484833',
	},
	{
		id: '4',
		names: 'Josue Makuta',
		email: 'jos@gmail.com',
		tel: '6635353',
	},
];

const Index = () => {
	const [showAdd, setShowAdd] = React.useState<boolean>(true);
	const [isEdit, setIsEdit] = React.useState<boolean>(false);
	const [selectedUser, setSelectedUser] = React.useState(users[0]);

	const handleShowUser = () => {
		setShowAdd((prev) => !prev);
	};

	const handleShowEdit = () => {
		setIsEdit(true);
		setShowAdd((prev) => !prev);
	};

	return (
		<>
			<Head>
				<title>admin - utilisateurs</title>
			</Head>
			<PageHeader
				title='Utilisateurs'
				sub='tous les administrateurs de la plateforme'
				showCreate={!showAdd}
				handleClick={handleShowUser}
			/>
			<div className='flex flex-wrap-reverse '>
				<div className='w-full md:w-2/3 p-4'>
					<h4 className='text-2xl font-semibold px-2'>List des utilisateurs</h4>
					<div className='bg-slate-100 rounded-lg p-2 '>
						<div className='flex font-semibold justify-between py-4'>
							<div className='text-center w-12 flex items-center justify-center'>
								<span>#</span>
							</div>
							<div className='text-center w-1/4 flex items-center justify-center'>
								<span>Noms</span>
							</div>
							<div className='text-center w-1/4 flex items-center justify-center'>
								<span>Email</span>
							</div>
							<div className='text-center w-1/4 flex items-center justify-center'>
								<span>Telephone</span>
							</div>
						</div>
						{users.map((user, i) => (
							<>
								<div
									className={`flex ${
										i % 2 == 0 ? 'bg-white' : null
									}  hover:bg-black/90 hover:text-white duration-1000 rounded justify-between py-4 cursor-pointer`}
									onClick={() => {
										setSelectedUser(user);
										setIsEdit(false);
										setShowAdd(false);
									}}
								>
									<div className='text-center w-12 flex items-center justify-center'>
										<span>{user?.id}</span>
									</div>
									<div className='text-center w-1/4 flex items-center justify-center'>
										<span>{user?.names}</span>
									</div>
									<div className='text-center w-1/4 flex items-center justify-center'>
										<span>{user?.email}</span>
									</div>
									<div className='text-center w-1/4 flex items-center justify-center'>
										<span>{user?.tel}</span>
									</div>
								</div>
							</>
						))}
					</div>
				</div>
				<div className='w-full md:w-1/3 p-4 duration-1000'>
					{showAdd ? (
						<CreateUserForm
							handleShow={handleShowEdit}
							isEdit={isEdit}
							user={selectedUser}
						/>
					) : (
						<DetailsUserCard
							handleShowEdit={handleShowEdit}
							user={selectedUser}
						/>
					)}
				</div>
			</div>
		</>
	);
};

export default Index;
