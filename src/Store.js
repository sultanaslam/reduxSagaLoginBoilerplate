import {createStore, applyMiddleware} from 'redux';
import rootReducer from './reducers'
import rootSaga from './sagas';
import createHistory from 'history/createBrowserHistory';
import logger from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import {routerMiddleware} from 'react-router-redux';

const history = createHistory();
const middleware = routerMiddleware(history);

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  rootReducer,
  process.env.NODE_ENV !== 'production' &&
    window.devToolsExtension &&
    window.devToolsExtension(),
  process.env.NODE_ENV !== 'production'
    ? applyMiddleware(middleware, sagaMiddleware, logger)
    : applyMiddleware(middleware, sagaMiddleware)
);

sagaMiddleware.run(rootSaga);

export default store;