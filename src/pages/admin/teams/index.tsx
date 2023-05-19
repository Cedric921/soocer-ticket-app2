'use client';

import PageHeader from '@/components/global/PageHeader';
import React from 'react';

const index = () => {
	return (
		<div>
			<PageHeader
				title='Equipes'
				sub='Gerer toutes les equipes'
				showCreate
				// handleClick={handleShow}
			/>
		</div>
	);
};

export default index;
