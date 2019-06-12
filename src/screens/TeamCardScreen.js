import React from 'react';
import { Dimensions, ScrollView, StyleSheet, Text, View } from 'react-native';
import PureChart from 'react-native-pure-chart';
import { Ionicons } from '@expo/vector-icons';
import { colors } from '../utils';

getLatestScores = scores => {
  const latestScores = [];
  let loopLength;

  if (scores.length >= 3) {
    loopLength = 3;
  } else if (scores.length === 2) {
    loopLength = 2;
  }
  if (loopLength) {
    for (let i = 0; i < loopLength; i++) {
      latestScores.push(scores[i]);
    }
  } else {
    latestScores.push(scores[0]);
  }
  return latestScores;
};

const TeamCardScreen = props => {
  const { item } = props.navigation.state.params;
  const screenWidth = Dimensions.get('window').width - 40;
  let roundData = [
    {
      color: `${colors.primary}`,
      data: [
        { x: 'R1', y: Math.round(item.average_r1_score * 10) / 10 },
        { x: 'R2', y: Math.round(item.average_r2_score * 10) / 10 },
        { x: 'R3', y: Math.round(item.average_r3_score * 10) / 10 },
        { x: 'R4', y: Math.round(item.average_r4_score * 10) / 10 },
        { x: 'R5', y: Math.round(item.average_r5_score * 10) / 10 },
        { x: 'R6', y: Math.round(item.average_r6_score * 10) / 10 },
        { x: 'R7', y: Math.round(item.average_r7_score * 10) / 10 },
        { x: 'R8', y: Math.round(item.average_r8_score * 10) / 10 }
      ]
    }
  ];

  return (
    <ScrollView style={styles.container}>
      <PureChart
        data={roundData}
        type="bar"
        height={220}
        defaultColumnWidth={25}
        defaultColumnMargin={13}
        numberOfYAxisGuideLine={16}
        width={screenWidth}
        backgroundColor={colors.white}
        highlightColor={colors.red}
        showEvenNumberXaxisLabel={false}
      />
      <View>
        <Text style={styles.headingText}>#winning</Text>
        <View style={styles.placesContainer}>
          <Text style={styles.placesText}>{item.first_place} 🥇</Text>
          <Text style={styles.placesText}>{item.second_place} 🥈</Text>
          <Text style={styles.placesText}>{item.third_place} 🥉</Text>
        </View>
        <Text style={styles.headingText}>Averages:</Text>
        <View style={styles.stats}>
          <Text style={styles.statsText}>
            <Text style={styles.statsNumberText}>
              {Math.round(item.average_score)}
            </Text>{' '}
            points
          </Text>
          <Text>
            <Ionicons
              size={35}
              name="ios-trending-up"
              color={colors.blackFaded}
            />
          </Text>
        </View>

        <View style={styles.stats}>
          <Text style={styles.statsText}>
            <Text style={styles.statsNumberText}>
              {(Math.round(item.average_percent_correct * 10) / 10).toFixed(1)}%
            </Text>{' '}
            correct
          </Text>
          <Text>
            <Ionicons
              size={35}
              name="ios-checkmark"
              color={colors.blackFaded}
            />
          </Text>
        </View>

        <View style={styles.stats}>
          <Text style={styles.statsText}>
            <Text style={styles.statsNumberText}>{item.games_played}</Text>{' '}
            quizzes played
          </Text>
          <Text>
            {' '}
            <Ionicons size={35} name="ios-play" color={colors.blackFaded} />
          </Text>
        </View>
      </View>
      <View>
        <Text style={styles.headingText}>Latest Scores:</Text>
        <View style={styles.latestScores}>
          {this.getLatestScores(item.scores).map(score => (
            <View style={styles.latestScore} key={score.id}>
              {/* <Text>⭐️</Text> */}
              <Text style={styles.latestScoreNumberText}>
                {score.total_points_scored}
              </Text>
              <Text style={styles.latestScoreDateText}>{score.quiz}</Text>
            </View>
          ))}
        </View>
        <Text style={styles.headingText}>Personal Bests:</Text>
        <View style={styles.stats}>
          <Text style={styles.statsText}>
            <Text style={styles.statsNumberText}>{item.high_score} </Text>
            High Score
          </Text>
          <Text>🏅</Text>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20
  },
  headingText: {
    fontWeight: '700',
    fontSize: 24,
    marginBottom: 10
  },
  placesContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20
  },
  placesText: {
    fontSize: 24,
    color: `${colors.primaryDark}`
  },
  stats: {
    backgroundColor: `${colors.primary}`,
    marginBottom: 20,
    borderRadius: 4,
    padding: 15,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  statsGrey: {
    backgroundColor: `${colors.lightGrey}`
  },
  statsText: {
    fontSize: 14,
    fontWeight: '700',
    color: `${colors.blackFaded}`
  },
  statsNumberText: {
    fontSize: 24,
    color: `${colors.white}`
  },
  latestScores: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20
  },
  latestScore: {
    justifyContent: 'space-between',
    alignItems: 'center'
    // borderRadius: 4,
    // borderColor: `${colors.primary}`,
    // borderStyle: 'solid',
    // borderWidth: 1,
    // padding: 10
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
export default TeamCardScreen;
