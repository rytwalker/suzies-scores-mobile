import React from 'react';
import {
  createStackNavigator,
  createBottomTabNavigator,
  createAppContainer
} from 'react-navigation';
import LeaderboardScreen from '../screens/LeaderboardScreen';
import QuizzesScreen from '../screens/QuizzesScreen';
import TeamsScreen from '../screens/TeamsScreen';
import TeamCardScreen from '../screens/TeamCardScreen';
import AboutScreen from '../screens/AboutScreen';
import { Ionicons } from '@expo/vector-icons';
import { colors } from '../utils';

const LeaderboardStack = createStackNavigator({
  Leaderboard: {
    screen: LeaderboardScreen,
    navigationOptions: {
      headerTitle: 'Leaderboard'
    }
  },
  TeamCard: {
    screen: TeamCardScreen,
    navigationOptions: ({ navigation }) => ({
      headerTitle: navigation.getParam('item', {}).team_name
    })
  }
});

const QuizzesStack = createStackNavigator({
  Quizzes: {
    screen: QuizzesScreen,
    navigationOptions: {
      headerTitle: 'Quizzes'
    }
  }
});

const TeamsStack = createStackNavigator({
  Teams: {
    screen: TeamsScreen,
    navigationOptions: {
      headerTitle: 'Teams'
    }
  },
  TeamCard: {
    screen: TeamCardScreen,
    navigationOptions: ({ navigation }) => ({
      headerTitle: navigation.getParam('item', {}).team_name
    })
  }
});

const AboutStack = createStackNavigator({
  About: {
    screen: AboutScreen,
    navigationOptions: {
      headerTitle: 'About'
    }
  }
});

const Tabs = createBottomTabNavigator(
  {
    Leaderboard: LeaderboardStack,
    Quizzes: QuizzesStack,
    Teams: TeamsStack,
    About: AboutStack
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, horizontal, tintColor }) => {
        const { routeName } = navigation.state;
        let Icon = Ionicons;
        let iconName;
        if (routeName === 'Leaderboard') {
          iconName = `ios-trophy`;
        } else if (routeName === 'Quizzes') {
          iconName = `ios-list`;
        } else if (routeName === 'Teams') {
          iconName = `ios-contacts`;
        } else if (routeName === 'About') {
          iconName = `ios-information-circle${focused ? '' : '-outline'}`;
        }

        // You can return any component that you like here!
        return <Icon name={iconName} size={25} color={tintColor} />;
      }
    }),
    tabBarOptions: {
      activeTintColor: `${colors.primaryDark}`,
      inactiveTintColor: `${colors.blackFaded}`
    }
  }
);

export default createAppContainer(Tabs);
