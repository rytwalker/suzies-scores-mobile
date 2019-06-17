import React from 'react';
import { FlatList } from 'react-native';
import Team from './Team';

const TeamList = ({ handlePress, teams }) => {
  return (
    <FlatList
      data={teams}
      renderItem={({ item, index }) => {
        return (
          <Team
            team={{ ...item, rank: index + 1 }}
            index={index}
            handleTeamPress={() => handlePress(item)}
          />
        );
      }}
      keyExtractor={item => item.id.toString()}
    />
  );
};

export default TeamList;
