import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from './Main';
import Detail from './sub/Detail';


const Router = () => {
	return (
		<BrowserRouter>
			<Routes>
				{/* useParams */}
				<Route path="/" element={<Main/>}/>
				<Route path="/detail/:id" element={<Detail/>}/>
			</Routes>
		</BrowserRouter>
	);
};

export default Router;