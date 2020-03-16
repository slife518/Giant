import React, {Component} from 'react';
import LoginScreen from './src/LoginScreen';
import SignUpScreen from './src/SignUpScreen';
import MainScreen from './src/MainScreen';
import {createAppContainer} from '@react-navigation/native';
import {createStackNavigator} from 'react-navigation-stack';
import {Provider} from 'react-redux';

// export default createAppContainer(
//     AppNavigator
//   )

export default class App extends Component {
  render() {
    const AppNavigator = createStackNavigator({
      Home: {
        screen: LoginScreen,
        navigationOptions: {
          header: null,
        },
      },
      SignUp: {
        screen: SignUpScreen,
        navigationOptions: {
          header: null,
        },
      },
      Main: {
        screen: MainScreen,
        navigationOptions: {
          header: null,
        },
      },
    });

    let Navigation = createAppContainer(AppNavigator);

    return (
      <Provider>
        <Navigation />
      </Provider>
    );
  }
}
