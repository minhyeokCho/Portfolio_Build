import React from 'react';

const LiveBtn = ({colorCode, liveHTML}) => {
	return (
		<div className='btn_wrap'>
			<a href={liveHTML} className="btn" style={{borderColor:colorCode}} target='_blank'>
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
	);
};

export default LiveBtn;