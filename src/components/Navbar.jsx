import Bars from '../icons/Bars';

const Navbar = ({ balance }) => {
	return (
		<header className="px-2 sticky backdrop-blur-xl bg-white/70 top-0 z-50 max-w-6xl mx-auto flex items-center justify-between py-4">
			<img className="w-16" src="/assets/logo.png" alt="a batsman is playing" />
			<nav className="flex items-center gap-12">
				<ul className="hidden md:flex text-gray-500 items-center gap-12">
					<li>Home</li>
					<li>Fixture</li>
					<li>Teams</li>
					<li>Schedules</li>
				</ul>
				<p className="border px-2 py-1 rounded min-w-24 text-center font-bold">
					{balance} M 🪙
				</p>
				<button className="md:hidden">
					<Bars />
				</button>
			</nav>
		</header>
	);
};

export default Navbar;
