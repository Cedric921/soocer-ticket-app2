import React from 'react';

const CompetitionItem = ({
	active,
	competition,
}: {
	active?: boolean;
	competition: { id: string; title: string };
}) => {
	return (
		<div
			className={`bg-primary-500 hover:bg-primary-700 cursor-pointer duration-500 rounded-full p-1 px-3 text-white m-1 ${
				active ? 'bg-primary-800' : null
			}`}
		>
			<span>{competition.title}</span>
		</div>
	);
};

export default CompetitionItem;
