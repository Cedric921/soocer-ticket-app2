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
			className={`bg-black/20 hover:bg-primary-700 w-max cursor-pointer duration-500 rounded-full p-1 px-3 text-black m-1 ${active ? 'bg-primary-800' : null
				}`}
		>
			<span className='text-sm '>{competition.title}</span>
		</div>
	);
};

export default CompetitionItem;
