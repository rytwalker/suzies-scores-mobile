import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { colors } from '../../utils';
import TeamRoundChart from './TeamRoundChart';
import TeamStat from './TeamStat';
import TeamLatestScore from './TeamLatestScore';

const TeamCard = ({ getLatestScores, item, roundData, screenWidth }) => {
  return (
    <>
      <TeamRoundChart roundData={roundData} screenWidth={screenWidth} />
      <>
        <Text style={styles.headingText}>#winning</Text>
        <View style={styles.placesContainer}>
          <Text style={styles.placesText}>{item.first_place} 🥇</Text>
          <Text style={styles.placesText}>{item.second_place} 🥈</Text>
          <Text style={styles.placesText}>{item.third_place} 🥉</Text>
        </View>
        <Text style={styles.headingText}>Averages:</Text>
        <TeamStat
          iconName="ios-trending-up"
          statData={Math.round(item.average_score)}
          statText="points"
        />
        <TeamStat
          iconName="ios-checkmark"
          statData={
            (Math.round(item.average_percent_correct * 10) / 10).toFixed(1) +
            '%'
          }
          statText="correct"
        />
        <TeamStat
          iconName="ios-play"
          statData={item.games_played}
          statText="quizzes played"
        />
      </>
      <View>
        <Text style={styles.headingText}>Latest Scores:</Text>
        <View style={styles.latestScores}>
          {getLatestScores(item.scores).map(score => (
            <TeamLatestScore
              key={score.id}
              points={score.total_points_scored}
              quizDate={score.quiz}
            />
          ))}
        </View>

        <Text style={styles.headingText}>Personal Bests:</Text>
        <TeamStat
          iconName="ios-ribbon"
          statData={item.high_score}
          statText="high score"
        />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
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

export default TeamCard;
