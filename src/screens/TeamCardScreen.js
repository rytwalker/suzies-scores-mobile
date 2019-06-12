import React from 'react';
import { Dimensions, ScrollView, StyleSheet } from 'react-native';
import { colors } from '../utils';
import TeamCard from '../components/Team/TeamCard';

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

  const getLatestScores = scores => {
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

  return (
    <ScrollView style={styles.container}>
      <TeamCard
        item={item}
        getLatestScores={getLatestScores}
        roundData={roundData}
        screenWidth={screenWidth}
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20
  }
});
export default TeamCardScreen;
