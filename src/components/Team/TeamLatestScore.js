import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { colors } from '../../utils';

const TeamLatestScore = ({ points, quizDate }) => {
  return (
    <View style={styles.latestScore}>
      <Text style={styles.latestScoreNumberText}>{points}</Text>
      <Text style={styles.latestScoreDateText}>{quizDate}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  latestScore: {
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  latestScoreNumberText: {
    borderRadius: 4,
    borderColor: `${colors.primary}`,
    borderStyle: 'solid',
    borderWidth: 1,
    fontSize: 24,
    color: `${colors.primary}`,
    fontWeight: '700',
    padding: 20,
    marginBottom: 5
  },
  latestScoreDateText: {
    fontSize: 12,
    color: `${colors.blackFaded}`,
    fontWeight: '700'
  }
});

export default TeamLatestScore;
