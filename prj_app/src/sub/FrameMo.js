import React, { useCallback, useRef } from 'react';
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const FrameMo = ({moSlideImg}) => {
	const settings = {
		infinite: true,
		speed: 1000,
		slidesToShow: 1,
		slidesToScroll: 1,
		variableWidth: true,
		arrows : false,
		autoplay: true,
		autoplaySpeed: 5000,
	}

	// slick arrow
	const moSlickRef = useRef()
	const moPrev = useCallback(() => moSlickRef.current.slickPrev(),[])
	const moNext = useCallback(() => moSlickRef.current.slickNext(),[])

	return (
		<div className='pf_sec'>
			<div className='frame frame_mo'>
				<figure className='frame_img'>
					<img src="/Portfolio_Build/img/frame_mo.png" alt="MOBILE FRAME" />
				</figure>
				<div className='frame_inner'>
					<div className='scroll_area'>
						<Slider {...settings} ref={moSlickRef} className='pf_slide'>
							{moSlideImg.map((item, index) =>(
								<div key={index}>
									<img src={item} alt={index+1+'번째 이미지'} />
								</div>
							))}
						</Slider>
					</div>
				</div>
				{/* slick arrow */}
				<div className='slick_arrow'>
					<button className='prev' onClick={moPrev}>이전</button>
					<button className='next' onClick={moNext}>다음</button>
				</div>
				{/*// slick arrorw */}
			</div>
		</div>
	);
};

export default FrameMo;