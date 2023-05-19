import PageHeader from '@/components/global/PageHeader';
import React from 'react';

const index = () => {
	return (
		<div>
			<PageHeader
				title='Utilisateurs'
				sub='tous les administrateurs de la plateforme'
				showCreate
				// handleClick={handleShow}
			/>
		</div>
	);
};

export default index;
