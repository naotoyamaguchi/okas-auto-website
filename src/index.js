import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import reducerFunctionName from './reducers';
import './App.css';
import App from './components/App';

import {
  BrowserRouter
} from 'react-router-dom';
import registerServiceWorker from './registerServiceWorker';

let store = createStore(
  reducerFunctionName,
  // ^^ if we end up using a reducer for redux, this is where we would apply it.
  // See buoycall reducer js file for example or look in ./reducers
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(ReduxThunk)
);

ReactDOM.render(
	<Provider store={store}>
		<BrowserRouter>
			<App />
		</BrowserRouter>
	</Provider>, 
	document.getElementById('root')
);
registerServiceWorker();
