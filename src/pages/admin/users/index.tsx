import CreateUserForm from '@/components/admin/user/UserForm';
import DetailsUserCard from '@/components/admin/user/DetailsUserCard';
import PageHeader from '@/components/global/PageHeader';
import React from 'react';

const users = [
	{
		id: '1',
		names: 'cedric karungu',
		email: 'cedric@gmail.com',
		tel: '255343434',
	},
	{
		id: '2',
		names: 'cedric karungu',
		email: 'cedric@gmail.com',
		tel: '255343434',
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
		<div className='flex flex-wrap-reverse '>
			<div className='w-full md:w-2/3'>
				<PageHeader
					title='Utilisateurs'
					sub='tous les administrateurs de la plateforme'
					showCreate={!showAdd}
					handleClick={handleShowUser}
				/>
			</div>
			<div className='w-full md:w-1/3 p-4 duration-1000'>
				{showAdd ? (
					<CreateUserForm handleShow={handleShowEdit} isEdit={isEdit} />
				) : (
					<DetailsUserCard
						handleShowEdit={handleShowUser}
						user={selectedUser}
					/>
				)}
			</div>
		</div>
	);
};

export default Index;
