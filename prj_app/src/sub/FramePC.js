import React, { useCallback, useRef } from 'react';
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const FramePC = ({pcSlideImg}) => {
	const settings = {
		infinite: true,
		speed: 1000,
		slidesToShow: 1,
		slidesToScroll: 1,
		variableWidth: true,
		arrows : false,
	}

	// slick arrow
	const pcSlickRef = useRef()
	const pcPrev = useCallback(() => pcSlickRef.current.slickPrev(),[])
	const pcNext = useCallback(() => pcSlickRef.current.slickNext(),[])

	return (
		<div className='pf_sec'>
			<div className='frame frame_pc'>
				<figure className='frame_img'>
					<img src="/Portfolio_Build/img/frame_pc.png" alt="" />
				</figure>
				<div className='frame_inner'>
					<div className='scroll_area'>
						<Slider {...settings} ref={pcSlickRef} className='pf_slide'>
							{pcSlideImg.map((item, index) =>(
								<div key={index}>
									<img src={item} alt={index+1+'번째 이미지'} />
								</div>
							))}
						</Slider>
					</div>

				</div>
			</div>

			{/* slick arrow */}
			<div className='slick_arrow pc_arr'>
				<button className='prev' onClick={pcPrev}>이전</button>
				<button className='next' onClick={pcNext}>다음</button>
			</div>
			{/*// slick arrorw */}
		</div>
	);
};

export default FramePC;