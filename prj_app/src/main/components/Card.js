import React, { useState } from 'react';
import Marquee from "react-fast-marquee";

const Card = () => {
	const [isActive, setIsActive] = useState('about');

	return (
		<div className='main_visual' id={isActive}>
			<div className='card'>
				<div className="card_header">
					<img className="avatar" src="https://images.unsplash.com/photo-1549068106-b024baf5062d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80" alt="avatar" />
					<div className='txt_wrap'>
						<h1 className="name">MINHYEOK</h1>
						<p className="job">UI Developer</p>
					</div>
				</div>
				<div className='card_main'>
					{/* ABOUT */}
					<div className={isActive ==="about" ? 'isActive' : null } id="about">
						<div className='card_content'>
							<h2 className='card_subtitle'>ABOUT</h2>
							<p className='card_desc'>Whatever tattooed stumptown art party sriracha gentrify hashtag intelligentsia readymade schlitz brooklyn disrupt</p>
						</div>
						<div className='card_social'>
							<a href="#">
								<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
									<path d="M15.997 3.985h2.191V.169C17.81.117 16.51 0 14.996 0c-3.159 0-5.323 1.987-5.323 5.639V9H6.187v4.266h3.486V24h4.274V13.267h3.345l.531-4.266h-3.877V6.062c.001-1.233.333-2.077 2.051-2.077z"></path>
								</svg>
							</a>
						</div>
					</div>
					{/*// ABOUT */}

					{/* EXPERIENCE */}
					<div className={isActive ==="experience" ? 'isActive' : null } id="experience">
						<div className='card_content'>
							<h2 className='card_subtitle'>WORK EXPERIENCE</h2>
							<div className="card_timeline">
								<div className="card_item" data-year="2021">
									<div className="card_item_title">Front-end Developer at <span>JotForm</span></div>
									<div className="card_item_desc">Disrupt stumptown retro everyday carry unicorn.</div>
								</div>
								<div className="card_item" data-year="2020">
									<div className="card_item_title">UI Developer at <span>GitHub</span></div>
									<div className="card_item_desc">Developed new conversion funnels and disrupt.</div>
								</div>
							</div>
						</div>
					</div>
					{/*// EXPERIENCE */}

					{/* CONTACT */}
					<div className={isActive ==="contact" ? 'isActive' : null } id="contact">
						<div className='card_content'>
							<h2 className='card_subtitle'>CONTACT</h2>
							<div className="card_contact_wrapper">
								<div className="card_contact">
									<i>
										<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
										<path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"></path>
										<circle cx="12" cy="10" r="3"></circle></svg>
									</i>
									<p>Algonquin Rd, Three Oaks Vintage, MI, 49128</p>
								</div>
								<div className="card_contact">
									<i>
										<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
										<path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z"></path></svg>
									</i>
									<p>(269) 756-9809</p>
								</div>
								<div className="card_contact">
									<i>
										<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
										<path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
										<path d="M22 6l-10 7L2 6"></path></svg>
									</i>
									<p>whalsgur0000@naver.com</p>
								</div>
								<button className="contact_me">WORK TOGETHER</button>
							</div>
						</div>
					</div>
					{/*// CONTACT */}
				</div>

				<div className="card_btn">
					<button className={isActive ==="about" ? 'isActive' : null } onClick={() => setIsActive('about')} data-section="#about">ABOUT</button>
					<button className={isActive ==="experience" ? 'isActive' : null } onClick={() => setIsActive('experience')} data-section="#experience">EXPERIENCE</button>
					<button className={isActive ==="contact" ? 'isActive' : null } onClick={() => setIsActive('contact')} data-section="#contact">CONTACT</button>
				</div>
			</div>
			<div className='mar_wrap'>
				<Marquee>
					<div className='marquee'>
						<p>A SMALL THING HAS MADE A BIG THINGS.</p>
					</div>
					<div className='marquee'>
						<p>A SMALL THING HAS MADE A BIG THINGS.</p>
					</div>
				</Marquee>
			</div>

			<div className='scroll_down'>
				<p>SCROLL DOWN</p>
				<i></i>
			</div>
		</div>
	);
};

export default Card;