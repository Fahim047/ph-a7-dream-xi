import React from 'react';

const NewsLetter = () => {
	return (
		<div className="-mb-[130px] max-w-6xl mx-auto my-6 p-4 rounded-xl border border-white/30 backdrop-blur-lg shadow-lg">
			<div className="bg-gradient-to-tr from-blue-200 via-white to-[#ebc494] flex flex-col items-center justify-center gap-2 py-20 px-6 rounded-lg">
				<h2 className="text-3xl font-bold">Subscribe to our Newsletter</h2>
				<p className="text-gray-500">
					Get the latest updates and news right in your inbox!
				</p>
				<div className="text-center inline-flex gap-2 mt-4">
					<input
						type="text"
						placeholder="Enter you email"
						className="input input-bordered w-full md:w-[300px] bg-white/20  placeholder-gray-300 backdrop-blur-md border  rounded-lg p-3"
					/>
					<button className="btn border-none bg-gradient-to-r from-[#ebc494] to-pink-400/40 font-semibold px-6 py-2 rounded-lg shadow-md transition-transform transform hover:scale-105">
						Subscribe
					</button>
				</div>
			</div>
		</div>
	);
};

export default NewsLetter;
