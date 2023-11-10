import React, { useState } from 'react';
import data from '../../data.js'
import { Link } from 'react-router-dom';


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
					<h2>List</h2>
				</div>
				<div className='tab'>
					<ul>
						{tab.map((item, index) => (
							<li key = {index} className={index === tabActive ? 'active':''}>
								<a href="#" onClick={() => tabFilter(index, item.name)}>{item.name}</a>
							</li>
						))}
					</ul>
				</div>
				<div className='list_wrap'>
					<div className='cards'>
						{dataList.map((item, index) => (
							<div className='card' key={index}>
								<div className='card_inner'>
									<Link key={index} to={`/detail/${index}`} className='card_img' data={data}><img src={item.url} alt="" /></Link>
								</div>
								<h3>{item.title}</h3>
								<p>{item.type}</p>
							</div>
						))}
					</div>
				</div>
			</div>
		</section>
	);
};

export default List;