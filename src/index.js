import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import './index.css';
import QuestionPagePaper from './components/QuestionPagePaper';

ReactDOM.render(<App/>, document.getElementById('root'));
registerServiceWorker();
