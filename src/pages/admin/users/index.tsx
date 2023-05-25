import CreateUserForm from '@/components/admin/user/UserForm';
import DetailsUserCard from '@/components/admin/user/DetailsUserCard';
import PageHeader from '@/components/global/PageHeader';
import React from 'react';
import Head from 'next/head';
// import { users } from '@/data/fakes';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '@/app/store';
import { getUsers } from '@/app/users/users.service';

const Index = () => {
	const [showAdd, setShowAdd] = React.useState<boolean>(true);
	const [isEdit, setIsEdit] = React.useState<boolean>(false);
	const [selectedUser, setSelectedUser] = React.useState<IUser | null>(null);

	const { users } = useSelector((state: RootState) => state.users);
	const dispatch = useDispatch<AppDispatch>();

	const handleShowUser = () => {
		setShowAdd((prev) => !prev);
	};

	const handleShowEdit = () => {
		setIsEdit(true);
		setShowAdd((prev) => !prev);
	};

	React.useEffect(() => {
		dispatch(getUsers());
	}, []);
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
			<div className='flex flex-wrap-reverse items-end'>
				<div className='w-full  md:w-2/3 p-4 '>
					<h4 className='text-2xl font-semibold px-2 dark:text-white/80'>
						List des utilisateurs
					</h4>
					<div className='bg-slate-100 dark:bg-inherit rounded-lg p-2 overflow-x-auto'>
						<div className='flex font-semibold justify-between bg-white dark:bg-black/50 dark:text-white/70 py-4 min-w-[40rem]'>
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
								<span>Role</span>
							</div>
						</div>
						{users?.map((user: IUser, i) => (
							<>
								<div
									className={`flex ${
										i % 2 !== 0 ? 'bg-white dark:bg-black/50' : null
									}  hover:bg-black/70 dark:hover:bg-white/40 min-w-[40rem]  hover:text-white dark:text-white/70 duration-1000 rounded justify-between py-4 cursor-pointer`}
									onClick={() => {
										setSelectedUser(user);
										setIsEdit(false);
										setShowAdd(false);
									}}
								>
									<div className='text-center w-12 flex items-center justify-center'>
										<span>{+i + 1}</span>
									</div>
									<div className='text-center w-1/4 flex items-center justify-center'>
										<span>{user?.names}</span>
									</div>
									<div className='text-center w-1/4 flex items-center justify-center'>
										<span>{user?.email}</span>
									</div>
									<div className='text-center w-1/4 flex items-center justify-center'>
										<span>{user?.role}</span>
									</div>
								</div>
							</>
						))}
					</div>
				</div>
				<div className='w-full md:fixed right-5 md:w-[28%] p-4 duration-1000'>
					{showAdd ? (
						<CreateUserForm
							handleShow={handleShowEdit}
							isEdit={isEdit}
							user={selectedUser!}
						/>
					) : (
						<DetailsUserCard
							handleShowEdit={handleShowEdit}
							user={selectedUser!}
						/>
					)}
				</div>
			</div>
		</>
	);
};

export default Index;
