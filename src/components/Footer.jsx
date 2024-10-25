import React from 'react';

const Footer = () => {
	return (
		<footer className="bg-[#06091A]">
			<div className="flex justify-center items-center pt-[240px]">
				<img src="/assets/logo-footer.png" alt="cricket" />
			</div>
			<div className="px-2 footer max-w-6xl mx-auto py-10">
				<div className="max-w-xs">
					<h6 className="footer-title text-white opacity-100">About Us</h6>
					<p className="text-gray-500">
						We are a passionate team dedicated to providing the best services to
						our customers.
					</p>
				</div>
				<nav className="text-gray-500">
					<h6 className="footer-title text-white opacity-100">Quick Links</h6>
					<a className="link link-hover">Home</a>
					<a className="link link-hover">Services</a>
					<a className="link link-hover">About</a>
					<a className="link link-hover">Contact</a>
				</nav>
				<form>
					<h6 className="footer-title text-white opacity-100">Newsletter</h6>
					<p className="text-gray-500">
						Subscribe to our newsletter for the latest updates.
					</p>
					<fieldset className="form-control w-80">
						<div className="join">
							<input
								type="text"
								placeholder="Enter your email"
								className="input input-bordered join-item"
							/>
							<button className="btn bg-gradient-to-r from-[#ebc494] to-pink-400/40 font-semibold px-6 py-2 rounded-lg shadow-md join-item">
								Subscribe
							</button>
						</div>
					</fieldset>
				</form>
			</div>
			<hr className="border-gray-800" />
			<p className="text-gray-500 text-center py-6">
				Copyright © {new Date().getFullYear()} - All right reserved by{' '}
				<span className="font-bold text-lime-400">Fahimul Islam</span>
			</p>
		</footer>
	);
};

export default Footer;
