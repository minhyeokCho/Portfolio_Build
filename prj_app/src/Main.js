import React from 'react';
import './css/index.scss';
import Card from './main/components/Card';
import Edit from './main/components/Edit';
import List from './main/components/List';
import Head from './main/components/Header';
import UtilBtn from './UtilBtn';

const Main = () => {
	return (
		<>
			<Head/>
			<div id='contents'>
				<Card/>
				<List/>
				<Edit/>
			</div>
			<UtilBtn/>
		</>
	);
};

export default Main;