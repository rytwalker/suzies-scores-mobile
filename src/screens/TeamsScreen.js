import React, { Component } from 'react';
import { FlatList, ActivityIndicator, Text, View } from 'react-native';
import { Button } from 'native-base';
import { connect } from 'react-redux';
import { fetchTeams } from '../store/actions/index';
import Team from '../components/Team/Team';
import { colors } from '../utils';
import TeamSearchForm from '../components/Team/TeamSearchForm';
import TeamList from '../components/Team/TeamList';

class TeamsScreen extends Component {
  state = {
    showTeams: false
  };

  handleFetchTeams = () => {
    const { fetchTeams } = this.props;
    this.setState({ showTeams: true }, () => fetchTeams());
  };

  handlePress = item => this.props.navigation.navigate('TeamCard', { item });

  searchTeams = team => {
    const { fetchTeams } = this.props;
    const queryString = `?search=${team
      .toLowerCase()
      .trim()
      .split(' ')
      .join('+')}`;
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
            {!teams ? (
              <ActivityIndicator />
            ) : teams.length ? (
              <TeamList handlePress={this.handlePress} teams={teams} />
            ) : (
              <Text>Couldn't find what you were looking for!</Text>
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
