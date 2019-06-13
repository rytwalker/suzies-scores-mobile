import axios from 'axios';
import {
  FETCHING_TEAMS,
  FETCHING_TEAMS_FAILURE,
  FETCHING_TEAMS_SUCCESS,
  FETCHING_LEADERBOARD_TEAMS,
  FETCHING_LEADERBOARD_TEAMS_FAILURE,
  FETCHING_LEADERBOARD_TEAMS_SUCCESS
} from './actionTypes';

export const fetchTeams = () => dispatch => {
  dispatch({ type: FETCHING_TEAMS });
  axios
    .get('https://suzies-quiz-scores.herokuapp.com/api/teams')
    .then(res => {
      dispatch({ type: FETCHING_TEAMS_SUCCESS, payload: res.data });
    })
    .catch(err => {
      dispatch({ type: FETCHING_TEAMS_FAILURE, payload: err });
    });
};

export const fetchLeaderboardTeams = () => dispatch => {
  dispatch({ type: FETCHING_LEADERBOARD_TEAMS });
  axios
    .get('https://suzies-quiz-scores.herokuapp.com/api/leaderboard')
    .then(res => {
      dispatch({ type: FETCHING_LEADERBOARD_TEAMS_SUCCESS, payload: res.data });
    })
    .catch(err => {
      dispatch({ type: FETCHING_LEADERBOARD_TEAMS_FAILURE, payload: err });
    });
};
