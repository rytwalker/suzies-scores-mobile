import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { colors } from '../../utils';

const TeamStat = ({
  iconColor = colors.blackFaded,
  iconName,
  iconSize = 35,
  statData,
  statText
}) => {
  return (
    <View style={styles.stats}>
      <Text style={styles.statsText}>
        <Text style={styles.statsNumberText}>{statData}</Text> {statText}
      </Text>
      <Text>
        <Ionicons size={iconSize} name={iconName} color={iconColor} />
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
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
  }
});

export default TeamStat;
