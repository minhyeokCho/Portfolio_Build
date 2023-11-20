import React from 'react';

const Tag = ({tag}) => {
	console.log(tag);
	const tagList = tag.map((tags) => (<li>{tags}</li>))
	return (
		<>
			<ul className='tag'>{tagList}</ul>
		</>
	);
};

export default Tag;