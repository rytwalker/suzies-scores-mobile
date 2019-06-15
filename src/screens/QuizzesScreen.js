import React, { Component } from 'react';
import { FlatList, ActivityIndicator, View, Text } from 'react-native';
import { Picker } from 'native-base';
import { connect } from 'react-redux';
import { fetchQuiz, fetchQuizzes } from '../store/actions/index';

class QuizzesScreen extends Component {
  componentDidMount() {
    const { fetchQuizzes, quizzes } = this.props;
    if (!quizzes.length) fetchQuizzes();
  }
  onValueChange = value => {
    this.setState({
      selected: value
    });
  };
  render() {
    const { quiz, quizzes } = this.props;
    return (
      <React.Fragment>
        {!quizzes.length ? (
          <ActivityIndicator />
        ) : (
          <Picker
            style={{ width: 120 }}
            mode="dropdown"
            selectedValue={'hello'}
            onValueChange={this.onValueChange}
          >
            {quizzes.map(quiz => (
              <Picker.Item
                label={quiz.created_at}
                key={quiz.id}
                value={quiz.id}
              />
            ))}
          </Picker>
        )}
        {/* {!quiz ? (
          <ActivityIndicator />
        ) : (
          <FlatList
            data={quiz.scores}
            renderItem={({ item, index }) => {
              return (
                <View>
                  <Text>{index + 1}</Text>
                  <Text>{item.team}</Text>
                  <Text>{item.total_points_scored}</Text>
                </View>
              );
            }}
            keyExtractor={item => item.score.id}
          />
        )} */}
      </React.Fragment>
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
