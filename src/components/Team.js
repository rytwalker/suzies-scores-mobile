import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { colors } from '../utils';

const isRankOdd = rank => rank % 2 !== 0;

const Team = ({ handleTeamPress, index, team }) => {
  if (index === 0) {
    team.rank = '🥇';
  } else if (index === 1) {
    team.rank = '🥈';
  } else if (index === 2) {
    team.rank = '🥉';
  } else {
    team.rank = team.rank + '.';
  }
  return (
    <TouchableOpacity onPress={handleTeamPress}>
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
          <Text style={styles.rankText}>{team.rank && team.rank}</Text>
        </View>
        <View style={styles.teamName}>
          <Text style={styles.teamNameText}>
            {team.team_name.length > 20
              ? team.team_name.slice(0, 20) + '...'
              : team.team_name}
          </Text>
        </View>
        <View style={styles.averageScore}>
          <Text style={styles.averageScoreText}>
            {Math.ceil(team.average_score)}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 20
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
    backgroundColor: `${colors.primaryDark}`,
    height: 60,
    width: 60,
    borderRadius: 50,
    textAlign: 'center',
    alignItems: 'center',
    justifyContent: 'center'
  },
  averageScoreText: {
    color: `${colors.primaryLight}`,
    fontWeight: '700',
    fontSize: 30
  }
});

export default Team;
