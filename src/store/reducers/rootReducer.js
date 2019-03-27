import { combineReducers } from 'redux';
// custom Reducers
import authReducer from './authReducer';
import projectReducer from './projectReducer';
// firestore Reducer
import { firestoreReducer } from 'redux-firestore';
 
const rootReducer = combineReducers({
    auth: authReducer,
    project: projectReducer,
    firestore: firestoreReducer
})

export default rootReducer;