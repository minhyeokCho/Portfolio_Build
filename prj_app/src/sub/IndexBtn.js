import React from 'react';

const IndexBtn = ({indexHTML, colorCode}) => {
	return (
		<div className='btn_wrap'>
			<a href={indexHTML} className="btn" style={{borderColor:colorCode}} target='_blank'>
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
				<span>INDEX 바로가기</span>
			</a>
		</div>
	);
};

export default IndexBtn;