import axios from 'axios';
import {
  FETCHING_TEAMS,
  FETCHING_TEAMS_FAILURE,
  FETCHING_TEAMS_SUCCESS
} from './actionTypes';

// export const fetchTeams = async () => async dispatch => {
//   dispatch({ type: FETCHING_TEAMS });
//   try {
//     const res = await axios.get(
//       'https://suzies-scores.herokuapp.com/api/teams'
//     );
//     await dispatch({ type: FETCHING_TEAMS_SUCCESS, payload: res.data });
//   } catch (err) {
//     dispatch({ type: FETCHING_TEAMS_FAILURE, payload: err });
//   }
// };

export const fetchTeams = () => dispatch => {
  dispatch({ type: FETCHING_TEAMS });
  axios
    .get('https://suzies-quiz-scores.herokuapp.com/api/leaderboard')
    .then(res => {
      dispatch({ type: FETCHING_TEAMS_SUCCESS, payload: res.data });
    })
    .catch(err => {
      dispatch({ type: FETCHING_TEAMS_FAILURE, payload: err });
    });
};
