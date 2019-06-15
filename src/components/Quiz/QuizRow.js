import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { colors } from '../../utils';

const isRankOdd = rank => rank % 2 !== 0;

const QuizRow = ({ item, index }) => {
  if (index === 0) {
    item.rank = '🥇';
  } else if (index === 1) {
    item.rank = '🥈';
  } else if (index === 2) {
    item.rank = '🥉';
  } else {
    item.rank = index + 1 + '.';
  }
  return (
    <View
      style={[
        styles.container,
        {
          backgroundColor: isRankOdd(index)
            ? `${colors.white}`
            : `${colors.primaryLight}`
        }
      ]}
    >
      <View style={styles.rank}>
        <Text style={styles.rankText}>{item.rank}</Text>
      </View>
      <View style={styles.teamName}>
        <Text style={styles.teamNameText}>{item.team}</Text>
      </View>
      <View style={styles.averageScore}>
        <Text style={styles.averageScoreText}>{item.total_points_scored}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10
  },
  rank: {
    marginRight: 20
  },
  rankText: {
    fontSize: 18,
    fontWeight: '700'
  },
  teamName: {
    marginRight: 'auto'
  },
  teamNameText: {
    fontSize: 18,
    fontWeight: '700'
  },
  averageScore: {
    textAlign: 'center',
    alignItems: 'center',
    justifyContent: 'center'
  },
  averageScoreText: {
    color: `${colors.primaryDark}`,
    fontWeight: '700',
    fontSize: 30
  }
});
export default QuizRow;
