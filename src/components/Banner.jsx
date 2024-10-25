const Banner = ({ onGetCredits }) => {
	return (
		<div
			className="hero px-2 w-full my-6 max-w-6xl mx-auto min-h-[400px] bg-black/90 rounded-xl"
			style={{
				backgroundImage: 'url(/assets/bg-shadow.png)',
			}}
		>
			<div className="hero-content max-w-4xl flex-col text-neutral-content text-center">
				<img src="/assets/banner-main.png" alt="cricket" />
				<h1 className="text-4xl font-bold">
					Assemble Your Ultimate Dream 11 Cricket Team
				</h1>
				<p className="text-white/70">Beyond Boundaries Beyond Limits</p>
				<button
					className="btn bg-yellow-400 hover:bg-transparent hover:text-white rounded-md outline"
					onClick={onGetCredits}
				>
					Get free credits
				</button>
			</div>
		</div>
	);
};

export default Banner;
