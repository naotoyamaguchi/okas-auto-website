import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import reducerFunctionName from './reducers';
import './App.css';
import App from './components/App';
import Nav from './components/Nav';
import Footer from './components/Footer';
import TestComponent from './components/TestComponent';
import Contact from './components/Contact';
import Appointment from './components/Appointment';
import Faq from './components/Faq';
import Community from './components/Community';
// import browserHistory from 'react-router';
import {
  BrowserRouter,
  Route
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
			<div className="root-container">
				<Nav />
				<Route exact path="/" component={App} />
				<Route exact path="/test" component={TestComponent} />
				<Route exact path="/contact" component={Contact} />
				<Route exact path="/appointment" component={Appointment} />
				<Route exact path="/faq" component={Faq} />
				<Route exact path="/community" component={Community} />
				<Footer />
			</div>

		</BrowserRouter>
	</Provider>, 
	document.getElementById('root')
);
registerServiceWorker();
