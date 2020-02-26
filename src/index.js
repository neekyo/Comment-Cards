import React from 'react';
import ReactDOM from 'react-dom';
import CommentDetail from './components/CommentDetail';

const App = () => {
	return <CommentDetail />;
};

ReactDOM.render(<App />, document.querySelector('#root'));
