import React from 'react';
import GameList from '@/components/users/games/GameList';
import Hero from '@/components/users/home/Hero';
import Services from '@/components/users/home/Services';
import Testimonials from '@/components/users/home/Testimonials';
import Aos from 'aos';
import 'aos/dist/aos.css';

export default function Home() {
	React.useEffect(() => {
		Aos.init({
			duration: 1000,
			easing: 'ease-in-out',
		});
	});
	return (
		<main>
			<Hero />
			<Services />
			{/* <Testimonials /> */}
			<GameList max={12} />
		</main>
	);
}
