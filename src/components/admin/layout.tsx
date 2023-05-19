import React from 'react';

interface ILayout {
	children: React.ReactNode;
}

const layout = ({ children }: ILayout) => {
	return (
		<div className=''>
			<aside>aside</aside>
			<main>
				<header>header</header>
				<div>{children}</div>
			</main>
		</div>
	);
};

export default layout;
