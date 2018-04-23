// /**
//  * Sample React Native App
//  * https://github.com/facebook/react-native
//  * @flow
//  */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
import { Container, Header, Content, Tab, Tabs } from 'native-base';
import { Footer, FooterTab, Button, Icon } from 'native-base';
import {StackNavigator} from 'react-navigation';
import { NativeRouter, Link } from 'react-router-native';
import { Navigation,BottomNavigation, Card } from 'react-router-navigation';

import Tab1 from './tabOne';
import Tab2 from './tabTwo';
import LoginScreen from './login';
import DicoveryScreen from './landing';
import SessionScreen from './sessionOne';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

const App = StackNavigator({
  Home: { screen: HomeScreen },
  Login: { screen: LoginScreen },
  Dicovery: { screen: DicoveryScreen },
  Session: { screen: SessionScreen }
});

class HomeScreen extends React.Component {
  render() {
    const { navigate } = this.props.navigation;
    return (
      <Button
        title="Go to Jane's profile"
        onPress={() =>
          navigate('Login', { name: 'Jane' })
        }
      />
    );
  }
}




const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
