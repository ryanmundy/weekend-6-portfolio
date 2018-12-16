import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App.js';
import registerServiceWorker from './registerServiceWorker';
import { createStore, combineReducers, applyMiddleware } from 'redux';
// Provider allows us to use redux within our react app
import { Provider } from 'react-redux';
import logger from 'redux-logger';
// Import saga middleware
import createSagaMiddleware from 'redux-saga';
import { takeEvery, call, put as dispatch } from 'redux-saga/effects';
import axios from 'axios';

//axios call to GET projects off db
function* fetchProjects() {
    console.log('in fetchProjects');
    try {
        const projectList = yield call(axios.get, '/projects');
        yield dispatch({ type: 'SET_PROJECTS', payload: projectList.data });
    } catch (error) {
        console.log(error);
        yield alert('Error creating project')
    }
}//end fetchProjects

function* addProject(action) {
    console.log('in addProject');
    try {
        yield call(axios.post, '/projects', action.payload);
        yield alert('Successfully created project!')
        yield dispatch({ type: 'FETCH_PROJECTS' });
    } catch (error) {
        console.log(error);
        yield alert('Error creating project')
    }
}//end addProject

function* deleteProject(action) {
    console.log('in deleteProject');
    try {
        yield call(axios.delete, `/projects/${action.payload}`);
        yield alert('Successfully deleted project!')
        yield dispatch({ type: 'FETCH_PROJECTS' });
    } catch (error) {
        console.log(error);
        yield alert('Error deleting project')
    }
}//end deleteProject

function* fetchTags() {
    console.log('in fetchTags');
    try {
        const tagList = yield call(axios.get, '/tags');
        yield dispatch({ type: 'SET_TAGS', payload: tagList.data });
    } catch (error) {
        console.log(error);
        yield alert('Error getting tags')
    }
}//end fetchTags

function* addTag(action) {
    console.log('in addTag');
    try {
        yield call(axios.post, '/tags', action.payload);
        yield alert('Successfully created tag!')
        yield dispatch({ type: 'FETCH_TAGS' });
    } catch (error) {
        console.log(error);
        yield alert('Error creating project')
    }
}//end addProject

// Create the rootSaga generator function
function* rootSaga() {
    yield takeEvery('FETCH_PROJECTS', fetchProjects);
    yield takeEvery('ADD_PROJECT', addProject);
    yield takeEvery('DELETE_PROJECT', deleteProject);
    yield takeEvery('FETCH_TAGS', fetchTags);
    yield takeEvery('ADD_TAG', addTag);
}

// Create sagaMiddleware
const sagaMiddleware = createSagaMiddleware();

// Used to store projects returned from the server
const projects = (state = [], action) => {
    switch (action.type) {
        case 'SET_PROJECTS':
            return action.payload;
        default:
            return state;
    }
}

// Used to store the project tags (e.g. 'React', 'jQuery', 'Angular', 'Node.js')
const tags = (state = [], action) => {
    switch (action.type) {
        case 'SET_TAGS':
            return action.payload;
        default:
            return state;
    }
}

// Create one store that all components can use
const storeInstance = createStore(
    combineReducers({
        projects,
        tags,
    }),
    // Add sagaMiddleware to our store
    applyMiddleware(sagaMiddleware, logger),
);

// Pass rootSaga into our sagaMiddleware
sagaMiddleware.run(rootSaga);

ReactDOM.render(<Provider store={storeInstance}><App /></Provider>,
    document.getElementById('root'));
registerServiceWorker();
