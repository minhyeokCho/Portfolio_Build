import React from 'react';

const Tag = ({tag}) => {
	const tagList = tag.map((tags, index) => (<li key={index}>{tags}</li>))
	return (
		<>
			<ul className='tag'>{tagList}</ul>
		</>
	);
};

export default Tag;