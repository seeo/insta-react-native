import React, {Component} from 'react';
import {StyleSheet, View} from 'react-native';
import InstaClone from './src/client/components/InstaClone';

// const instructions = Platform.select({
//   ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
//   android:
//     'Double tap R on your keyboard to reload,\n' +
//     'Shake or press menu button for dev menu',
// });

class App extends Component {
  render() {
    return (
        <InstaClone />
    );
  }
}

export default App