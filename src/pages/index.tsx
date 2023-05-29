import GameList from '@/components/users/games/GameList';
import Hero from '@/components/users/home/Hero';
import Services from '@/components/users/home/Services';
import Testimonials from '@/components/users/home/Testimonials';

export default function Home() {
	return (
		<main>
			<Hero />
			<Services />
			<Testimonials />
			<GameList />
		</main>
	);
}
