'use client';

import PageHeader from '@/components/global/PageHeader';
import React from 'react';

const index = () => {
	return (
		<div>
			<PageHeader
				title='Rencontres'
				sub='Gerer toutes les rencontres, matchs '
				showCreate
				// handleClick={handleShow}
			/>
		</div>
	);
};

export default index;
