import React, { useState } from 'react';
import Marquee from "react-fast-marquee";

const Card = () => {
	const [isActive, setIsActive] = useState('about');

	return (
		<div className='main_visual' id={isActive}>
			<div className='card'>
				<div className="card_header">
					<img className="avatar" src="/Portfolio_Build/img/thumb.jpg" alt="avatar" />
					<div className='txt_wrap'>
						<h1 className="name">CHO MINHYEOK</h1>
						<p className="job">UI Developer</p>
					</div>
				</div>
				<div className='card_main'>
					{/* ABOUT */}
					<div className={isActive ==="about" ? 'isActive' : null } id="about">
						<div className='card_content'>
							<h2 className='card_subtitle'>ABOUT</h2>
							<p className='card_desc'>
							안녕하세요. 4년차 UI 개발자 조민혁입니다 :)<br/>
							저는 직관적이면서도 효율적이며 견고한 마크업을 지향합니다. 또한, 유연하고 재사용성이 높은 코드를 작성하여 다양한 경험을 쌓고 전문성을 향상시켰습니다.
							</p>
						</div>
						<div className='card_social'>
							<a href="https://bit.ly/mhcho-Portfolio" target='_blank'>
								<img src="/Portfolio_Build/img/ico_notion.png" />
							</a>
							<a href="https://haagenmoa.tistory.com/" target='_blank'>
								<img src="/Portfolio_Build/img/ico_blog.png" />
							</a>
						</div>
					</div>
					{/*// ABOUT */}

					{/* EXPERIENCE */}
					<div className={isActive ==="experience" ? 'isActive' : null } id="experience">
						<div className='card_content'>
							<h2 className='card_subtitle'>WORK EXPERIENCE</h2>
							<div className="card_timeline">
								<div className="card_item" data-year="2024">
									<div className="card_item_title">와일리</div>
									<div className="card_item_desc">커머스 및 멤버십 구축 퍼블리싱</div>
								</div>
								<div className="card_item" data-year="2021">
									<div className="card_item_title">퓨처누리</div>
									<div className="card_item_desc">도서관 및 검색 솔루션 구축</div>
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
								{/* <div className="card_contact">
									<i>
										<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
										<path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"></path>
										<circle cx="12" cy="10" r="3"></circle></svg>
									</i>
									<p></p>
								</div> */}
								<div className="card_contact">
									<i>
										<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
										<path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z"></path></svg>
									</i>
									<p>010-9927-3400</p>
								</div>
								<div className="card_contact">
									<i>
										<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
										<path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
										<path d="M22 6l-10 7L2 6"></path></svg>
									</i>
									<p>whalsgur0000@naver.com</p>
								</div>
								<a href="#edit" className="contact_me">WORK TOGETHER</a>
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