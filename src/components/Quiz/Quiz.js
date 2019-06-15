import React from 'react';
import { FlatList, View, Text, StyleSheet } from 'react-native';
import QuizRow from './QuizRow';

const Quiz = ({ quiz }) => {
  return (
    <View>
      <Text style={styles.dateText}>{quiz.scores[0].quiz}</Text>
      <FlatList
        data={quiz.scores}
        renderItem={({ item, index }) => {
          return <QuizRow item={item} index={index} />;
        }}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  dateText: {
    padding: 10,
    fontSize: 18,
    fontWeight: '700'
  }
});

export default Quiz;
