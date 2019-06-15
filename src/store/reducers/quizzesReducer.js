import {
  FETCHING_QUIZZES,
  FETCHING_QUIZZES_SUCCESS,
  FETCHING_QUIZZES_FAILURE,
  FETCHING_QUIZ,
  FETCHING_QUIZ_SUCCESS,
  FETCHING_QUIZ_FAILURE
} from '../actions';

const initalState = {
  error: null,
  isFetchingQuiz: false,
  isFetchingQuizzes: false,
  quizzes: [],
  quiz: null
};

export const quizzesReducer = (state = initalState, action) => {
  switch (action.type) {
    case FETCHING_QUIZZES:
      return { ...state, isFetchingQuizzes: true };
    case FETCHING_QUIZZES_SUCCESS:
      return {
        ...state,
        quizzes: [...action.payload],
        isFetchingQuizzes: false
      };
    case FETCHING_QUIZZES_FAILURE:
      return {
        ...state,
        error: action.payload,
        isFetchingQuizzes: false
      };
    case FETCHING_QUIZ:
      return { ...state, isFetchingQuiz: true };
    case FETCHING_QUIZ_SUCCESS:
      return {
        ...state,
        quiz: { ...action.payload },
        isFetchingQuiz: false
      };
    case FETCHING_QUIZ_FAILURE:
      return {
        ...state,
        error: action.payload,
        isFetchingQuiz: false
      };
    default:
      return state;
  }
};
