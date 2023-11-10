import React, { useState } from 'react';
import { useParams} from 'react-router-dom';
import data from '../data';
import '../css/layout/sub.scss';

import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Head from '../main/components/Header';

const Detail = ({item}) => {
	const params = useParams();
	const itemId = params.id;
	const [dataList, setDataList] = useState(data);
	const info = dataList[itemId];
	const [colorCode, setColorCode] = useState(data[itemId].point);

	const settings = {
		infinite: true,
		speed: 1000,
		slidesToShow: 1,
		slidesToScroll: 1,
		variableWidth: true,
		arrows : true,
	}

	return (
		<>
			<a href="/" title='BACK' className='close'>
				<div className='close_inner'><em className='num_01' style={{backgroundColor:colorCode}}></em><em className='num_02' style={{backgroundColor:colorCode}}></em><span>BACK</span></div>
			</a>
			<div className='sub_wrap'>
				{/* 인트로 이미지 영역 */}
				<div className='intro_img'>
					<figure>
						<img src="/img/temp_02.jpg" alt="" />
					</figure>
					<h2>SK렌터카 UI/UX<br/>온라인 플랫폼 리뉴얼 구축</h2>
					<p></p>
					<span className='arrow'></span>
				</div>
				{/* // 인트로 이미지 영역 */}

				{/* Portfolio 정보 */}
				<div className='pf_info' style={{borderColor:colorCode}}>
					<div className='inner'>
						<h3>SK렌터카 UI/UX 온라인 플랫폼 리뉴얼 구축</h3>

						<dl>
							<dt style={{borderColor:colorCode}}>TYPE</dt>
							<dd>WEB / MOBILE / APP</dd>
						</dl>
						<dl>
							<dt style={{borderColor:colorCode}}>RELEASE DATE</dt>
							<dd>2023.05</dd>
						</dl>
						<dl>
							<dt style={{borderColor:colorCode}}>소개</dt>
							<dd>
								<ul>
									<li>예약-대여-반납 전과정 온라인 내재화하여 SK렌터카만의 경험을 제공하였습니다. </li>
									<li>트렌디한 비주얼과 SK렌터카 만의 보이스톤 제공하고 사용이 복잡하고 난해한 화면들은 과감히 개선하였습니다.</li>
								</ul>
							</dd>
						</dl>

						<a href="#" className="btn" style={{borderColor:colorCode}}>
							<i style={{backgroundColor:colorCode}}></i>
							<i style={{backgroundColor:colorCode}}></i>
							<i style={{backgroundColor:colorCode}}></i>
							<i style={{backgroundColor:colorCode}}></i>
							<i style={{backgroundColor:colorCode}}></i>
							<i style={{backgroundColor:colorCode}}></i>
							<i style={{backgroundColor:colorCode}}></i>
							<i style={{backgroundColor:colorCode}}></i>
							<i style={{backgroundColor:colorCode}}></i>
							<i style={{backgroundColor:colorCode}}></i>
							<span>바로가기</span>
						</a>
					</div>
				</div>
				{/* // Portfolio 정보 */}

				{/* Portfolio 이미지 */}
				<div className='pf_sec'>
					<div className='frame frame_pc'>
						<figure className='frame_img'>
							<img src="/img/frame_pc.png" alt="" />
						</figure>
						<div className='frame_inner'>
							<div className='scroll_area'>
								<Slider {...settings} className='pf_slide'>
									<div>
										<img src="https://www.wylie.co.kr/images/creative/portfolio/sk_rent/img_section02.png" alt="" />
									</div>
									<div>
										<img src="https://www.wylie.co.kr/images/creative/portfolio/sk_rent/img_section04.png" alt="" />
									</div>
									<div>
										<img src="https://www.wylie.co.kr/images/creative/portfolio/sk_rent/img_section03.png" alt="" />
									</div>
								</Slider>
							</div>

						</div>
					</div>
				</div>
				{/* // Portfolio 이미지 */}

				{/* Portfolio 이미지 */}
				<div className='pf_sec'>
					<div className='frame frame_mo'>
						<figure className='frame_img'>
							<img src="/img/frame_mo.png" alt="" />
						</figure>
						<div className='frame_inner'>
							<div className='scroll_area'>
								<Slider {...settings} className='pf_slide'>
									<div>
										<img src="https://www.wylie.co.kr/images/creative/portfolio/sk_rent/img_section02.png" alt="" />
									</div>
									<div>
										<img src="https://www.wylie.co.kr/images/creative/portfolio/sk_rent/img_section04.png" alt="" />
									</div>
									<div>
										<img src="https://www.wylie.co.kr/images/creative/portfolio/sk_rent/img_section03.png" alt="" />
									</div>
								</Slider>
							</div>

						</div>
					</div>
				</div>
				{/* // Portfolio 이미지 */}

			</div>
		</>
	);
};

export default Detail;