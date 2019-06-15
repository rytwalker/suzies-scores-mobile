import React from 'react';
import { Dimensions, View } from 'react-native';
import { Picker } from 'native-base';
import { colors } from '../../utils';

const QuizSelect = ({ quizzes, onValueChange }) => {
  const pickerWidth = Dimensions.get('screen').width - 40;
  return (
    <View style={{ padding: 20 }}>
      <Picker
        style={{
          width: pickerWidth,
          backgroundColor: `${colors.primary}`,
          height: 60
        }}
        mode="dropdown"
        onValueChange={onValueChange}
        placeholder="Select a quiz"
        placeholderStyle={{
          color: `${colors.white}`,
          textAlign: 'center',
          fontWeight: '700',
          fontSize: 18
        }}
        note={false}
      >
        {quizzes.map(quiz => (
          <Picker.Item
            label={quiz.scores[0].quiz}
            key={quiz.id}
            value={quiz.id}
          />
        ))}
      </Picker>
    </View>
  );
};

export default QuizSelect;
