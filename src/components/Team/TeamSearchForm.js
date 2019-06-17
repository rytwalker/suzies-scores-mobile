import React, { useState } from 'react';
import { Text } from 'react-native';
import { Button, Form, Input, Item } from 'native-base';
import { colors } from '../../utils';

const TeamSearchForm = ({ searchTeams }) => {
  const [team, setTeam] = useState('');
  const handleSearch = () => {
    searchTeams(team);
    setTeam('');
  };
  return (
    <Form>
      <Item last>
        <Input
          placeholder="Search by teamname"
          value={team}
          onChangeText={team => setTeam(team)}
        />
      </Item>
      <Button
        style={{
          backgroundColor: `${colors.blackFaded}`
        }}
        block
        onPress={handleSearch}
      >
        <Text
          style={{
            color: `${colors.white}`
          }}
        >
          Search
        </Text>
      </Button>
    </Form>
  );
};

export default TeamSearchForm;
