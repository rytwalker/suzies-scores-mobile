import React, { Component } from 'react';
import { FlatList, ActivityIndicator } from 'react-native';
import { connect } from 'react-redux';
import { fetchTeams } from '../store/actions/index';
import Team from '../components/Team/Team';

class LeaderboardScreen extends Component {
  componentDidMount() {
    const { fetchTeams, teams } = this.props;
    if (!teams.length) fetchTeams();
  }
  render() {
    const { teams } = this.props;
    return (
      <React.Fragment>
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
)(LeaderboardScreen);
