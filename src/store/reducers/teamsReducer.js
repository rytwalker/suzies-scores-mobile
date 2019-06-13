import {
  FETCHING_TEAMS,
  FETCHING_TEAMS_FAILURE,
  FETCHING_TEAMS_SUCCESS,
  FETCHING_LEADERBOARD_TEAMS,
  FETCHING_LEADERBOARD_TEAMS_FAILURE,
  FETCHING_LEADERBOARD_TEAMS_SUCCESS
} from '../actions/actionTypes';

const initalState = {
  teams: [],
  leaderboard: [],
  isFetching: false,
  error: null
};

export const teamsReducer = (state = initalState, action) => {
  switch (action.type) {
    case FETCHING_TEAMS:
    case FETCHING_LEADERBOARD_TEAMS:
      return {
        ...state,
        isFetching: true
      };
    case FETCHING_TEAMS_FAILURE:
    case FETCHING_LEADERBOARD_TEAMS_FAILURE:
      return {
        ...state,
        error: action.payload,
        isFetching: false
      };
    case FETCHING_TEAMS_SUCCESS:
      return {
        ...state,
        teams: action.payload,
        isFetching: false
      };

    case FETCHING_LEADERBOARD_TEAMS_SUCCESS:
      return {
        ...state,
        leaderboard: action.payload,
        isFetching: false
      };
    default:
      return state;
  }
};
