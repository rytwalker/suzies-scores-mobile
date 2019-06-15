import { combineReducers } from 'redux';
import { quizzesReducer as quizzes } from './quizzesReducer';
import { teamsReducer as teams } from './teamsReducer';

export default combineReducers({ quizzes, teams });
