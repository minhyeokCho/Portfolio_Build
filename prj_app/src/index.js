import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import Main from './Main';
import Router from './Router';

const root = ReactDOM.createRoot(document.getElementById('wrap'));
root.render(
	<React.StrictMode>
		<Router/>
	</React.StrictMode>
);

reportWebVitals();
