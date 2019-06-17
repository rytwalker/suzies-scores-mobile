import React, { Component } from 'react';
import { FlatList, ActivityIndicator, Text, View } from 'react-native';
import { Button, Form, Item, Input } from 'native-base';
import { connect } from 'react-redux';
import { fetchTeams } from '../store/actions/index';
import Team from '../components/Team/Team';
import { colors } from '../utils';
import TeamSearchForm from '../components/Team/TeamSearchForm';

class TeamsScreen extends Component {
  state = {
    showTeams: false
  };

  handleFetchTeams = () => {
    const { fetchTeams } = this.props;
    this.setState({ showTeams: true }, () => fetchTeams());
  };

  searchTeams = team => {
    const { fetchTeams } = this.props;
    const queryString = `?search=${team
      .toLowerCase()
      .trim()
      .split(' ')
      .join('+')}`;
    console.log(queryString);
    this.setState({ showTeams: true }, () => fetchTeams(queryString));
  };

  render() {
    const { teams } = this.props;
    return (
      <React.Fragment>
        <View style={{ padding: 20 }}>
          <TeamSearchForm searchTeams={this.searchTeams} />
          <View style={{ margin: 20 }}>
            <Text style={{ textAlign: 'center' }}>Or</Text>
          </View>
          <Button
            style={{
              backgroundColor: `${colors.blackFaded}`
            }}
            block
            onPress={this.handleFetchTeams}
          >
            <Text
              style={{
                color: `${colors.white}`
              }}
            >
              See all teams
            </Text>
          </Button>
        </View>
        {this.state.showTeams && (
          <View>
            {!teams.length ? (
              <ActivityIndicator />
            ) : (
              <FlatList
                data={teams}
                renderItem={({ item, index }) => {
                  return (
                    <Team
                      team={{ ...item, rank: index + 1 }}
                      index={index}
                      handleTeamPress={() =>
                        this.props.navigation.navigate('TeamCard', { item })
                      }
                    />
                  );
                }}
                keyExtractor={item => item.id.toString()}
              />
            )}
          </View>
        )}
      </React.Fragment>
    );
  }
}
const mapStateToProps = state => {
  return {
    teams: state.teams.teams,
    error: state.teams.error,
    isFetching: state.teams.isFetching
  };
};

export default connect(
  mapStateToProps,
  { fetchTeams }
)(TeamsScreen);
