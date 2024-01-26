import React, { useState } from 'react';
import data from '../../data.js'
import { Link } from 'react-router-dom';
import Tag from './Tag.js';


const List = () => {
	// 데이터
	const [dataList, setDataList] = useState(data);

	// 탭
	const [tabActive, setTabActive] = useState(0)
	const tab = [
		{name:'ALL'},
		{name:'Web'},
		{name:'APP'},
		{name:'Hybrid'},
	]
	const tabFilter = (index, name) => {
		setTabActive(index)
		if(name === 'ALL'){
			setDataList(data)
			return
		}
		const filtering = data.filter((list) => list.type == name)
		setDataList(filtering)
	}

	return (
		<section className='pf_list'>
			<div className='inner'>
				<div className='tit_wrap'>
					<h2>Project</h2>
				</div>
				<div className='tab'>
					<ul>
						{tab.map((item, index) => (
							<li key = {index} className={index === tabActive ? 'active':''}>
								<a href="#n" onClick={() => tabFilter(index, item.name)}>{item.name}</a>
							</li>
						))}
					</ul>
				</div>
				<div className='list_wrap'>
					<div className='cards'>
						{dataList.map((item, index) => (
							<div className='card' key={index}>
								<Link key={index} to={`/detail/${index}`} className='card_img' >
									<div className='card_inner'>
										<img src={item.url} alt={item.title} />
									</div>
									<Tag tag={item.tag} />
									<h3>{item.title}</h3>
									{/* <p>{item.type}</p> */}
								</Link>
							</div>
						))}
					</div>
				</div>
			</div>
		</section>
	);
};

export default List;