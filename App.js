import React from 'react';
import { Button, View, Text } from 'react-native';
import { StackNavigator } from 'react-navigation'; // Version can be specified in package.json


import Tab1 from './tabOne';
import Tab2 from './tabTwo';
import LoginScreen from './login';
import DicoveryScreen from './landing';
import SessionScreen from './sessionOne';
import OptionsScreen from './options';
import ProfileScreen from './profile';

import { YellowBox } from 'react-native';
YellowBox.ignoreWarnings(['Warning: isMounted(...) is deprecated', 'Module RCTImageLoader']);


class HomeScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Home Screen</Text>
        <Button
          title="Go to Details"
          onPress={() => this.props.navigation.navigate('Details')}
        />
                <Button
          title="Login"
          onPress={() => this.props.navigation.navigate('Login')}
        />
      
      </View>
    );
  }
}

class DetailsScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Details Screen</Text>
        <Button
          title="Go to Details... again"
          onPress={() => this.props.navigation.navigate('Details')}
        />
      </View>
    );
  }
}

const RootStack = StackNavigator(
  {
    Home: {
      screen: HomeScreen
    },
    Details: {
      screen: DetailsScreen,
    },
    Login: { screen: LoginScreen },
    Dicovery: { screen: DicoveryScreen },
    Session: { screen: SessionScreen },
    Options: { screen: OptionsScreen },
    Profile: { screen: ProfileScreen },

  },
  {

    initialRouteName: 'Login',
        /* The header config from HomeScreen is now here */
        navigationOptions: {
          headerLeft: null
        },
  }
);

export default class App extends React.Component {
  render() {
    return <RootStack />;
  }
}