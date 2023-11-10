import React from 'react';

const Head = () => {
	return (
		<header>
			<div className='inner'>
				<a href="/" className='name'>MIN HYEOK Portfolio</a>
				<a href="#" className='theme'>
					<div className='theme_text'>
						<span className='theme_text_mask'>
							<span>Dark</span>
							<span>Light</span>
						</span>
						&nbsp;Mode
					</div>
					<div className='theme_icon'>
						<span className='theme_icon_sun'>
							<span></span>
						</span>
						<span className='theme_icon_moon'></span>
					</div>
				</a>
			</div>
		</header>
	);
};

export default Head;