import React, { Component } from 'react';
import { ActivityIndicator, View } from 'react-native';

import { connect } from 'react-redux';
import { fetchQuiz, fetchQuizzes } from '../store/actions/index';
import Quiz from '../components/Quiz/Quiz';
import QuizSelect from '../components/Quiz/QuizSelect';
import { ScrollView } from 'react-native-gesture-handler';

class QuizzesScreen extends Component {
  componentDidMount() {
    const { fetchQuizzes, quizzes } = this.props;
    if (!quizzes.length) fetchQuizzes();
  }
  onValueChange = id => {
    const { fetchQuiz } = this.props;
    fetchQuiz(id);
  };
  render() {
    const { quiz, quizzes } = this.props;
    return (
      <ScrollView>
        {!quizzes.length ? (
          <ActivityIndicator />
        ) : (
          <QuizSelect onValueChange={this.onValueChange} quizzes={quizzes} />
        )}
        {quiz && <Quiz quiz={quiz} />}
      </ScrollView>
    );
  }
}

const mapStateToProps = state => {
  return {
    error: state.quizzes.error,
    isFetchingQuiz: state.quizzes.isFetchingQuiz,
    isFetchingQuizzes: state.quizzes.quizzes,
    quiz: state.quizzes.quiz,
    quizzes: state.quizzes.quizzes
  };
};

export default connect(
  mapStateToProps,
  { fetchQuiz, fetchQuizzes }
)(QuizzesScreen);
