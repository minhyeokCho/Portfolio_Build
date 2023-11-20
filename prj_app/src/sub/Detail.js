import React, { useCallback, useRef, useState } from 'react';
import { useParams} from 'react-router-dom';
import data from '../data';
import '../css/layout/sub.scss';

import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import IntroVisual from './IntroVisual';
import LiveBtn from './LiveBtn';
import IndexBtn from './IndexBtn';
import FramePC from './FramePC';
import FrameMo from './FrameMo';

const Detail = ({item}) => {
	const params = useParams();
	const itemId = params.id;

	const [type, setType] = useState(data[itemId].type) //타입
	const [titleList, setTitle] = useState(data[itemId].title) //타이틀
	const [colorCode, setColorCode] = useState(data[itemId].point); //포인트 색상
	const [date, setDate] = useState(data[itemId].date) //기간
	const [info, setInfo] = useState(data[itemId].infoList) //소개 정보
	const [introImg, setIntroImg] = useState(data[itemId].intro) //인트로 이미지
	const [moSlideImg, setMoSlideImg] = useState(data[itemId].mo_slide) //모바일 슬라이드 목업
	const [pcSlideImg, setPCSlideImg] = useState(data[itemId].pc_slide) //PC 슬라이드 목업
	const [liveHTML, setLiveHTML] = useState(data[itemId].LiveLink) //Live Link
	const [indexHTML, setIndexHTML] = useState(data[itemId].indexHTML) //Index Link

	return (
		<>
			<a href="/Portfolio_Build" title='BACK' className='close'>
				<div className='close_inner'><em className='num_01' style={{backgroundColor:colorCode}}></em><em className='num_02' style={{backgroundColor:colorCode}}></em><span>BACK</span></div>
			</a>
			<div className='sub_wrap'>
				{/* 인트로 이미지 영역 */}
				<div className='intro_img'>
					<IntroVisual introImg={introImg}/>
					<h2>{titleList}<br/>온라인 플랫폼 리뉴얼 구축</h2>
					<p></p>
					<span className='arrow'></span>
				</div>
				{/* // 인트로 이미지 영역 */}

				{/* Portfolio 정보 */}
				<div className='pf_info' style={{borderColor:colorCode}}>
					<div className='inner'>
						<h3>{titleList}</h3>

						<dl>
							<dt style={{borderColor:colorCode}}>TYPE</dt>
							<dd>{type}</dd>
						</dl>
						<dl>
							<dt style={{borderColor:colorCode}}>RELEASE DATE</dt>
							<dd>{date}</dd>
						</dl>
						<dl>
							<dt style={{borderColor:colorCode}}>소개</dt>
							<dd>
								<ul>
									{info.map((item, index) => (
										<li key={index}>
											{item}
										</li>
									))}
								</ul>
							</dd>
						</dl>

						{liveHTML ? <LiveBtn colorCode={colorCode} liveHTML={liveHTML}/> : null}
						{indexHTML ? <IndexBtn colorCode={colorCode} indexHTML={indexHTML}/> : null}
					</div>
				</div>
				{/* // Portfolio 정보 */}

				{pcSlideImg ? <FramePC pcSlideImg={pcSlideImg}/> : null}
				{moSlideImg ? <FrameMo moSlideImg={moSlideImg}/> : null}
			</div>
		</>
	);
};

export default Detail;